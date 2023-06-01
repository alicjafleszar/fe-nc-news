import './ArticlesSection.css'
import ArticlesList from "../ArticlesList/ArticlesList"

const ArticlesSection = () => {
  return (
    <main className="articles-container">
      {window.location.pathname === '/' ? <h2>all articles</h2> : <h1>all articles</h1>}
      <ArticlesList />
    </main>
  )
}

export default ArticlesSection