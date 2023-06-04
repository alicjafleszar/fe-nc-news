import { useEffect, useState } from "react"
import { fetchComments } from "../../../utils/api"
import './CommentsSection.css'
import CommentCard from "../CommentCard/CommentCard"

const CommentsSection = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchComments(article_id)
      .then(comments => {
        setComments(comments)
      })
  }, [])

  return (
    <section className="comments">
      <h2>{`Comments (${comment_count})`}</h2>
      <div className="flex  comments-container">
        {comments.map(({ comment_id,  author, body, votes, created_at })  => {
          return <CommentCard key={comment_id} author={author}  body={body} votes={votes}  created_at={created_at} />
          })}
      </div>
    </section>
  )
}

export default CommentsSection