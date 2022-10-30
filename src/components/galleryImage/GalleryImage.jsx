import "./galleryImage.css";

function GalleryImage({ imageLink }) {
  return (
    <div className="galleryImage-container">
      <div className="galleryImage-image">
        <img src={imageLink} alt="" />
      </div>
    </div>
  );
}

export default GalleryImage;
