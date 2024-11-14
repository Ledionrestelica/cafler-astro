import Stars from "./Stars";

const Hero = () => {
  return (
    <div className="w-full relative h-[700px] md:h-[80vh] z-10 bg-secondary">
      <video
        src="https://utfs.io/f/xc8ncM9GxqjHiS3Qr1O2huiU1xO43VMtK8JRmsIqWQkBevfp"
        title="Video player"
        className="md:w-1/2 w-full right-0 top-0 bottom-0 min-h-[100%] object-cover absolute z-[1]"
        autoPlay
        playsInline
        loop
        muted
      ></video>

      <div className="max-w-[1440px] mx-auto flex items-end h-full py-20 z-10 px-4">
        <div className="space-y-4 z-10">
          <div className="flex space-x-2 md:mx-0">
            <p className="uppercase text-white text-lg semibold">Excellent</p>
            <Stars star={5}></Stars>
          </div>
          <h1 className="black lg:text-[38px] md:text-[38px] text-[32px] text-white uppercase">
            The #1 Solution for <br></br> Car Owners
          </h1>
          <p className="text-white regular text-[16px]">
            Shield your car from weather, dust, and scratches with our<br></br>
            custom-fit covers, ensuring top protection wherever you park.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a aria-label="Find Car Cover" href="/find-cover">
              <button className="bg-[var(--color-blue-500)] hover:bg-transparent border border-transparent hover:border-white box-border flex-shrink-0 extrabold px-[28px] transition-all duration-150 py-[12px] text-white">
                ORDER NOW
              </button>
            </a>
            <button className="px-[28px] flex-shrink-0 extrabold py-[12px] hover:bg-[var(--color-blue-500)] text-white border border-stroke">
              FIND YOUR CAR COVER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
