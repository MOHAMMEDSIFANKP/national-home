import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import VariableManager from "../components/VariableManager";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Thane from "../components/Thane";
import LayoutOrganizer from "../components/LayoutOrganizer";
import PropertyProvider from "../components/PropertyProvider";
import FrameComponent from "../components/FrameComponent";
import TableContainer from "../components/TableContainer";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import "./home-mar5-approved.css";

const HomeMar5Approved = () => {
  return (
    <div className="home-mar-5-approved">
      <section className="logic-tree">
        <FrameComponent5 />
        <FrameComponent4 />
        <div className="component-365">
          <FrameComponent3 />
          <div className="input-merger">
            <img className="background-hover-icon" alt="" />
            <img
              className="loop-controller-icon"
              alt=""
              src="/loop-controller.svg"
            />
            <img
              className="function-caller-icon"
              alt=""
              src="/function-caller.svg"
            />
            <img
              className="constant-holder-icon"
              alt=""
              src="/constant-holder.svg"
            />
          </div>
          <VariableManager />
          <FrameComponent2 />
          <FrameComponent1 />
          <Thane
            thane="Thiruvalla"
            pencilsketchadjusted63195="/frame-1171275804.svg"
            propFlex="unset"
            propGap="60px"
            propWidth="1619.4px"
            propHeight="287.6px"
            propWidth1="772.4px"
          />
        </div>
      </section>
      <section className="number-cruncher">
        <div className="component-13">
          <div className="lobby-3-1-parent">
            <img className="lobby-3-1" alt="" src="/lobby-3-1@2x.png" />
            <div className="icon-play">
              <img className="icon" loading="lazy" alt="" src="/icon@2x.png" />
            </div>
          </div>
        </div>
      </section>
      <LayoutOrganizer />
      <section className="component-368">
        <div className="low-angle-grayscale-shot-busin" />
        <PropertyProvider />
        <FrameComponent />
      </section>
      <section className="footer">
        <div className="container">
          <img
            className="national-logo-01-1-icon"
            alt=""
            src="/nationallogo-01-1-1@2x.png"
          />
          <div className="buttons-container">
            <div className="text-button">Home</div>
            <div className="text-button1">Projects</div>
            <div className="text-button2">Rentals</div>
            <div className="text-button3">About</div>
          </div>
        </div>
        <div className="line" />
        <TableContainer />
        <Container1 />
        <Container />
      </section>
    </div>
  );
};

export default HomeMar5Approved;
