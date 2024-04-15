import { ThreeDCardDemo } from "./components/ui/3dCard";
import { BackgroundBeams } from "./components/ui/Background-beams";
import { SignupFormDemo } from "./components/ui/Form";
import { GlobeDemo } from "./components/ui/Globedemo";
import { BentoGridThirdDemo } from "./components/ui/Grid";
import FuturisticHeading from "./components/ui/Title";
import { TracingBeamDemo } from "./components/ui/tracing";

import "./globals.css";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center flex-col items-center">
      <FuturisticHeading />

      <BackgroundBeams />
      <div className="w-100vw h-10vh">
        <GlobeDemo />
      </div>
      <BentoGridThirdDemo />
      <TracingBeamDemo />
      <ThreeDCardDemo />
      <SignupFormDemo />
    </div>
  );
}
