import { FunctionComponent } from "react";

const ChildFrameB: FunctionComponent = () => {
  return (
    <section className="w-[1172px] flex flex-row items-start justify-end pt-0 px-5 pb-[68px] box-border max-w-full shrink-0 text-left text-7xl text-navy-200 font-poppins lg:pb-11 lg:box-border mq750:pb-[29px] mq750:box-border">
      <div className="w-[962px] flex flex-col items-start justify-start gap-[58px_0px] max-w-full mq750:gap-[58px_0px]">
        <div className="flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
            <h3 className="m-0 w-[264px] h-9 relative text-inherit leading-[28.6px] font-semibold font-inherit flex items-center shrink-0 mq450:text-2xl mq450:leading-[23px]">
              About the Exercise
            </h3>
            <div className="w-[749.2px] h-[131px] relative text-xl leading-[27px] text-darkslategray-300 flex items-center shrink-0 mq450:text-base mq450:leading-[22px]">
              The barbell curl is a classic and effective bicep exercise that
              targets the muscles in the front of your upper arms, specifically
              the biceps brachii. Barbell curls into your workout routine can
              help develop and strengthen your biceps, contributing to overall
              arm strength and aesthetics
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[23px_0px] max-w-full text-5xl">
          <div className="flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
            <div className="flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
              <div className="w-[209.3px] h-9 relative leading-[28.6px] font-semibold flex items-center shrink-0 mq450:text-lgi mq450:leading-[23px]">
                Target area
              </div>
              <div className="relative text-xl leading-[28.6px] text-darkslategray-300 whitespace-pre-wrap mq450:text-base mq450:leading-[23px]">
                Biceps brachii and forearm muscles
              </div>
            </div>
          </div>
          <div className="w-[289px] flex flex-row items-start justify-start py-0 px-3.5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
              <div className="self-stretch h-9 relative leading-[28.6px] font-semibold flex items-center shrink-0 mq450:text-lgi mq450:leading-[23px]">
                Level for difficulty
              </div>
              <div className="w-[168px] relative text-xl leading-[28.6px] text-darkslategray-300 whitespace-pre-wrap inline-block mq450:text-base mq450:leading-[23px]">{`Beginner friendly  `}</div>
            </div>
          </div>
          <div className="w-[365px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
              <div className="self-stretch h-9 relative leading-[28.6px] font-semibold flex items-center shrink-0 mq450:text-lgi mq450:leading-[23px]">
                Number of set
              </div>
              <div className="relative text-xl leading-[28.6px] text-darkslategray-300 mq450:text-base mq450:leading-[23px]">
                3
              </div>
            </div>
          </div>
          <div className="w-[365px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
              <div className="self-stretch h-9 relative leading-[28.6px] font-semibold flex items-center shrink-0 mq450:text-lgi mq450:leading-[23px]">{`Duration `}</div>
              <div className="relative text-xl leading-[28.6px] text-darkslategray-300 whitespace-pre-wrap mq450:text-base mq450:leading-[23px]">
                20 minutes
              </div>
            </div>
          </div>
          <div className="w-[365px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
              <div className="self-stretch h-9 relative leading-[28.6px] font-semibold flex items-center shrink-0 mq450:text-lgi mq450:leading-[23px]">
                Calories burn
              </div>
              <div className="relative text-xl leading-[28.6px] text-darkslategray-300 mq450:text-base mq450:leading-[23px]">
                150 cal
              </div>
            </div>
          </div>
          <div className="w-[365px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
              <div className="self-stretch h-9 relative leading-[28.6px] font-semibold flex items-center shrink-0 mq450:text-lgi mq450:leading-[23px]">
                Equipment needed
              </div>
              <div className="relative text-xl leading-[28.6px] text-darkslategray-300 mq450:text-base mq450:leading-[23px]">
                Barbell
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
              <div className="w-[357px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                <div className="h-9 flex-1 relative leading-[28.6px] font-semibold flex items-center max-w-full mq450:text-lgi mq450:leading-[23px]">
                  Instruction to perform
                </div>
              </div>
              <div className="w-[958px] relative text-xl leading-[28.6px] text-darkslategray-300 flex items-center mq450:text-base mq450:leading-[23px]">
                <ul className="m-0 font-inherit text-inherit pl-[27px]">
                  <li className="mb-0">
                    Stand up straight with your feet shoulder-width apart.
                  </li>
                  <li className="mb-0">
                    Hold a barbell with a shoulder-width grip, palms facing
                    forward (an underhand grip).
                  </li>
                  <li className="mb-0">
                    Your hands should be positioned slightly wider than your
                    shoulders.
                  </li>
                  <li className="mb-0">
                    Keep your wrists straight and aligned with your forearms.
                  </li>
                  <li className="mb-0">
                    Maintain a straight back, chest up, and shoulders back.
                  </li>
                  <li className="mb-0">
                    While keeping your upper arms stationary, exhale and curl
                    the barbell towards your shoulders by flexing your elbows.
                  </li>
                  <li className="mb-0">
                    Focus on contracting your biceps throughout the movement.
                  </li>
                  <li className="mb-0">
                    Inhale and slowly lower the barbell back to the starting
                    position with controlled movement.
                  </li>
                  <li className="mb-0">
                    Maintain tension on the biceps during the descent; do not
                    let the weight drop.
                  </li>
                  <li className="mb-0">
                    Repeat the movement for the desired number of repetitions.
                  </li>
                  <li>
                    Exhale during the lifting (concentric) phase and inhale
                    during the lowering (eccentric) phase.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px_0px] max-w-full">
            <div className="w-[363px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
              <div className="h-9 flex-1 relative leading-[28.6px] font-semibold flex items-center max-w-full mq450:text-lgi mq450:leading-[23px]">{`Tips `}</div>
            </div>
            <div className="w-[962px] relative text-xl leading-[28.6px] text-darkslategray-300 flex items-center mq450:text-base mq450:leading-[23px]">
              <ul className="m-0 font-inherit text-inherit pl-[27px]">
                <li className="mb-0">
                  Avoid using momentum by keeping your body still. Focus on
                  isolating the biceps.
                </li>
                <li className="mb-0">
                  Use a weight that allows you to maintain proper form and
                  control throughout the exercise.
                </li>
                <li>
                  Ensure a full range of motion, allowing your arms to fully
                  extend at the bottom and flex at the top.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildFrameB;
