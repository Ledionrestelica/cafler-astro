import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sanityClient as client } from "sanity:client";
import { urlForImage } from "@/sanity/lib/urlForImage";
import { navigate } from "astro:transitions/client";

interface CarMake {
  _id: string;
  name: string;
  logo: {
    asset: {
      _ref: string;
    };
  };
}

interface CarModel {
  _id: string;
  model: string;
  years: number[];
}

const Filter = () => {
  const [makes, setMakes] = useState<CarMake[]>([]);
  const [models, setModels] = useState<CarModel[]>([]);
  const [years, setYears] = useState<number[]>([]);

  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    const fetchMakes = async () => {
      const data = await client.fetch(
        `*[_type == "carMake"]{ _id, name, logo }`
      );
      setMakes(data);
    };
    fetchMakes();
  }, []);

  useEffect(() => {
    if (!selectedMake) return;
    const fetchModels = async () => {
      const data = await client.fetch(
        `*[_type == "carModel" && make._ref == $makeId]{ _id, model, years }`,
        { makeId: selectedMake }
      );
      setModels(data);
      setYears([]);
      setSelectedModel(null);
      setSelectedYear(null);
    };
    fetchModels();
  }, [selectedMake]);

  useEffect(() => {
    if (!selectedModel) return;
    const modelData = models.find((model) => model._id === selectedModel);
    setYears(modelData?.years || []);
    setSelectedYear(null);
  }, [selectedModel]);

  const handleNavigate = () => {
    const makeName = makes.find((make) => make._id === selectedMake)?.name;
    const modelName = models.find(
      (model) => model._id === selectedModel
    )?.model;

    if (!makeName || !modelName) return;

    const slug = [
      makeName.toLowerCase(),
      modelName.toLowerCase(),
      selectedYear?.toString() || "",
    ]
      .filter(Boolean)
      .join("-");

    navigate(`/cover/${slug}`);
  };

  return (
    <div className="w-full bg-[#FCFCFC] py-[100px] px-4 flex gap-8 flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="black text-[36px]">FIND YOUR CAR COVER</h2>
        <p className="regular text-[#3C4043] text-[16px]">
          Find the perfect car cover to protect your vehicle from weather, dust,
          and damage with a custom fit for lasting protection.
        </p>
      </div>
      <div className="border w-full max-w-[1000px] bg-white border-stroke py-[30px] px-[30px] items-center flex flex-col md:flex-row md:gap-10 gap-3">
        <div className="space-y-2 flex-1 w-full">
          <p className="extrabold text-[16px]">MAKE</p>
          <Select onValueChange={(value) => setSelectedMake(value)}>
            <SelectTrigger className="rounded-none focus-within:ring-0 focus-visible:ring-0 semibold">
              <SelectValue placeholder="Select Make" />
            </SelectTrigger>
            <SelectContent
              style={{ userSelect: "none" }}
              className="semibold rounded-none"
            >
              {makes.map((make) => (
                <SelectItem key={make._id} value={make._id}>
                  <div className="flex flex-row-reverse justify-between gap-8 w-full">
                    <p className="flex-1">{make.name}</p>
                    <img
                      className="aspect-video w-[25px]"
                      src={urlForImage(make.logo.asset).url()}
                    ></img>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 flex-1 w-full">
          <p className="extrabold text-[16px]">MODEL</p>
          <Select
            onValueChange={(value) => setSelectedModel(value)}
            disabled={!selectedMake}
          >
            <SelectTrigger className="rounded-none uppercase focus-within:ring-0 focus-visible:ring-0 semibold">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent className="semibold uppercase rounded-none">
              {models.map((model) => (
                <SelectItem key={model._id} value={model._id}>
                  {model.model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 flex-1 w-full">
          <p className="extrabold text-[16px]">YEAR</p>
          <Select
            onValueChange={(value) => setSelectedYear(parseInt(value, 10))}
            disabled={!selectedModel}
          >
            <SelectTrigger className="rounded-none focus-within:ring-0 focus-visible:ring-0 semibold">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent className="semibold rounded-none">
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Filter Button */}
        <div className="flex-1 w-full">
          <button
            disabled={!selectedMake && !selectedModel && !selectedYear}
            className="semibold text-1xl flex-1 bg-[var(--color-blue-500)] text-white w-full py-3"
            onClick={handleNavigate}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
