import React from "react"

import "./index.css"
import { AppLogo } from "./components/common"
import { InfoCard } from "./components"

const App = () => (
  <div className="container">
    <AppLogo />
    {/* <div>Name: Anish's app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div> */}
    <InfoCard />
  </div>
)

export default App
