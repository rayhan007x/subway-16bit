import React, { useState, useEffect } from 'react';
import GameContainer from './components/GameContainer';

export default function App() {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('START'); // START, PLAYING, GAMEOVER

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">
      {/* The CRT Effect Overlay */}
      <div className="crt-overlay absolute inset-0 z-50 opacity-20 pointer-events-none" />

      {/* UI Overlay */}
      <div className="absolute top-10 z-20 text-white text-center">
        <h1 className="text-4xl font-bold tracking-widest text-yellow-400 drop-shadow-md">
          SUBWAY 16-BIT
        </h1>
        <p className="text-xl mt-2">SCORE: {score}</p>
      </div>

      {status === 'START' && (
        <button 
          onClick={() => setStatus('PLAYING')}
          className="absolute z-30 px-8 py-4 bg-green-600 border-b-4 border-green-800 text-white font-bold hover:bg-green-500 active:border-b-0 transition-all"
        >
          INSERT COIN (START)
        </button>
      )}

      {/* The actual Game component */}
      <GameContainer setScore={setScore} setStatus={setStatus} isPlaying={status === 'PLAYING'} />
    </div>
  );
}
