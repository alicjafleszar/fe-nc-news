import { Route, Routes } from "react-router-dom"
import ArticlesSection from "../ArticlesSection/ArticlesSection"

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticlesSection />} />
      <Route path="/articles" element={<ArticlesSection />} />
    </Routes>
  )
}

export default MainContent