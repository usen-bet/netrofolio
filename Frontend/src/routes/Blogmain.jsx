import './Styles/Blog.scss'
import useFetch from '../hooks/useFetch'
import Netrologo from "../assets/NETROPEDIA LOGO.png"
import { Link } from 'react-router-dom'
import "./Styles/blog.scss"
import "./Styles/blogdeets.scss"

function Blog() {
  const STRAPI_URL = 'http://localhost:1337'
  const { loading, error, data } = useFetch(
    `${STRAPI_URL}/api/articles?populate=*`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const articles = data?.data || []

  return (
    <div className='Blogproject1'>
      <div className="netropedia-title">
        <img src={Netrologo} alt="netro" className='Netrologo' />
      </div>
      <div className="bloghalf1">
          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            articles.map((article) => {
              const title =
                article?.articletitle ||
                article?.attributes?.articletitle ||
                'Untitled'

              const imagePath =
                article?.articlecover?.url ||
                article?.attributes?.articlecover?.url ||
                article?.attributes?.articlecover?.data?.attributes?.url ||
                article?.articlecover?.data?.attributes?.url ||
                null

              const coverUrl = imagePath ? `${STRAPI_URL}${imagePath}` : null

              return (
                <div key={article.id} className='purpp'>
                  <div className='img'>
                    {coverUrl ? (
                      // <img src={coverUrl} alt={title} /> 
                      null
                    ) : (
                      <div>No image</div>
                    )}
                  </div>
<Link to={`/blog/${article.id}`} className="article-link">
  <div className="article-card">
    <div className="img">
      {coverUrl && <img src={coverUrl} alt={title} className='imgg1' />}
    </div>

    <div className="articletitle">
      {title}
    </div>
  </div>
  </Link>
  </div>
              )
            })
          )}
        </div>
    </div>
  )
}

export default Blog