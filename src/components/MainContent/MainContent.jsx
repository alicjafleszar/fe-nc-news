import { Route, Routes } from "react-router-dom"
import ArticlesSection from "../ArticlesSection/ArticlesSection"
import SingleArticle from "../SingleArticle/SingleArticle"

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticlesSection />} />
      <Route path="/articles" element={<ArticlesSection />} />
      <Route path="/:article" element={<SingleArticle />} />
    </Routes>
  )
}

export default MainContent