export const About = () => {
  return (
    <div className="wrapper mt-[38px] md:wrapper-md">
      <div className="w-auto">
        <h1 className="text-[#13183F] text-[56px] leading-[51px] font-heading w-full font-bold md:text-[red]">
          Maximize skill,
          <br />
          minimize budget
        </h1>
        <p className="text-[#83869A] text-[20px] font-heading mt-[29px] text-medium leading-[26px]">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="btn-secondary font-heading mt-[24px]">
          Get Started
        </button>
      </div>
      <div>
        <img
          className="w-full h-full mt-[46px]"
          src="../../public/img1.png"
          alt="about img"
        />
      </div>
    </div>
  );
};
