import React from "react";
import "./FileUpload.scss";
import { Text } from "../Text";
import UploadIcon from "../../../icons/upload_icon.svg";

interface Props {
  label: string;
  fileName?: string;
  className?: string;
  hint?: string;
  // onChange: (file: any, name: string) => void;
  name: string;
  formats?: string;
  hidden?: any;
}

export const FileUpload: React.FC<Props> = ({
  label,
  fileName,
  className = "",
  hint,
  // onChange,
  name,
  formats,
  hidden,
}) => {
  const handleFileChange = (event: any, name: string) => {};
  return (
    <div className={`file-input-wrapper ${className}`} hidden={hidden}>
      <div className="input-field">
        {!fileName && <img src={UploadIcon} alt="Upload" />}
        <input
          name={name}
          type="file"
          onChange={(e) => handleFileChange(e.target.files?.[0], name)}
          accept={formats}
        />
        <Text text={fileName || label} className="underlined" />
        {!fileName && hint && <Text text={hint} className="light-text" />}
      </div>
    </div>
  );
};
