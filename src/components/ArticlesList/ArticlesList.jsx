import './ArticlesList.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticlesList = ({ articles, isLoading }) => {

  if (isLoading) return  <p className='icon'>·</p>

  return (
    <div className="grid articles-grid">
      {articles.map(({ article_id, title, topic, created_at, article_img_url, author }) => {
        return <ArticleCard key={article_id} id={article_id} title={title} topic={topic} created_at={created_at} article_img_url={article_img_url} author={author} />
      })}
    </div>
  )
}

export default ArticlesList