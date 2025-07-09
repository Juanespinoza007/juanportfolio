// Video coming soon
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page2() {
    const navigate = useNavigate();

  return (
    <div className="p-8">
        <button
          onClick={() => navigate('/#projects')}
          className="mb-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-300"
        >
          ← Go Back
        </button>
        <p className="text-lg text-white mb-4 text-center">📽️ Video coming soon</p>
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