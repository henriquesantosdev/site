import { SpeedInsights } from "@vercel/speed-insights/react"
import SobreMim from "./components/layout/SobreMim";
import Skills from "./components/layout/Skills";
import SoftSkills from "./components/layout/SoftSkills";
import Projects from "./components/layout/Projects";
import Footer from "./components/layout/Footer";
import { MenuComponent } from "./components/layout/MenuComponent";
import { lazy, Suspense } from "react";
import loading from '/loading.mov'

const HomeComponent = lazy(() => import("./components/layout/HomeComponent"))

export default function App() {
  return (
    <div id="dark-mode-div" className="">
      <SpeedInsights />
      <div className="bg-bluev5 dark:bg-neutral-100 p-2 md:p-4">

        <MenuComponent />

        <div className="max-w-6xl mx-auto">
          <Suspense fallback={loading}>
            <HomeComponent />
          </Suspense>
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
