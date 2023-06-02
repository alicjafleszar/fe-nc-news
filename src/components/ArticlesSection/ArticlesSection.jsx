import './ArticlesSection.css'
import ArticlesList from "../ArticlesList/ArticlesList"
import { fetchArticles } from "../../api/api"
import { useEffect, useState } from 'react'

const ArticlesSection = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    fetchArticles()
      .then(articles => {
        setArticles(articles)
        setIsLoading(false)
      })
  }, [])
  return (
    <main className="articles-container">
      {window.location.pathname === '/' ? <h2>all articles</h2> : <h1>all articles</h1>}
      <ArticlesList articles={articles} isLoading={isLoading} />
    </main>
  )
}

export default ArticlesSection