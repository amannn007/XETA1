import { FunctionComponent } from "react";

const HeaderFrame: FunctionComponent = () => {
  return (
    <section className="flex flex-row items-start justify-start pt-0 pb-[42px] pr-0 pl-0.5 box-border max-w-full shrink-0 text-left text-21xl text-white font-crimson-text mq450:pb-[27px] mq450:box-border">
      <div className="w-[1439px] bg-gray-200 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[57px] px-0 pb-0 box-border gap-[63px_0px] max-w-full mq450:gap-[63px_0px] mq450:pt-[37px] mq450:box-border mq750:gap-[63px_0px]">
        <div className="w-[842px] h-[93px] relative overflow-hidden shrink-0 hidden max-w-full" />
        <div className="w-[898px] flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full shrink-0 mq1050:pl-[39px] mq1050:pr-[39px] mq1050:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px_0px] max-w-full">
            <div className="self-stretch h-[131px] relative flex items-center shrink-0 z-[1] mq450:text-10xl mq1050:text-19xl">
              <span>
                <p className="m-0">
                  <b>
                    <span>Download FitSnap Now</span>
                    <span className="text-29xl">{` `}</span>
                  </b>
                </p>
                <p className="m-0 text-17xl">
                  <span className="leading-[48px] font-semibold">
                    <span>and turn every workout into a visual</span>
                    <span className="text-29xl">{` `}</span>
                    <span className="text-13xl">{`masterpiece `}</span>
                  </span>
                </p>
              </span>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0px_46px] max-w-full mq450:flex-wrap mq450:gap-[0px_46px]">
              <img
                className="h-12 w-[162px] relative overflow-hidden shrink-0 min-h-[48px]"
                loading="lazy"
                alt=""
                src="/link--app-storesvg.svg"
              />
              <img
                className="h-12 w-[162.7px] relative overflow-hidden shrink-0 min-h-[48px]"
                loading="lazy"
                alt=""
                src="/link--google-playsvg.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/divshape.svg"
        />
      </div>
    </section>
  );
};

export default HeaderFrame;
