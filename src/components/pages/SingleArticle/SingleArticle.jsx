import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../../utils/api";
import ArticleSection from "../../modules/ArticleSection/ArticleSection";
import CommentsSection from "../../modules/CommentsSection/CommentsSection";

function SingleArticle() {
  const [isLoading, setIsLoading] = useState(false)
  const [singleArticle, setSingleArticle] = useState({})
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true)
    fetchArticleById(article_id)
        .then(article => {
            setSingleArticle(article)
            setIsLoading(false)
        })
  }, [])
    
  if (isLoading) return  <p className='icon'>·</p>

  return (
    <main>
        <ArticleSection singleArticle={singleArticle} />
        <CommentsSection article_id={article_id} comment_count={singleArticle.comment_count} />
    </main>
  )
}

export default SingleArticle