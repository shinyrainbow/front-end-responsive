import clsx from "clsx";
import React from "react";

const MobileTopic = ({text}) => {
  return (
    <div
      className={clsx(
        "w-full px-[20px] text-[50px] text-[#E7E7E7]"
      )}
    >
      {text}
    </div>
  );
};

export default MobileTopic;
