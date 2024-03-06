import { FunctionComponent } from "react";
import FrameRoot from "./FrameRoot";

const ListItemLinkPhilanthropy: FunctionComponent = () => {
  return (
    <div className="self-stretch h-[560px] relative max-w-full text-center text-13xl text-darkslateblue-200 font-crimson-text mq1050:h-auto mq1050:min-h-[560]">
      <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-center justify-start gap-[44px_0px] max-w-full h-full mq750:gap-[44px_0px]">
        <div className="w-[650px] flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border max-w-full mq750:max-w-[calc(100%_-_3px)]">
          <h2 className="m-0 h-9 flex-1 relative text-inherit leading-[28.6px] font-semibold font-inherit flex items-center justify-center max-w-full mq450:text-lgi mq450:leading-[17px] mq1050:text-7xl mq1050:leading-[23px]">
            Discover the other exercise at FitSnap
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center gap-[0px_47px] max-w-full text-lgi text-navy-200 font-poppins mq750:gap-[0px_47px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-row items-end justify-center min-w-[467px] [row-gap:20px] max-w-full mq750:flex-wrap mq750:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[22px_0px] min-w-[345px] max-w-full mq450:min-w-full mq750:flex-1">
              <div className="w-[310px] flex flex-row items-start justify-start py-0 px-[31px] box-border">
                <div className="flex-1 flex flex-row items-center justify-center">
                  <div className="h-[250px] flex-1 relative">
                    <div className="absolute top-[0px] left-[-0.65px] rounded-[50%] bg-goldenrod w-full h-full" />
                    <img
                      className="absolute top-[16px] left-[20.75px] w-[205px] h-[217px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-813@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[11px_0px]">
                <div className="w-[162px] h-[27px] flex flex-row items-start justify-start py-0 pr-[17px] pl-0 box-border mq450:max-w-[calc(100%_-_17px)]">
                  <div className="self-stretch flex-1 relative leading-[20.9px] font-semibold flex items-center justify-center">
                    Chest press
                  </div>
                </div>
                <div className="w-[344.6px] h-[130px] relative text-lg leading-[30px] text-darkslategray-200 flex items-center justify-center shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. In hac habitasse platea dictumst. Vivamus eget
                  fermentum
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[18px] pl-0 text-mini text-darkslateblue-200 mq450:max-w-[calc(100%_-_18px)]">
                  <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                    <div className="relative leading-[22px]">{`Read More `}</div>
                    <img
                      className="h-3.5 w-[13.4px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/section--article.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[8px_0px] min-w-[243px] max-w-full ml-[-1px] mq750:ml-0">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="w-[351px] flex flex-row items-center justify-center py-0 pr-5 pl-0 box-border max-w-full">
                  <div className="h-[263px] flex-1 relative max-w-full">
                    <div className="absolute top-[0px] left-[72px] rounded-[50%] bg-palegreen w-[248.3px] h-[250px]" />
                    <img
                      className="absolute top-[14px] left-[0px] w-[331px] h-[249px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-813-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[27px] flex flex-row items-start justify-start py-0 px-[77px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="self-stretch relative leading-[20.9px] font-semibold flex items-center justify-center">
                  Straight leg deadlift
                </div>
              </div>
              <FrameRoot />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[21px_0px] min-w-[345px] max-w-full mq450:min-w-full mq1050:flex-1">
            <div className="flex flex-row items-start justify-start py-0 pr-[30px] pl-[29px]">
              <div className="w-[250px] flex flex-row items-center justify-center py-0 pr-px pl-0 box-border">
                <div className="h-[258px] flex-1 relative">
                  <div className="absolute top-[8px] left-[0.3px] rounded-[50%] bg-skyblue w-[248.3px] h-[250px]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-[223px] h-[214px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-813-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="w-[177px] flex flex-row items-start justify-start py-0 pr-[19px] pl-0 box-border mq450:max-w-[calc(100%_-_18px)]">
                <div className="h-[27px] flex-1 relative leading-[20.9px] font-semibold flex items-center justify-center shrink-0 z-[1]">
                  Crunches
                </div>
              </div>
              <FrameRoot
                propPadding="unset"
                propGap="22px 0px"
                propPadding1="0px 0px 0px 13px"
                propPadding2="0px 1px 0px 0px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[558.6px] left-[112.8px] bg-darkslateblue-200 w-[101.9px] h-px z-[1]" />
      <div className="absolute top-[559px] left-[508px] w-[487px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="h-px w-[101.9px] relative bg-darkslateblue-200 z-[1]" />
        <div className="h-px w-[101.9px] relative bg-darkslateblue-200 z-[1]" />
      </div>
    </div>
  );
};

export default ListItemLinkPhilanthropy;
