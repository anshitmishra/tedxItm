'use client'
import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

function Face() {
  const webcamRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    async function loadModels() {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    }
    
    loadModels();
  }, []);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    const image = await faceapi.fetchImage(imageSrc);
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();
    console.log(detections);
    
    if (detections.length > 0) {
      setFaceDetected(true);
    } else {
      setFaceDetected(false);
    }
  };

  return (
    <div className="App">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored={true}
        className="webcam"
      />
      <button onClick={capture}>Capture</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {faceDetected && <p>Face detected!</p>}
      {!faceDetected && <p>No face detected.</p>}
    </div>
  );
}

export default Face;
