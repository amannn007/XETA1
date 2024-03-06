import { FunctionComponent } from "react";
import Banner from "../components/Banner";
import Section from "../components/Section";
import FrameComponent from "../components/FrameComponent";
import ChildFrameB from "../components/ChildFrameB";
import HeaderFrame from "../components/HeaderFrame";
import ListItemLinkPhilanthropy from "../components/ListItemLinkPhilanthropy";
import DivfooterFooterContainerSc from "../components/DivfooterFooterContainerSc";

const Exercise: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white box-border flex flex-col items-center justify-start pt-0.5 pb-0 px-0 gap-[20px_0px] tracking-[normal] border-[1px] border-solid border-black">
      <Banner />
      <section className="w-[1281px] flex flex-col items-center justify-start pt-0 px-5 pb-[73px] box-border gap-[57px_0px] max-w-full shrink-0 lg:pb-[47px] lg:box-border mq750:gap-[57px_0px] mq750:pb-[31px] mq750:box-border">
        <Section />
        <FrameComponent />
      </section>
      <ChildFrameB />
      <HeaderFrame />
      <section className="w-[1114px] flex flex-row items-start justify-start pt-0 pb-[51px] pr-0 pl-1 box-border max-w-full shrink-0 text-center text-21xl text-darkslateblue-200 font-crimson-text lg:max-w-[calc(100%_-_4px)] mq450:pb-[21px] mq450:box-border mq1050:pb-[33px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-center justify-start gap-[78px_0px] max-w-full shrink-0 lg:gap-[78px_0px] mq750:gap-[78px_0px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[17px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-start gap-[24px_0px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full">
                <h1 className="m-0 h-[65px] w-[1067px] relative text-inherit leading-[42px] font-semibold font-inherit flex items-center justify-center shrink-0 max-w-full mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[34px]">
                  Elevate Your Fitness: The AI Workout Plan – Precision,
                  Progression, Perfection
                </h1>
                <div className="h-[522px] w-[528px] absolute !m-[0] top-[-483px] right-[-147px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[268px] h-[483px] object-cover z-[2]"
                    alt=""
                    src="/socialmedia@2x.png"
                  />
                  <img
                    className="absolute top-[39px] left-[260px] w-[268px] h-[483px] object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-818@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-mini text-darkslategray-300 font-poppins">
                <div className="w-[753.7px] relative leading-[22px] flex items-center justify-center shrink-0 max-w-full">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum augue. Integer congue, libero nec congue fermentum, neque turpis eleifend libero, sit amet dictum dolor felis quis quam. Sed tincidunt `}</div>
              </div>
            </div>
          </div>
          <ListItemLinkPhilanthropy />
        </div>
      </section>
      <DivfooterFooterContainerSc />
    </div>
  );
};

export default Exercise;
