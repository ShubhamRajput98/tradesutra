import React from "react";
import cloudComputingIcone from "../../../assets/svg/cloud-computing.svg";

export const DragAndDrop = ({
  isDragging,
  previewImage,
  onDragEnter,
  onDragLeave,
  onDrop,
  onFileInputChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#435085] text-general">Attach Document</label>
      <div
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className={
          "border border-dashed border-[#A0A6C0] rounded-md flex gap-2 h-40 w-80 bg-bgTableRow justify-center items-center relative"
        }
      >
        {previewImage ? (
          <img src={previewImage} alt="Dropped" className="w-full h-full" />
        ) : (
          <>
            <img
              src={cloudComputingIcone}
              alt="Cloud Icon"
              className="w-8 h-8"
            />
            <p>
              {isDragging
                ? "Drop files here"
                : "Drag files here or click to upload."}
            </p>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={onFileInputChange}
          name="attach_document"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
          value={previewImage}
        />
      </div>
    </div>
  );
};
