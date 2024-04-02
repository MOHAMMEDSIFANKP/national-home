import ErrorHandler from "./ErrorHandler";
import "./variable-manager.css";

const VariableManager = () => {
  return (
    <div className="variable-manager">
      <div className="frame-parent6">
        <div className="error-handler-wrapper">
          <ErrorHandler ourPresence="Our Presence" />
        </div>
        <div className="mumbai">
          <img
            className="mumbai-001-1-icon"
            loading="lazy"
            alt=""
            src="/32897890-mumbai-001-1.svg"
          />
          <div className="frame-parent7">
            <div className="mumbai-parent">
              <h1 className="mumbai1">Mumbai</h1>
              <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim. `}</div>
            </div>
            <div className="read-more-parent1">
              <div className="read-more3">See Projects</div>
              <img className="frame-icon" alt="" src="/frame-1171275376.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariableManager;
