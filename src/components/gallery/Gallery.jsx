import GalleryImage from "../galleryImage/GalleryImage";
import "./gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h1>
          <span>Style</span> Gallery
        </h1>
        <p>This is how our products will look on you</p>
        <div className="gallery-grid">
          <GalleryImage imageLink="https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <GalleryImage imageLink="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <GalleryImage imageLink="https://images.pexels.com/photos/247206/pexels-photo-247206.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <GalleryImage imageLink="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <GalleryImage imageLink="https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <GalleryImage imageLink="https://images.pexels.com/photos/2531156/pexels-photo-2531156.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <GalleryImage imageLink="https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <GalleryImage imageLink="https://images.pexels.com/photos/3250567/pexels-photo-3250567.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
