import { ContentConfig } from "../configs/ContentConfig";

export const Content = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[rgb(240,241,255)] pb-[5rem] flex w-full justify-center lg:mt-[46px]">
      <div className=" wrapper pt-[20px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[56px] lg:wrapper-lg">
        <div className="w-[21.4rem] h-[7.5rem] customlinear rounded-[0.6rem] md:w-[21.4rem] md:h-[16.1rem] md:mt-[1.4rem]">
          <p className="text-[1.5rem] text-white font-bold pt-[24px] pl-[28px]">
            Check out our most <br /> popular courses!
          </p>
        </div>
        {ContentConfig.map((item) => {
          return (
            <div className="pt-[24px]">
              <div className="max-w-[21.4rem] h-[16.1rem] bg-white rounded-[10px] pl-[28px]">
                <div className="w-[3.5rem] h-[3.5rem] customlinear rounded-full flex justify-center items-center translate-y-[-50%]">
                  <img className="w-[22px] h-[24px]" src={item.img} alt="" />
                </div>
                <div className="font-heading">
                  <p className="text-[20px] text-[#13183F] font-bold">
                    {item.title}
                  </p>
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
        })}
      </div>
    </div>
    // <div>
    //   {ContentConfig.map((item) => {
    //     return (
    //       <div>
    //         <div>{item.img}</div>
    //         <div>{item.title}</div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};
