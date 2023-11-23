import clsx from "clsx";
import React from "react";

const Topic = ({ isRightContent, text }) => {
  return (
    <div
      className={clsx(
        "flex w-full pb-[15px] md:px-[30px] xl:px-[195px] xl:pb-[10px]",
        isRightContent ? "md:justify-end" : "md:justify-start"
      )}
    >
      <div className="text-[90px] text-[#E7E7E7] md:min-w-[470px] md:max-w-[470px] lg:min-w-[50vw] lg:max-w-[50vw]">
        {text}
      </div>
    </div>
  );
};

export default Topic;
