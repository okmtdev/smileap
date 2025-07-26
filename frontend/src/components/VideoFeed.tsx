"use client";

import { Video, Clock, HardDrive, MapPin } from "lucide-react";

const data = [
  {
    id: 1,
    videoUrl: "https://smileap-cemera-feed.s3.ap-northeast-1.amazonaws.com/SampleVideo_1280x720_1mb.mp4",
    createdAt: "2025-10-27 10:00",
    duration: "00:00:30",
    location: "仕事部屋",
    size: "2MB",
  },
  {
    id: 2,
    videoUrl: "https://smileap-cemera-feed.s3.ap-northeast-1.amazonaws.com/sample-15s.mp4",
    createdAt: "2025-10-27 10:05",
    duration: "00:00:30",
    location: "仕事部屋",
    size: "2MB",
  },
  {
    id: 3,
    videoUrl: "https://smileap-cemera-feed.s3.ap-northeast-1.amazonaws.com/sample-15s.mp4",
    createdAt: "2025-10-27 10:10",
    duration: "00:00:30",
    location: "仕事部屋",
    size: "2MB",
  },
  {
    id: 4,
    videoUrl: "https://smileap-cemera-feed.s3.ap-northeast-1.amazonaws.com/file_example_MP4_480_1_5MG.mp4",
    createdAt: "2025-10-27 10:15",
    duration: "00:00:30",
    location: "仕事部屋",
    size: "2MB",
  },
  {
    id: 5,
    videoUrl: "https://smileap-cemera-feed.s3.ap-northeast-1.amazonaws.com/file_example_MP4_480_1_5MG.mp4",
    createdAt: "2025-10-27 10:20",
    duration: "00:00:10",
    location: "仕事部屋",
    size: "2MB",
  },
];

export default function VideoFeed() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <Video size={24} />
        <span>監視カメラ映像</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((camera) => (
          <div key={camera.id} className="border rounded-lg overflow-hidden shadow-lg">
            <video
              src={camera.videoUrl}
              controls
              muted
              autoPlay
              loop
              className="w-full h-auto"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Video className="w-4 h-4 mr-2" />
                <span>{camera.createdAt}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{camera.duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <HardDrive className="w-4 h-4 mr-2" />
                <span>{camera.size}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{camera.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
