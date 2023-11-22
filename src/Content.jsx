import React from "react";
import clsx from "clsx";

const Content = ({
  bgColor,
  number,
  numberColor,
  titleText,
  underlineColor,
  description,
  descriptionColor,
}) => {
  return (
    <div
      className={clsx(
        "md:min-w-[470px] md:max-w-[470px] md:py-[30px] lg:min-w-[50vw] lg:max-w-[50vw] xl:py-[60px]",
        bgColor
      )}
    >
      <div className="flex items-center">
        <div className="mr-[10px]">
          <div
            className={clsx(
              "mb-[4px] text-[14px] md:text-[18px]",
              numberColor
            )}
          >
            {number}
          </div>
          <div
            className={clsx(
              "h-[5px] w-[22px] rounded-[2.5px] bg-[#603EBE]",
              underlineColor
            )}
          ></div>
        </div>
        <span
          className={clsx(
            "text-[28px] leading-normal tracking-[1.5px] text-[#C2C2C2] md:text-[36px]"
          )}
        >
          {titleText}
        </span>
      </div>
      <div
        className={clsx(
          "pt-[15px] md:pt-[20px] text-[15px] leading-normal min-h-[85px] text-black md:text-[20px] md:leading-[28px]",
          descriptionColor
        )}
      >
        {description}
      </div>
    </div>
  );
};

export default Content;
