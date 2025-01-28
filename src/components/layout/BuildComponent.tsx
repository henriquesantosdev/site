import { SpeedInsights } from "@vercel/speed-insights/react"
import { SobreMim } from "./SobreMim";
import { Skills } from "./Skills";
import { SoftSkills } from "./SoftSkills";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { MenuComponent } from "./MenuComponent";
import { HomeComponent } from "./HomeComponent";

const BuildComponent = () => {
  return (
    <div id="dark-mode-div" className="">
      <SpeedInsights />
      <div className="bg-bluev5 dark:bg-neutral-100 p-2 md:p-4">

        <MenuComponent />

        <div className="max-w-6xl mx-auto">
          <HomeComponent />
        </div>

        <div className="max-w-3xl mx-auto mt-4">

          <SobreMim />
          <Skills />
          <SoftSkills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BuildComponent