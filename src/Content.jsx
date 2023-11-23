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
        "md:min-w-[470px] md:max-w-[470px] md:py-[30px] lg:min-w-[50%] lg:max-w-[50%] xl:py-[60px]",
        bgColor
      )}
    >
      <div className="flex items-center pb-[10px] md:pb-[20px]">
        <div className="mr-[10px]">
          <div
            className={clsx(
              "mb-[4px] text-[14px] md:text-[18px] tracking-[1.5px]",
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
            "text-[28px] tracking-[1.5px] text-[#C2C2C2] md:text-[36px]"
          )}
        >
          {titleText}
        </span>
      </div>
      <div
        className={clsx(
          "min-h-[85px] md:min-h-0 text-[15px] text-black md:text-[20px] md:leading-[28px]",
          descriptionColor
        )}
      >
        {description}
      </div>
    </div>
  );
};

export default Content;
