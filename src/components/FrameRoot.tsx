import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameRootType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
};

const FrameRoot: FunctionComponent<FrameRootType> = ({
  propPadding,
  propGap,
  propPadding1,
  propPadding2,
}) => {
  const frameRootStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div
      className="flex flex-col items-center justify-start py-0 pr-0 pl-5 box-border gap-[13px_0px] max-w-full text-center text-lg text-darkslategray-200 font-poppins"
      style={frameRootStyle}
    >
      <div className="w-[344.6px] h-[130px] relative leading-[30px] flex items-center justify-center shrink-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        In hac habitasse platea dictumst. Vivamus eget fermentum
      </div>
      <div
        className="flex flex-row items-start justify-start py-0 pr-0 pl-[27px] text-mini text-darkslateblue-200"
        style={frameDivStyle}
      >
        <div
          className="flex flex-row items-center justify-start gap-[0px_5px]"
          style={frameDiv1Style}
        >
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
  );
};

export default FrameRoot;
