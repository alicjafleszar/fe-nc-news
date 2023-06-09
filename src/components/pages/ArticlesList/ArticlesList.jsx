import './ArticlesList.css'
import ArticleCard from '../../modules/ArticleCard/ArticleCard'
import { fetchArticles } from "../../../utils/api"
import { useEffect, useState } from 'react'

const ArticlesList = () => {
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

  if (isLoading) return  <p className='icon'>·</p>

  return (
    <main className="articles-container">
      {window.location.pathname === '/' ? <h2>all articles</h2> : <h1>all articles</h1>}
      <div className="grid articles-grid">
        {articles.map(({ article_id, title, topic, created_at, article_img_url, author }) => {
          return <ArticleCard key={article_id} id={article_id} title={title} topic={topic} created_at={created_at} article_img_url={article_img_url} author={author} />
        })}
      </div>
    </main>
  )
}

export default ArticlesList