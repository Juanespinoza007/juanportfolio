import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page2() {
    const navigate = useNavigate();

  return (
    <div className="p-8">
        <a
            href="/#projects"
            className="text-blue-500 hover:underline mb-4 inline-block"
        >
            Go Back
        </a>
      <h2 className="text-3xl font-semibold mb-4">My Project Videos</h2>
      {/* Embed a YouTube video */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Project Demo"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      {/* Repeat above block for more videos */}
    </div>
  );
}