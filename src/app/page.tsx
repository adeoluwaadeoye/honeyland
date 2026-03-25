import Hero from "@/components/home/Hero";
import AboutPreviews from "@/components/previews/AboutPreviews";
import ProjectPreview from "@/components/previews/ProjectPreview";
import Announcement from "@/components/previews/Announcement";
import Leadership from "@/components/previews/LeaderPreview";



export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* other sections */}
      <AboutPreviews />
      <ProjectPreview />
      <Announcement />
      <Leadership />
    </main>
  );
}