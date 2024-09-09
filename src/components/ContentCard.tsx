import { IContent } from "../configs/ContentConfig";

type Props = {
  item: IContent;
};

export const ContentCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="pt-[24px]">
      <div className="w-[21.4rem] h-[16.1rem] bg-white rounded-[10px] pl-[28px]">
        <div className="w-[3.5rem] h-[3.5rem] customlinear rounded-full flex justify-center items-center translate-y-[-50%]">
          <img className="w-[22px] h-[24px]" src={item.img} alt="" />
        </div>
        <div className="font-heading">
          <p className="text-[20px] text-[#13183F] font-bold">{item.title}</p>
          <p className="text-[16px] text-[#83869A] font-medium mt-[17px]">
            {item.description}
          </p>
          <button className="mt-[24px] text-[18px] font-bold text-[#F74780]">
            {item.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
