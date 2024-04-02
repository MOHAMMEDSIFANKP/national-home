import Container2 from "./Container2";
import "./table-container.css";

const TableContainer = () => {
  return (
    <div className="table-container">
      <img
        className="national-media-sketch-2-icon"
        alt=""
        src="/nationalmedia-sketch-2.svg"
      />
      <div className="row-container">
        <Container2
          nAVIMUMBAI="NAVI MUMBAI"
          nationalBuildersOfficeSea="National Builders Office, Sea Queen Heritage Building, 1st Floor, Plot No.6, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai - 400705"
          textButton="marketingmumbai@nationalbuilders.in"
          textButton1="+ 91 22 49639871 / 72 / 73, 2249737814+91 9223300950 / 9223300960, +919004091082"
        />
        <div className="buttons-container1">
          <button className="button3">
            <img className="icon4" alt="" src="/icon-4.svg" />
          </button>
          <div className="button4">
            <img className="button-child" alt="" src="/frame-1171275779.svg" />
          </div>
          <button className="button5">
            <img className="icon5" alt="" src="/icon-5.svg" />
          </button>
          <div className="button6">
            <img
              className="combined-shape-icon"
              alt=""
              src="/combined-shape.svg"
            />
          </div>
        </div>
        <Container2
          nAVIMUMBAI="KOCHI"
          nationalBuildersOfficeSea="National Pearl Star, 5th Floor, High School Jn.Edappally, Kochi, Kerala - 682 024"
          textButton="marketingkochi@nationalbuilders.in"
          textButton1="+91 484 2340781, 2333391+91 484 2534558"
          propGap="unset"
          propMinHeight="354px"
          propLineHeight="32px"
          propMinWidth="unset"
        />
      </div>
    </div>
  );
};

export default TableContainer;
