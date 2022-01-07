/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import GalleryClosableLayout from './galleryclosablelayout';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";


import img1 from './img/Lavan pihalla1200.jpg';

import img1t from './img/Lavan pihalla320.jpg';

import img2 from './img/lava auringossa1200.jpg';
import img2t from './img/lava auringossa320.jpg';

import img3 from './img/ilmakuva1200.jpg';
import img3t from './img/ilmakuva320.jpg';

import img4 from './img/haat1200.jpg';
import img4t from './img/haat320.jpg';

import img5 from './img/kahvila720.jpg';
import img5t from './img/kahvila320.jpg';

import img6 from './img/juhlissa1200.jpg';
import img6t from './img/juhlissa320.jpg';

import img7 from './img/lava ulkoa1200.png';
import img7t from './img/lava ulkoa320.png';

const Kuvagalleria = () => {

  const [images2, setImages2] = React.useState(null)
  React.useEffect(() => {
    let shouldCancel = false
    const call = async () => {
      const response = await fetch(
        'https://photos.google.com/share/AF1QipP0qHWGkR6KvJNAa7DGds7gQkEaa8clL1P1hJJuEyQM6VKgZJO2ha99NG_EKwQkuQ?key=NUpyNnVseWlsSTNaTUdLVU1pR0JfR0RlR3hMSV9B?key=AIzaSyABZeUkblAHJB7s8jRlea4jitjuqtff5k0'
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages2(response.data.map(url => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`
        })))
      }
    }
    call()
    return () => shouldCancel = true
  }, [])

  console.log(images2);
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
    <GalleryClosableLayout text="Kuvagalleria">
      <div className="galleryImgs">
        <ImageGallery
          items={images}
          slideInterval={2000}
          thumbnailPosition="top"
          onImageLoad={handleImageLoad}/>
      </div>
    </GalleryClosableLayout>
  );
};

export default Kuvagalleria;
