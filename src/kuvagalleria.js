/**
 * Created by jannevainio on 13/01/17.
 */
import React, {useEffect, useState} from 'react';
import GalleryClosableLayout from './galleryclosablelayout';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import {fetchGoogleData} from './Utils'
import { useStore } from './Store';

const Kuvagalleria = () => {

  const data = useStore();

  const [calData, setCalData] = useState([]);

  const imageData = data.imageData;

  useEffect(() => {
    fetchGoogleData("kuvagalleria", setCalData);
  }, []);

  const images = [];

  if(imageData.length > 0 && calData.length > 0){

    for(let i=0; i <calData.length; i++) {
      let j = 0;
      let url, thumbUrl;
      while (j < imageData.length && (!url || !thumbUrl)) {
        if (!url && imageData[j][0] === calData[i][0]) {
          url = imageData[j][5] + "=w" + imageData[j][2] + "-h" + imageData[j][3];
        }
        if (!thumbUrl && imageData[j][0] === calData[i][1]) {
          thumbUrl = imageData[j][5] + "=w" + imageData[j][2] + "-h" + imageData[j][3];
        }
        j++;
      }
      images.push({original: url, thumbnail: thumbUrl})
    }
  }

  function handleImageLoad (event) {
    // console.log('Image loaded ', event.target)
  }

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
