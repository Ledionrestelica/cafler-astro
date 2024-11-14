import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { urlForImage } from "@/sanity/lib/urlForImage";
import type { Make } from "@/utils/types";
import { useState, useEffect } from "react";
import { sanityClient as client } from "sanity:client";

const Filter = () => {
  const [selectedMake, setSelectedMake] = useState("");

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
          <Select onValueChange={setSelectedMake}>
            <SelectTrigger className="rounded-none focus-within:ring-0 focus-visible:ring-0 semibold">
              Select
            </SelectTrigger>
            <SelectContent className="semibold rounded-none">
              <SelectItem
                className="px-1"
                value={selectedMake || "Select a make"}
              >
                Select a make
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 flex-1 w-full">
          <p className="extrabold text-[16px]">MODEL</p>
          <Select>
            <SelectTrigger className="rounded-none focus-within:ring-0 focus-visible:ring-0 semibold">
              Select
            </SelectTrigger>
            <SelectContent className="semibold rounded-none">
              <SelectItem className="px-1" value="Value 1">
                Select
              </SelectItem>
              <SelectItem className="px-1" value="Value 2">
                Select1
              </SelectItem>
              <SelectItem className="px-1" value="Value 3">
                Select2
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 flex-1 w-full">
          <p className="extrabold text-[16px]">YEAR</p>
          <Select>
            <SelectTrigger className="rounded-none focus-within:ring-0 focus-visible:ring-0 semibold">
              Select
            </SelectTrigger>
            <SelectContent className="semibold rounded-none">
              <SelectItem className="px-1" value="Value 1">
                Select
              </SelectItem>
              <SelectItem className="px-1" value="Value 2">
                Select1
              </SelectItem>
              <SelectItem className="px-1" value="Value 3">
                Select2
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 w-full">
          <button className="semibold text-1xl flex-1 bg-[var(--color-blue-500)] text-white w-full py-3">
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
