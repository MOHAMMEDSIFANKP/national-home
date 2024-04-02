import { useMemo } from "react";
import "./thane.css";

const Thane = ({
  thane,
  pencilsketchadjusted63195,
  propFlex,
  propGap,
  propWidth,
  propHeight,
  propWidth1,
}) => {
  const thaneStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      width: propWidth,
    };
  }, [propFlex, propGap, propWidth]);

  const pencilsketchadjusted63195941IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  return (
    <div className="thane" style={thaneStyle}>
      <div className="frame-parent8">
        <div className="thane-parent">
          <h1 className="thane1">{thane}</h1>
          <div className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim. `}</div>
        </div>
        <div className="read-more-parent2">
          <div className="read-more4">See Projects</div>
          <img className="instance-child1" alt="" src="/frame-1171275376.svg" />
        </div>
      </div>
      <img
        className="pencilsketchadjusted-6319594-1-icon"
        loading="lazy"
        alt=""
        src={pencilsketchadjusted63195}
        style={pencilsketchadjusted63195941IconStyle}
      />
    </div>
  );
};

export default Thane;
