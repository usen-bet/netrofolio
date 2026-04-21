import "./Styles/Blog.scss"
import useFetch from "../hooks/useFetch"
import Netrologo from "../assets/NETROPEDIA LOGO.png"
import { Link } from "react-router-dom"

function Blog() {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL

  const { loading, error, data } = useFetch(
    `${STRAPI_URL}/api/articles?populate=*`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const articles = data?.data || []

  return (
    <div className="Blogproject">
      <div className="netropedia-title">
        <img src={Netrologo} alt="netro" className="Netrologo" />
      </div>

      <div className="blog">
        <div className="bloghalf">
          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            articles.map((article) => {
              const title = article?.articletitle || "Untitled"

              const imagePath = article?.articlecover?.url || null

              const coverUrl = imagePath
                ? imagePath.startsWith("http")
                  ? imagePath
                  : `${STRAPI_URL}${imagePath}`
                : null

              return (
                <div key={article.id} className="purpp">
                  <Link to={`/blog/${article.id}`} className="article-link">
                    <div className="article-card">
                      <div className="img">
                        {coverUrl ? (
                          <img
                            src={coverUrl}
                            alt={title}
                            className="imgg1"
                          />
                        ) : (
                          <div>No image</div>
                        )}
                      </div>

                      <div className="articletitle">{title}</div>
                    </div>
                  </Link>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog