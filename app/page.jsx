import Main from "@/components/Sections/Main";
import Cloud from "@/components/Cloud";
import Service from "@/components/Sections/Service";
import Team from "@/components/Sections/Team";
import FAQ from "@/components/Sections/FAQ";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-color text-white">
      <Main />
      <Cloud />
      <Service />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
