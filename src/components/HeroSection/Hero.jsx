import "./hero.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="herosmall-text">
            <p>Absolutely hot collections</p>
            <WhatshotIcon className="hot-icon" />
          </div>
          <div className="heromain-text">
            <h1 className="bounce-top">
              The Best Place To Find And Buy Amazing{" "}
              <span className="text-focus-in">Products</span>
            </h1>
          </div>
          <div className="heromain-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              veniam ducimus facilis impedit beatae quisquam eum, eos,
              architecto placeat ad non inventore.
            </p>
          </div>
          <div className="hero-btn">
            <button className="btn">Explore Now</button>
            <span>Request a demo</span>
          </div>
          <div className="hero-stats">
            <div className="hero-stats-box">
              <h1>20k+</h1>
              <p>Collections</p>
            </div>
            <div className="hero-stats-box">
              <h1>16k+</h1>
              <p>Users</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/6347538/pexels-photo-6347538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="heroLarge-img"
          />
          <div className="product-stats vibrate-3">
            <h1>5000+</h1>
            <p>Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
