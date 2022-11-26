import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ImagesContext = createContext();

export const useImagesContext = () => {
  return useContext(ImagesContext);
};

export const ImagesContextProvider = ({ children }) => {
  const [images, setImages] = useState(null);
  const getAllImages = async () => {
    await axios.get("http://localhost:3000/photos").then((response) => {
      const imagesData = response.data;
      setImages(imagesData);
    });
  };
  useEffect(() => {
    getAllImages();
  }, [images]);

  return <ImagesContext.Provider value={{ images }}>{children}</ImagesContext.Provider>;
};
