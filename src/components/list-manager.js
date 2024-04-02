import { useMemo } from "react";
import "./list-manager.css";

const ListManager = ({
  unsplashOOE4xAnBhKo,
  propLineHeight,
  propMinWidth,
  propHeight,
}) => {
  const march162022Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const readMoreStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propMinWidth, propHeight]);

  return (
    <div className="list-manager">
      <div className="unsplashooe4xanbhko-parent">
        <img
          className="unsplashooe4xanbhko-icon"
          loading="lazy"
          alt=""
          src={unsplashOOE4xAnBhKo}
        />
        <div className="dropdown-menu">
          <div className="slider-control">
            <b className="renting-vs-buying">
              Renting vs Buying: What is the Right Choice for You in Kochi?
            </b>
            <div className="march-162022" style={march162022Style}>
              March 16,2022
            </div>
          </div>
          <div className="at-accumsan-condimentum-donec-parent">
            <div className="at-accumsan-condimentum">{`At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas. `}</div>
            <div className="component-369">
              <div className="read-more7" style={readMoreStyle}>
                Read more
              </div>
              <img
                className="chevrons-right-icon"
                alt=""
                src="/chevronsright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="list-manager-inner">
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="article">Article</div>
        </div>
      </div>
    </div>
  );
};

export default ListManager;
