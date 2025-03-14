"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";

const PracticePage:React.FC = () => {
  useEffect(() => {
    // Voice feedback using Speech Synthesis API
    const synth = window.speechSynthesis;
    const speakFeedback = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      synth.speak(utterance);
    };

    // Check if speech synthesis is supported
    if (synth) {
      speakFeedback("Ensure your back is straight and engage your core.");
    } else {
      console.error("Speech Synthesis not supported in this browser.");
    }
  }, []);

  return (
    <div
      id="practice-section"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Ready to Take Your Practice to the Next Level?
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl">
        Upload a video now and get detailed feedback on your form, or start a
        live session for real-time guidance.
      </p>

      {/* Live Session Video Placeholder */}
      <div className="w-full max-w-3xl h-56 bg-black mt-8 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">[Live Session Camera Feed]</p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white">
          Upload Video
        </button>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white">
          Start Live Session
        </button>
      </div>

      {/* 3D Avatar */}
      <div className="w-full max-w-md h-96 mt-8">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default PracticePage;