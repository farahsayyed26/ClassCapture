import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState("Uploading Image...");

  useEffect(() => {
    const messages = [
      "Scanning handwriting...",
      "Identifying text blocks...",
      "Consulting AI Tutor...",
      "Generating Quiz Questions...",
      "Formatting PDF..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(messages[i % messages.length]);
      i++;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    // FIX: Changed classes to 'w-full h-full' to fit inside the parent upload box
    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50/50 rounded-xl">
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-200 rounded-full blur-xl animate-pulse"></div>
        <Loader2 className="relative w-16 h-16 text-indigo-600 animate-spin" />
      </div>
      <h2 className="mt-6 text-xl font-bold text-slate-800">{loadingText}</h2>
      <p className="text-slate-400 mt-2 text-sm">This usually takes about 45-50 seconds.</p>
    </div>
  );
};

export default LoadingScreen;