import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const DivfooterFooterContainerSc: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-gray-200 flex flex-row items-end justify-between pt-14 px-[120px] pb-[111px] box-border max-w-full shrink-0 gap-[20px] text-left text-xs-4 text-white font-inter lg:flex-wrap mq450:pt-9 mq450:px-5 mq450:pb-[72px] mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
      <div className="h-[239px] w-[318px] flex flex-col items-start justify-start min-w-[318px] lg:flex-1">
        <div className="self-stretch h-[147px] flex flex-col items-start justify-start">
          <div className="w-[104px] flex-1 flex flex-col items-start justify-start gap-[17px_0px]">
            <b className="self-stretch relative text-base tracking-[1.7px] leading-[20px] uppercase font-crimson-text text-lightsteelblue">
              company
            </b>
            <div className="relative text-xs-3 tracking-[0.5px] leading-[16px]">
              Our story
            </div>
            <div className="relative tracking-[0.5px] leading-[16px]">
              Careers
            </div>
            <div className="w-[73.3px] relative tracking-[0.5px] leading-[16px] flex items-center">
              Blog
            </div>
            <div className="w-[73.3px] relative tracking-[0.5px] leading-[16px] flex items-center">
              About
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-end mt-[-147px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px_0px]">
              <b className="w-[82px] relative text-base tracking-[1.7px] leading-[20px] uppercase flex font-crimson-text text-lightsteelblue items-center">
                help
              </b>
              <div className="relative text-xs tracking-[0.5px] leading-[16px]">
                FAQ
              </div>
              <div className="relative tracking-[0.5px] leading-[16px]">{`Terms & Conditions`}</div>
              <div className="relative tracking-[0.5px] leading-[16px]">
                Privacy Policy
              </div>
              <div className="relative tracking-[0.5px] leading-[16px]">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-6 w-[18px] relative overflow-hidden shrink-0 hidden" />
      <div className="h-[139px] w-[536px] flex flex-col items-start justify-start min-w-[536px] max-w-full text-base text-lightsteelblue font-crimson-text lg:flex-1 mq1050:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[348px] flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
            <b className="w-[253px] relative tracking-[1.7px] leading-[12px] uppercase flex items-center">
              Stay updated with Us
            </b>
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[55px] font-inter font-medium text-mini-6 text-gray-100"
              placeholder="Your email address"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="32px" height="34px" src="/button--submit.svg" />
                ),
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "55px",
                  backgroundColor: "#fff",
                  paddingRight: "22px",
                  borderRadius: "0px 0px 0px 0px",
                  fontSize: "14.6px",
                },
                "& .MuiInputBase-input": { color: "#75787b" },
              }}
            />
            <div className="w-[258px] relative text-sm tracking-[0.5px] leading-[24px] font-inter text-white flex items-center">
              Copyright © 2023 FitSnap
            </div>
          </div>
        </div>
        <div className="w-[154px] flex flex-col items-start justify-start gap-[15px_0px] mt-[-139px]">
          <b className="self-stretch relative tracking-[1.7px] leading-[12px] uppercase">
            Social media
          </b>
          <div className="h-[26px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_9px]">
            <img
              className="h-[25px] w-[25px] relative object-cover"
              loading="lazy"
              alt=""
              src="/group@2x.png"
            />
            <img
              className="h-[25px] w-[25px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-[25px] w-[25px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/x-svg.svg"
            />
            <img
              className="h-[25px] w-[25px] relative"
              loading="lazy"
              alt=""
              src="/path-2520.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DivfooterFooterContainerSc;
