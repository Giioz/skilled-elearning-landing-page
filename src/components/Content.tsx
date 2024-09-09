import { ContentConfig } from "../configs/ContentConfig";
import { ContentCard } from "./ContentCard";

export const Content = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[rgb(240,241,255)] pb-[5rem] flex w-full justify-center lg:mt-[46px]">
      <div className=" wrapper pt-[20px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[56px] lg:wrapper-lg">
        <div className="w-[21.4rem] h-[7.5rem] customlinear rounded-[0.6rem] md:w-[21.4rem] md:h-[16.1rem] md:mt-[1.4rem]">
          <p className="text-[1.5rem] text-white font-bold pt-[24px] pl-[28px]">
            Check out our most <br /> popular courses!
          </p>
        </div>
        {ContentConfig.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
