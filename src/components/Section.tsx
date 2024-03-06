import { FunctionComponent } from "react";

const Section: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full text-left text-sm text-darkslategray-100 font-poppins">
      <img
        className="h-[697.5px] flex-1 relative max-w-full overflow-hidden"
        alt=""
        src="/section--image.svg"
      />
      <div className="w-[300px] !m-[0] absolute bottom-[27px] left-[-76px] rounded-31xl bg-white shadow-[1px_1px_15px_2px_rgba(0,_0,_0,_0.1)] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 pb-4 pr-0 pl-[31px] box-border z-[1]">
        <div className="flex flex-col items-start justify-start pt-[15px] pb-0 pr-[15px] pl-0">
          <img
            className="w-9 h-[37px] relative object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-814@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px]">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[37px] pl-0">
              <div className="h-[18px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="mb-[-4px] h-[22px] relative leading-[18px] font-medium flex items-center shrink-0">
                  100+ new users enrolled
                </div>
              </div>
            </div>
            <div className="relative text-xs leading-[18px] font-lato text-lightslategray">
              join now to get 20% instant discount
            </div>
          </div>
        </div>
        <div className="mt-[-5px] mr-[-3px] h-[15px] w-[15px] relative">
          <img
            className="absolute top-[0px] left-[0px] w-[15px] h-[15px] overflow-hidden"
            loading="lazy"
            alt=""
            src="/link--svg.svg"
          />
          <div className="absolute top-[12px] left-[0px] bg-darkslateblue-100 w-[15px] h-px z-[1]" />
        </div>
      </div>
    </div>
  );
};

export default Section;
