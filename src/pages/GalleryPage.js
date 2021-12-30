import React from "react";
import { Title } from "../components/Title";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";

export const GalleryPage = () => {
  return (
    <div>
      <Title />
      <UploadForm />  
      <ImageGrid />
    </div>
  );
};
