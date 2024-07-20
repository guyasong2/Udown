"use client";
import { useState } from "react";
const DownloadVideo = () => {
  const [link, setLink] = useState("");
  const [format, setFormat] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const handleDownload = () => {
    const src = `https://loader.to/api/button/?url=${link}&f=${format}`;
    setIframeSrc(src);
  };
  return (
    <div className="w-full md:w-[82%] mx-auto h-80 md:h-[40vh] bg-gray-300 download-video">
      <div className="w-[60%] mx-auto">
      <h2 className='pt-11 md:pt-16 text-center text-3xl'>Download video and Audio from Youtube</h2>
      <div className="pt-5 flex flex-col md:flex-row gap-4">
      <input
      className="border border-black w-[100%] placeholder:pl-5"
        type="text" 
        placeholder="Paste Youtube Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <select value={format} onChange={(e) => setFormat(e.target.value)} required>
      <option value="">Choose Format</option>
        <option value="mp3">Mp3</option>
        <option value="360">360p Mp4</option>
        <option value="480">480p Mp4</option>
        <option value="720">720p Mp4</option>
        <option value="1080">1080p Mp4</option>
        <option value="4k">4k Mp4</option>
      </select>
      <button className="bg-black text-white py-3 px-8" onClick={handleDownload}>Download</button>
      {iframeSrc && (
        <iframe
          style={{
            width: "230px",
            height: "60px",
            border: "0",
            overflow: "hidden",
          }}
          scrolling="no"
          src={iframeSrc}
        ></iframe>
      )}{" "}
      </div>
      </div>
    </div>
  );
};
export default DownloadVideo;
