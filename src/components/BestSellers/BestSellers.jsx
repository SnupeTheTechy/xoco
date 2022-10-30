import "./bestsellers.css";
import SearchIcon from "@mui/icons-material/Search";
import Products from "../Products/Products";

function BestSellers() {
  return (
    <div className="bestSeller-container">
      <div className="bestSeller-content">
        <div className="bestSeller-text">
          <div className="bestSeller-heading">
            <h1>
              <span>Exclusive</span> Products
            </h1>
          </div>
          <div className="bestSeller-subheading">
            <p>
              Search for the latest fashion articles and find amazing products
              to buy from our huge collection
            </p>
          </div>
          <div className="search">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search products" />
            <button className="search-button">Explore Now</button>
          </div>
        </div>
        <div className="productSearch-bar">
          <div className="search-category">
            <span>Everything</span>
            <span>Popular</span>
            <span>Hot</span>
            <span>Recent</span>
            <span>Work</span>
          </div>
          <div className="filter">
            <span>Filters</span>
          </div>
        </div>
      </div>
      <div className="product-grid">
        <Products
          productImage="https://images.pexels.com/photos/4641825/pexels-photo-4641825.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Amelia"
          productDiscount="50% off"
          productPrice="100"
        />
        <Products
          productImage="https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Ariana"
          productDiscount="50% off"
          productPrice="100.59"
        />
        <Products
          productImage="https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Grande"
          productDiscount="50% off"
          productPrice="59.25"
        />
        <Products
          productImage="https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Andrade"
          productDiscount="50% off"
          productPrice="65.28"
        />
        <Products
          productImage="https://images.pexels.com/photos/5405645/pexels-photo-5405645.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Felnapecia"
          productDiscount="50% off"
          productPrice="89.88"
        />
        <Products
          productImage="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Tella"
          productDiscount="50% off"
          productPrice="125.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Edna"
          productDiscount="50% off"
          productPrice="25.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Perry"
          productDiscount="30% off"
          productPrice="250.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/4641825/pexels-photo-4641825.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Amelia"
          productDiscount="50% off"
          productPrice="100"
        />
        <Products
          productImage="https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Ariana"
          productDiscount="50% off"
          productPrice="100.59"
        />
        <Products
          productImage="https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Grande"
          productDiscount="50% off"
          productPrice="59.25"
        />
        <Products
          productImage="https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Andrade"
          productDiscount="50% off"
          productPrice="65.28"
        />
        <Products
          productImage="https://images.pexels.com/photos/5405645/pexels-photo-5405645.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Felnapecia"
          productDiscount="50% off"
          productPrice="89.88"
        />
        <Products
          productImage="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Tella"
          productDiscount="50% off"
          productPrice="125.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Edna"
          productDiscount="50% off"
          productPrice="25.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Perry"
          productDiscount="30% off"
          productPrice="250.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/4641825/pexels-photo-4641825.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Amelia"
          productDiscount="50% off"
          productPrice="100"
        />
        <Products
          productImage="https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Ariana"
          productDiscount="50% off"
          productPrice="100.59"
        />
        <Products
          productImage="https://images.pexels.com/photos/2249248/pexels-photo-2249248.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Grande"
          productDiscount="50% off"
          productPrice="59.25"
        />
        <Products
          productImage="https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Andrade"
          productDiscount="50% off"
          productPrice="65.28"
        />
        <Products
          productImage="https://images.pexels.com/photos/5405645/pexels-photo-5405645.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Felnapecia"
          productDiscount="50% off"
          productPrice="89.88"
        />
        <Products
          productImage="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Tella"
          productDiscount="50% off"
          productPrice="125.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Edna"
          productDiscount="50% off"
          productPrice="25.58"
        />
        <Products
          productImage="https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg?auto=compress&cs=tinysrgb&w=1600"
          productName="Perry"
          productDiscount="30% off"
          productPrice="250.58"
        />
      </div>
    </div>
  );
}

export default BestSellers;
