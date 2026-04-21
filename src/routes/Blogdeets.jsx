import { useParams, Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import "./Styles/blogdeets.scss"
import { BiChevronLeft } from "react-icons/bi"

function Blogdeets() {
  const { id } = useParams()
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL

  console.log("STRAPI_URL:", STRAPI_URL)
  console.log("FETCH URL:", `${STRAPI_URL}/api/articles?populate=*`)

  const { loading, error, data } = useFetch(
    `${STRAPI_URL}/api/articles?populate=*`
  )

  const getTextFromBlocks = (blocks) => {
    if (!Array.isArray(blocks)) return ""

    return blocks
      .map((block) => {
        if (!Array.isArray(block.children)) return ""
        return block.children.map((child) => child.text || "").join("")
      })
      .join(" ")
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const articles = data?.data || []
  const article = articles.find((item) => String(item.id) === String(id))

  if (!article) return <p>No article found.</p>

  const title = article?.articletitle || "Untitled"
  const body = article?.articlebody || []

  const imagePath =
    article?.articlecover?.url ||
    article?.articleimage?.[0]?.url ||
    null

  const coverUrl = imagePath
    ? imagePath.startsWith("http")
      ? imagePath
      : `${STRAPI_URL}${imagePath}`
    : null

  return (
    <div className="blog-details">
      <Link to="/" className="goback">
        <BiChevronLeft className="chevy" />
      </Link>

      <div className="article">
        <div className="article-img">
          {coverUrl ? (
            <img src={coverUrl} alt={title} className="art-img" />
          ) : (
            <div>No image</div>
          )}
        </div>

        <h1 className="articlehead">{title}</h1>
        <p className="words">{getTextFromBlocks(body)}</p>
      </div>
    </div>
  )
}

export default Blogdeets