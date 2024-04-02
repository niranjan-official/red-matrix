import FAQ from "@/components/Sections/faq";
import Footer from "@/components/Sections/footer";
import Team from "@/components/Sections/team";
import Main from "@/components/Sections/Main";
import Cloud from "@/components/Cloud";
import Service from "@/components/Sections/Service";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-color text-white">
      <Main/>
      <Cloud/>
      <Service/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
