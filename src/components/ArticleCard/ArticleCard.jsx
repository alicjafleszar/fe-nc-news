import { Link } from "react-router-dom"
import './ArticleCard.css'
import { formatDateString } from "../../utils/utils"

const ArticleCard = ({ id, title, topic, created_at, article_img_url, author }) => {
  const datePublished = formatDateString(created_at)
  
  const articlePath = `/${encodeURIComponent(title.toLowerCase().replaceAll(' ', '-'))}-${id}`

  return (
    <Link className="article-link" state={{ dateCreated: dateString }} to={articlePath}>
      <section className="article-card grid__item">
        <div className='img-container'>
          <img className='img' src={article_img_url} alt={`image for the article "${title}"`} />
          <p className='img-top topic-name'>{topic}</p>
          <p className='img-top date-string'>{datePublished}</p>
        </div>
        {window.location.pathname === '/' ? <h3  className="article-card__title">{title}</h3> : <h2  className="article-card__title">{title}</h2>}
        <p className='author'>{`by ${author}`}</p>
      </section>
    </Link>
  )
}

export default ArticleCard