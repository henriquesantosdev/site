
import { lazy, Suspense } from "react";

const BuildComponent = lazy(() => import("./components/layout/BuildComponent"))

export default function App() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Carregando...</div>}>
      <BuildComponent/>
    </Suspense>
  )
}
