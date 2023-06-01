import './ArticleCard.css'
const ArticleCard = ({ title, topic, created_at, article_img_url, author }) => {
  const dateString = new Date(created_at).toLocaleString('default', {month: 'short', day: 'numeric', year: 'numeric'})

  return (
    <section className="article-card grid__item">
      <div className='img-container'>
        <img className='img' src={article_img_url} alt={`image for the article "${title}"`} />
        <p className='img-top topic-name'>{topic}</p>
        <p className='img-top date-string'>{dateString}</p>
      </div>
      {window.location.pathname === '/' ? <h3  className="article-card__title">{title}</h3> : <h2  className="article-card__title">{title}</h2>}
      <p className='author'>{`by ${author}`}</p>
    </section>
  )
}

export default ArticleCard