import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Temperature from "@/components/Temperature";
import VideoFeed from "@/components/VideoFeed";
import HourlyPhotoLog from "@/components/HourlyPhotoLog";
import Humidity from "@/components/Humidity";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <HourlyPhotoLog />
        <Temperature />
        <Humidity />
        <VideoFeed />
      </main>
      <Footer />
    </div>
  );
}
