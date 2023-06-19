import React from "react";

const Video = () => {
  return (
    <>
      <div className="Video-box">
        <div className="container">
            <div className="blackArea"></div>
          <h2>Videolar</h2>
          <div className="video">
            <iframe
              width="409"
              height="232"
              src="https://www.youtube.com/embed/dG0qkNW5JFk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />

            <iframe
              width="409"
              height="232"
              src="https://www.youtube.com/embed/2-crBg6wpp0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />

            <iframe
              width="409"
              height="232"
              src="https://www.youtube.com/embed/nuhFskuxygY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
