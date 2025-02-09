
import TextScroll from "../components/slideText/page";
import AboutImage from "../components/aboutImage/page";

export default function About() {
  return (
    <div className="h-[150vh] w-full flex ">
      <div className="absolute h-1/2 w-full">
        <TextScroll />

        <div id="about2-section" className="flex h-screen w-full">
          <AboutImage />
        </div>
      </div>
    </div>
  );
}
