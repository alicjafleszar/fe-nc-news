import { getTimeSince } from '../../../utils/utils'
import './CommentCard.css'

const CommentCard = ({ author, body, votes, created_at }) => {
  return (
    <div className="flex comment-card">
        <div className='flex comment-card__item--left'>
            <img className='comment-card__item--left--top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU' alt="users avatar" />
            <p className={`comment-card__item--left--bottom ${votes > 0 ? 'positive' : votes < 0 ? 'negative' : 'neutral'}`}>{votes}</p>
        </div>
        <div className='flex comment-card__item--right'>
            <div className='flex comment-card__item--right--top'>
                <p className='comment-author'>{author}</p>
                <p className='comment-date'>{getTimeSince(created_at)}</p>
            </div>
            <div className='comment-card__item--right--bottom'>
                <p className='comment-body'>{body}</p>
            </div>
        </div>
    </div>
  )
}

export default CommentCard