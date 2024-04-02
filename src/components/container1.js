import "./container1.css";

const Container1 = () => {
  return (
    <div className="container2">
      <div className="blur-effect" />
      <div className="glow-effect">
        <div className="shadow-effect">
          <div className="text-button7">Home</div>
          <div className="text-button8">Projects</div>
          <div className="text-button9">Rentals</div>
          <div className="text-button10">About</div>
          <div className="contact">Contact</div>
          <div className="testimonials">Testimonials</div>
          <div className="news-events">{`News & Events`}</div>
          <div className="blogs">Blogs</div>
          <div className="key-handover">Key handover</div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
