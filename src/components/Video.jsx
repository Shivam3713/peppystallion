import React, { useRef, useEffect } from 'react';
import videoSource from '../static/media/HomePage.mov'; // Assuming correct format
const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Address autoplay policies:
      if (typeof video.play === 'function') {
        // Browser supports play() without restrictions
        video.play().then(() => {
          video.loop = true; // Enable infinite loop
        }).catch(error => {
          console.error('Error playing video:', error);
        });
      } else {
        // Fallback for browsers that require a user gesture:
        video.addEventListener('click', () => {
          video.play().then(() => {
            video.loop = true;
          }).catch(error => {
            console.error('Error playing video:', error);
          });
        });
      }
    }
  }, []);

  return (
    <div class="h-auto pt-20" id="video">
    <video ref={videoRef} className="videoTag h-auto" muted id='video'>
      <source src={videoSource} type="video/mp4" />
    </video>
    </div>
  );

};

export default Video;