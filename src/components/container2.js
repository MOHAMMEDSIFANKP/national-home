import { useMemo } from "react";
import "./container2.css";

const Container2 = ({
  nAVIMUMBAI,
  nationalBuildersOfficeSea,
  textButton,
  textButton1,
  propGap,
  propMinHeight,
  propLineHeight,
  propMinWidth,
}) => {
  const containerStyle = useMemo(() => {
    return {
      gap: propGap,
      minHeight: propMinHeight,
    };
  }, [propGap, propMinHeight]);

  const textButtonStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propMinWidth]);

  return (
    <div className="container1" style={containerStyle}>
      <div className="button">
        <img className="icon1" alt="" src="/icon-1.svg" />
        <div className="text-button4">
          <p className="navi-mumbai1">{nAVIMUMBAI}</p>
          <p className="national-builders-office">
            {nationalBuildersOfficeSea}
          </p>
        </div>
      </div>
      <div className="button1">
        <img className="icon2" alt="" src="/icon-2.svg" />
        <div className="text-button5">{textButton}</div>
      </div>
      <div className="button2">
        <img className="icon3" alt="" src="/icon-3.svg" />
        <div className="text-button6" style={textButtonStyle}>
          {textButton1}
        </div>
      </div>
    </div>
  );
};

export default Container2;
