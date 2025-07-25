import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Body />
      </main>
      <Footer />
    </div>
  );
}
