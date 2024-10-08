export const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="wrapper mt-[38px] grid grid-cols-1 md:grid-cols-2 items-center md:wrapper-md lg:wrapper-lg">
        <div className="w-auto md:translate-y-[-60px] lg:w-[457px]">
          <h1 className="text-[#13183F] text-[40px] leading-[51px] font-heading w-full font-bold lg:text-[56px] ">
            Maximize skill,
            <br />
            minimize budget
          </h1>
          <p className="text-[#83869A] text-[1.25rem] font-heading mt-[29px] text-medium leading-[26px] lg:mt-[35px]">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <button className="btn-secondary font-heading mt-[24px] lg:mt-[40px]">
            Get Started
          </button>
        </div>
        <div className="max-w-[640px] h-auto flex justify-center md:w-[640px] md:h-[640px] ">
          <img
            className=" mt-[46px] md:hidden"
            src="./img1.png"
            alt="about img"
          />
          <img
            className="hidden w-full h-full scale-150 translate-x-[60px] translate-y-[-100px] md:block lg:top-[-160px]"
            src="./img2.png"
            alt=""
          />
        </div>
      </div>
    </div>
    
  )};

