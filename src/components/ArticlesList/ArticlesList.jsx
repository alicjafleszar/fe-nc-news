import './ArticlesList.css'
import { useEffect, useState } from "react"
import { fetchArticles } from "../../api/api"
import ArticleCard from '../ArticleCard/ArticleCard'

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
    <div className="grid articles-grid">
      {articles.map(({ article_id, title, topic, created_at, article_img_url, author }) => {
        return <ArticleCard key={article_id} title={title} topic={topic} created_at={created_at} article_img_url={article_img_url} author={author} />
      })}
    </div>
  )
}

export default ArticlesList