import "./products.css";

function Products({
  productImage,
  productName,
  productPrice,
  productDiscount,
}) {
  return (
    <div className="product-container">
      <div className="product-content">
        <div className="product-image">
          <img src={productImage} alt="" />
        </div>
        <div className="product-desc">
          <div className="product-text">
            <h1>{productName}</h1>
            <p>{productDiscount}</p>
          </div>
          <div className="product-price">
            <span>${productPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
