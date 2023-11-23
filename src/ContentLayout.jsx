import React from "react";
import clsx from "clsx";

const ContentLayout = ({ bgColor, children, isRightContent }) => {
  return (
    <div
      className={clsx(
        "w-full md:flex md:px-[30px] lg:px-[195px]",
        bgColor,
        isRightContent ? "md:justify-end" : "md:justify-start"
      )}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
