import { Route, Routes } from "react-router-dom"
import SingleArticle from "../SingleArticle/SingleArticle"
import ArticlesList from "../ArticlesList/ArticlesList"

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticlesList />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/articles/:topic/:article_id/:article_title" element={<SingleArticle />} />
    </Routes>
  )
}

export default MainContent