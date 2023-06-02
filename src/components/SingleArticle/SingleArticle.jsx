import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { fetchArticleById } from "../../api/api";
import ArticleSection from "../ArticleSection/ArticleSection";

function SingleArticle() {
  const [isLoading, setIsLoading] = useState(false)
  const [singleArticle, setSingleArticle] = useState({})
  const { article } = useParams();
  const articleId = article.split('-').slice(-1)

  const location = useLocation()
  const { dateCreated } = location.state

  useEffect(() => {
    setIsLoading(true)
    fetchArticleById(articleId)
        .then(article => {
            setSingleArticle(article)
            setIsLoading(false)
        })
  }, [])
    
  if (isLoading) return  <p className='icon'>·</p>

  return (
    <main>
        <ArticleSection singleArticle={singleArticle} dateCreated={dateCreated} />
    </main>
  )
}

export default SingleArticle