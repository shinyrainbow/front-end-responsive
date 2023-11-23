import React from "react";
import { firstHalfContent, secondHalfContent } from "./data";
import Content from "./Content";
import ContentLayout from "./ContentLayout";
import MobileTopic from "./MobileTopic";
import Topic from "./Topic";
import SwiperPanel from "./SwiperPanel";

const App = () => {
  return (
    <div className="relative w-full pt-[20px] md:pt-[50px] xl:pt-[100px]">
      <div className="md:hidden">
        <MobileTopic text="ATHLETS" />
        <div className="relative mx-auto h-[251px] w-[200px]">
          <img
            src="/rectangle.svg"
            className="absolute -left-[18px] -top-[1px] opacity-30"
          />
          <img
            src="/rectangle.svg"
            className="absolute top-[11px]"
          />
          <img
            src="/path-line.svg"
            className="absolute top-[11px]"
          />
          <img
            src="/pic1.png"
            className="absolute left-1/2 z-20 mx-auto h-[281px] w-[200px] -translate-x-1/2 transform"
          />
        </div>
        <SwiperPanel data={firstHalfContent} />

        <MobileTopic text="PLAYERS" />
        <div className="relative mx-auto h-[251px] w-[302px]">
          <img
            src="/rectangle.svg"
            className="absolute -top-[1px] left-[18px] opacity-30"
          />
          <img
            src="/rectangle.svg"
            className="absolute left-[38px] top-[11px]"
          />
          <img
            src="/path-short-half-line.svg"
            className="absolute right-[18px] top-[20px]"
          />
          <img
            src="/path-half-line.svg"
            className="absolute left-[40px] top-[111px]"
          />
          <img
            src="/rectangle.svg"
            className="absolute bottom-[80px] right-[15px]"
          />
          <img
            src="/pic2.png"
            className="absolute left-1/2 mx-auto h-[249px] w-[302px] -translate-x-1/2 transform"
          />
        </div>
        <SwiperPanel data={secondHalfContent} />
      </div>

      <div className="relative hidden md:block">
        <div className="absolute md:-left-[calc(100vw-80%)] md:block md:h-[699px] md:w-[518px] lg:left-[100px] xl:-top-[50px] xl:h-[950px] xl:w-[678px]">
          <img
            src="/rectangle.svg"
            className="absolute -top-[15px] left-[200px] opacity-30 xl:hidden"
          />
          <img
            src="/rectangle.svg"
            className="absolute left-[220px] top-0 xl:hidden"
          />
          <img
            src="/path-line.svg"
            className="absolute right-[80px] top-0 xl:hidden"
          />
          <img
            src="/path-line.svg"
            className="absolute left-[20px] top-[300px] xl:hidden"
          />
          <img src="/pic1.png" className="absolute" />
        </div>
        <Topic isRightContent={true} text="ATHLETS" />
        {firstHalfContent.map((content) => {
          return (
            <ContentLayout bgColor={content.bgColor} isRightContent={true}>
              <Content
                key={content.titleText}
                bgColor={content.bgColor}
                number={content.number}
                numberColor={content.numberColor}
                titleText={content.titleText}
                underlineColor={content.underlineColor}
                description={content.description}
                descriptionColor={content.descriptionColor}
              />
            </ContentLayout>
          );
        })}
      </div>

      <div className="relative hidden md:block pt-[60px]">
        <Topic isRightContent={false} text="PLAYERS" />
        {secondHalfContent.map((content) => {
          return (
            <ContentLayout bgColor={content.bgColor} isRightContent={false}>
              <Content
                key={content.titleText}
                bgColor={content.bgColor}
                number={content.number}
                numberColor={content.numberColor}
                titleText={content.titleText}
                underlineColor={content.underlineColor}
                description={content.description}
                descriptionColor={content.descriptionColor}
              />
            </ContentLayout>
          );
        })}
        <div className="absolute md:-right-[calc(100vw-80%)] xl:right-[100px] md:block md:h-[586px] md:w-[691px] md:top-[20px] xl:-top-[30px] xl:h-[815px] xl:w-[991px]">
          <img
            src="/rectangle.svg"
            className="absolute left-[195px] top-[60px]"
          />
          <img
            src="/rectangle.svg"
            className="absolute left-[220px] top-[80px] opacity-30"
          />
          <img
            src="/path-line.svg"
            className="absolute right-[60px] top-[60px] xl:hidden"
          />
          <img
            src="/path-line.svg"
            className="absolute bottom-[70px] left-[130px] xl:hidden"
          />
          <img
            src="/path-long-line.svg"
            className="absolute right-[65px] top-[25px] opacity-0 xl:opacity-100"
          />
          <img
            src="/path-long-line.svg"
            className="absolute bottom-[160px] left-[200px] opacity-0 xl:opacity-100"
          />
          <img src="/pic2.png" className="absolute " />
        </div>
      </div>
    </div>
  );
};

export default App;
