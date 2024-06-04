import React from 'react'
import { useRef, useEffect } from 'react'   
import videoBG from '../assets/Bg Video.mp4'
import daLogo from "../assets/DA_Logo.png"
import bpLogo from '../assets/Hi-Res-BAGONG-PILIPINAS-LOGO-1474x1536.png'

const Main = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoStart = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 2;
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleVideoStart);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleVideoStart);
      }
    };
  }, []);

  return (
    <div className='main'>
      <div className="overlay"></div>
      <video ref={videoRef} src={videoBG} autoPlay loop muted />
      <div className='content'>
        <div className='logos'>
          <img src={daLogo} alt="D.A Logo" className='logo' />
          <img src={bpLogo} alt="Bagong Pilipinas Logo" className='logo' />
        </div>
        <h1>Department of Agriculture</h1>
        <p>Regional Field Office 02</p>
        <button className="cta-button">Power BI</button>
      </div>
    </div>
  );
};

export default Main;
