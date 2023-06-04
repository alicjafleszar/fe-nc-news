import { formatDateString } from '../../utils/utils'
import './ArticleSection.css'

function ArticleSection({ singleArticle: { title, author, created_at, article_img_url, body }}) {
  const datePublished = formatDateString(created_at)

  return (
    <article className="flex article">
        <div className="flex article-header">
            <div className="flex main-info">
                <h1 className='article__title'>{ title }</h1>
                <p className='article__author'>{`by ${ author }`}</p>
            </div>
            <div className='flex article__item__container'>
              <img className='article__img' src={article_img_url ? article_img_url : 'https://www.mv-marchtrenk.at/files/images-sys/placeholder-news-full.png'} alt={`An image for article ${title}`} />
              <p className='article__date'>{ datePublished }</p>
            </div>
        </div>
        <p className='article__body'>{body}</p>
    </article>
  )
}

export default ArticleSection