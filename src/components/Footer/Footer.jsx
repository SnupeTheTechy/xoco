import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="company-info">
            <h3>Company Info</h3>
            <p>About Us</p>
            <p>Social Responsibility</p>
            <p>Supply Chain</p>
            <p>Careers</p>
            <p>Student Discount</p>
            <p>Wholesaler Program</p>
          </div>
          <div className="company-info">
            <h3>Help & Support</h3>
            <p>Shipping Info</p>
            <p>Returns</p>
            <p>How To Order</p>
            <p>How To Track</p>
            <p>Size Guide</p>
            <p>VIP Access</p>
          </div>
          <div className="company-info">
            <h3>Customer Care</h3>
            <p>Contact Us</p>
            <p>Payments & Tax</p>
            <p>Referral Bonuses</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="find-us">
            <div>
              <h3>Find Us On</h3>
              <div className="social-media">
                <FacebookIcon className="icons" />
                <InstagramIcon className="icons" />
                <TwitterIcon className="icons" />
                <YouTubeIcon className="icons" />
                <PinterestIcon className="icons" />
              </div>
            </div>
            <div className="download-apps">
              <h3>Download Our App </h3>
              <div className="store-icons">
                <AppleIcon className="icons" />
                <ShopIcon className="icons" />
              </div>
            </div>
          </div>
          <div className="newsletter">
            <h3>Sign Up For Our Ever Exciting Newsletter</h3>
            <div className="newsletter-input">
              <input type="text" placeholder="Enter Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footnote">
        <p>2023-2079 Xoco All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
