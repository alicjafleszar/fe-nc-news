import './ArticlesList.css'
import ArticleCard from '../../modules/ArticleCard/ArticleCard'
import { fetchArticles } from "../../../utils/api"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FilterOptions from '../../modules/FilterOptions/FilterOptions'

const ArticlesList = () => {
  const navigate = useNavigate()
  const { topic } = useParams()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({})
  const [ isChecked, setIsChecked ] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    fetchArticles(formData)
      .then(articles => {
        setArticles(articles)
        const topic = formData.topic ? `/${formData.topic}` : ''
        const sort_by = formData.sort_by ? `?sort_by=${formData.sort_by}` : ''
        const order_by = formData.order_by ? `${sort_by ? '&' : '?'}order_by=${formData.order_by}` : ''
        navigate(`/articles${topic}${sort_by}${order_by}`)
        setIsLoading(false)
      })
  }, [formData])

  const handleSubmitFilter = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    setFormData(Object.fromEntries(formData.entries()));
  }

  if (isLoading) return  <p className='icon'>·</p>

  return (
    <main className="articles-container">
      <div className='flex articles-container__header'>
        {window.location.pathname === '/' ? <h2>all articles</h2> : <h1>{topic || 'all articles'}</h1>}
        <form action="" onSubmit={handleSubmitFilter} className='flex filter'>
          <div>
            <FilterOptions isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>
          <button type="submit" className='flex__item--button'>Apply filters</button>
        </form>
      </div>
      <div className="grid articles-grid">
        {articles.map(({ article_id, title, topic, created_at, article_img_url, author }) => {
          return <ArticleCard key={article_id} id={article_id} title={title} topic={topic} created_at={created_at} article_img_url={article_img_url} author={author} />
        })}
      </div>
    </main>
  )
}

export default ArticlesList