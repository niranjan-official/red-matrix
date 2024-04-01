import Navbar from "@/components/Sections/Navbar";
import FAQ from "@/components/Sections/faq";
import Footer from "@/components/Sections/footer";
import Service from "@/components/Sections/service";
import Team from "@/components/Sections/team";
import Main from "@/components/Sections/Main";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-color text-white">
      <Navbar/>
      <Main/>
      <Service/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
