import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePage = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="max-w-[65em] flex mx-auto mb-3">
      <div className="w-[70%] pb-2 px-2">
        <input
          type="text"
          name="title"
          placeholder="Masukan Judul"
          className="border-[2px] border-gray-200 w-full p-2 focus:outline-none mb-3"
        />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="h-[10em]"
          placeholder="Tulis artikel kamu disini..."
        />
      </div>
      <div className="w-[30%] flex flex-col gap-3">
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-2">Publish</h3>
          <h6 className="text-sm">
            <strong>Status :</strong> Draft
          </h6>
          <h6 className="text-sm">
            <strong>Visibility :</strong> Public
          </h6>
          <input type="file" id="upload-image" className="hidden" />
          <label
            htmlFor="upload-image"
            className="underline mt-4 text-blue-500 hover:cursor-pointer"
          >
            Upload image
          </label>
          <div className="flex justify-between mt-3">
            <button className="py-1 px-3 text-sm border-2 border-[#eb3d4b] hover:bg-[#eb3d4b] hover:text-white rounded-md">
              Save as Draft
            </button>
            <button className="py-1 px-3 text-sm bg-[#eb3d4b] hover:bg-[#d62b39] rounded-md text-white">
              Update
            </button>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-2">Publish</h3>
          <div className="flex flex-col text-[#eb3d4b]">
            <div>
              <input
                type="radio"
                className="me-2"
                id="art"
                name="radio"
                value="art"
              />
              <label className=" hover:cursor-pointer" htmlFor="art">
                Art
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="me-2"
                id="science"
                name="radio"
                value="science"
              />
              <label className=" hover:cursor-pointer" htmlFor="science">
                Science
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="me-2"
                id="technology"
                name="radio"
                value="technology"
              />
              <label className=" hover:cursor-pointer" htmlFor="technology">
                Technology
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="me-2"
                id="cinema"
                name="radio"
                value="cinema"
              />
              <label className=" hover:cursor-pointer" htmlFor="cinema">
                Cinema
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="me-2"
                id="design"
                name="radio"
                value="design"
              />
              <label className=" hover:cursor-pointer" htmlFor="design">
                Design
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="me-2"
                id="food"
                name="radio"
                value="food"
              />
              <label className=" hover:cursor-pointer" htmlFor="food">
                Food
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WritePage;
