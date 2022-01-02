/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import siteData from './data';
import GalleryClosableLayout from './galleryclosablelayout';
import ImageGallery from 'react-image-gallery';
require("../../node_modules/react-image-gallery/styles/scss/image-gallery.scss");


const img1 = require("file-loader!../img/Lavan pihalla1200.jpg");
const img1t = require("file-loader!../img/Lavan pihalla320.jpg");

const img2 = require("file-loader!../img/lava auringossa1200.jpg");
const img2t = require("file-loader!../img/lava auringossa320.jpg");

const img3 = require("file-loader!../img/ilmakuva1200.jpg");
const img3t = require("file-loader!../img/ilmakuva320.jpg");

const img4 = require("file-loader!../img/haat1200.jpg");
const img4t = require("file-loader!../img/haat320.jpg");

const img5 = require("file-loader!../img/kahvila720.jpg");
const img5t = require("file-loader!../img/kahvila320.jpg");

const img6 = require("file-loader!../img/juhlissa1200.jpg");
const img6t = require("file-loader!../img/juhlissa320.jpg");

const img7 = require("file-loader!../img/lava ulkoa1200.png");
const img7t = require("file-loader!../img/lava ulkoa320.png");

const Kuvagalleria = () => {
  function handleImageLoad (event) {
    // console.log('Image loaded ', event.target)
  }
  const images = [
    {
      original: img1,
      thumbnail: img1t
    },
    {
      original: img2,
      thumbnail: img2t
    },
    {
      original: img3,
      thumbnail: img3t
    },
    {
      original: img4,
      thumbnail: img4t
    },
    {
      original: img5,
      thumbnail: img5t
    },
    {
      original: img6,
      thumbnail: img6t
    },
    {
      original: img7,
      thumbnail: img7t
    }
  ];
  return (
    <GalleryClosableLayout text={siteData.kuvagalleria.title}>
      <div className="galleryImgs">
        <ImageGallery
          items={images}
          slideInterval={2000}
          onImageLoad={handleImageLoad}/>
      </div>
    </GalleryClosableLayout>
  );
};

export default Kuvagalleria;
