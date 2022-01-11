/**
 * Created by jannevainio on 21/11/2021.
 */

import React, { useEffect, useState } from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {

  const [siteData, setSiteData] = useState();
  const [imageData, setImageData] = useState();
  const [pageData, setPageData] = useState({imageData: [], siteData:null});
  const tempData = {};

  useEffect(() => {

    async function fetchMyAPI() {
      let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1lPX9h_xT2eN5ed8lG5WdiiH4kphH4IRQlDLRU2qjft0/values/Asetukset?key=AIzaSyABZeUkblAHJB7s8jRlea4jitjuqtff5k0")
      response = await (response.json());
      const finalData = response.values;
      setSiteData(finalData);
    }
    async function fetchMyAPI2() {
      let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1lPX9h_xT2eN5ed8lG5WdiiH4kphH4IRQlDLRU2qjft0/values/Kuvat?key=AIzaSyABZeUkblAHJB7s8jRlea4jitjuqtff5k0")
      response = await (response.json());
      const finalData = response.values;
      setImageData(finalData);
    }
    fetchMyAPI();
    fetchMyAPI2();


  }, []);

  useEffect(() => {

    if(!siteData || !imageData){
      return;
    }

    for(let i=0; i <siteData.length; i++){
      if(siteData[i][0] === "sivuasetus"){

        let j=0;
        let url, thumbUrl, img1Url, img2Url;

        const siteUrl = siteData[i][4];
        const siteThumbUrl = siteData[i][5];
        const siteImg1Url = siteData[i][6];
        const siteImg2Url = siteData[i][7];

        while(j < imageData.length && (!url || !thumbUrl || !img1Url || !img2Url)){

          if(!url && imageData[j][0] === siteUrl){
            url=imageData[j][5] + "=w" + imageData[j][2] + "-h" + imageData[j][3];
          }
          else if(!thumbUrl && imageData[j][0] === siteThumbUrl){
            thumbUrl=imageData[j][5] + "=w" + imageData[j][2] + "-h" + imageData[j][3];
          }
          else if(!img1Url && imageData[j][0] === siteImg1Url){
            img1Url=imageData[j][5] + "=w" + imageData[j][2] + "-h" + imageData[j][3];
          }
          else if(!img2Url && imageData[j][0] === siteImg2Url){
            img2Url=imageData[j][5] + "=w" + imageData[j][2] + "-h" + imageData[j][3];
          }
          j++;
        }
        tempData[siteData[i][1]] = {
          wideImage1st: url ? url : null,
          thumbnailImage: thumbUrl ? thumbUrl : null,
          image1: img1Url ? img1Url : null,
          image2: img2Url ? img2Url : null
        };
      }
    }
    tempData.siteData = siteData;
    tempData.imageData = imageData;

    setPageData(tempData);

  }, [siteData, imageData]);

  return (
    <Store.Provider value={pageData}>{children}</Store.Provider>
  );
};
