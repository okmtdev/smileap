import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Temperature from "@/components/Temperature";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Temperature />
      </main>
      <Footer />
    </div>
  );
}
