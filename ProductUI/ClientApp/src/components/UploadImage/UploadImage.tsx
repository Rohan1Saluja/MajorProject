import * as React from "react";
import { FileUpload } from "../UI/FileUpload";
import { Text } from "../UI/Text";
import { Button } from "../UI/Button";
import "./UploadImage.scss";

interface Props {}

export const UploadImage: React.FC<Props> = ({}) => {
  return (
    <div className="upload-image">
      <div className="left-container">
        <div className="heading">
          <Text
            text="Unlock the Secrets of the World's Wonders!"
            className="sub-heading"
          />
        </div>
        <div className="description">
          <Text
            text="Have you ever marveled at a breathtaking monument and wondered, 'What iconic landmark is this?'"
            className="description bold"
          />
          <Text
            text="Embark on a journey of discovery like never before. 
            With a simple snap and upload, you'll unveil the world's most famous landmarks, 
            from the grandeur of the Colosseum to the serene beauty of Kyoto's temples."
            className="description-small"
          />
          <hr />
        </div>
      </div>
      <div className="right-container">
        <div className="background"></div>
        <div className="image-container">
          <div className="heading">
            <Text text="UPLOAD YOUR IMAGE" className="large text styled-font" />
          </div>
          <div className="file">
            <FileUpload
              label="Upload Image"
              name="File Name"
              formats=".jpeg,.png,.gif,.mp4,.pdf,.psd,.ai,.word,.pp"
              fileName=""
            />
          </div>
          <div className="search-button">
            <Button buttonText="Search" variant="contained" size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};
