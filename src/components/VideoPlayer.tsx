interface VideoPlayerProps {
  isHost: boolean;
}

export function VideoPlayer({ isHost }: VideoPlayerProps) {
  return (
    <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {/* Placeholder for video player - in production, integrate with a streaming service */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl mb-2">
            {isHost ? 'Your Stream Preview' : 'Live Stream'}
          </p>
          <p className="text-gray-400">
            {isHost 
              ? 'Configure your streaming software with the provided stream key'
              : 'Stream will begin shortly...'}
          </p>
        </div>
      </div>
    </div>
  );
}