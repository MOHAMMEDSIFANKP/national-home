import ListManager from "./ListManager";
import "./frame-component.css";

const FrameComponent = () => {
  return (
    <div className="image-processor-parent">
      <div className="image-processor">
        <ListManager unsplashOOE4xAnBhKo="/unsplashooe4xanbhko@2x.png" />
        <ListManager
          unsplashOOE4xAnBhKo="/unsplashooe4xanbhko-1@2x.png"
          propLineHeight="32px"
          propMinWidth="108px"
          propHeight="unset"
        />
        <ListManager
          unsplashOOE4xAnBhKo="/unsplashooe4xanbhko-1@2x.png"
          propLineHeight="150%"
          propMinWidth="unset"
          propHeight="32px"
        />
      </div>
      <div className="frame-wrapper1">
        <div className="prev-group">
          <div className="prev4">
            <b className="prev5">Prev</b>
          </div>
          <div className="square-shape">
            <img className="square-shape-child" alt="" src="/line-2.svg" />
          </div>
          <div className="next">
            <b className="prev6">Next</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
