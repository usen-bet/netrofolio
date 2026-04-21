import { useEffect, useState } from "react"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(url)
        const text = await res.text()

        console.log("FETCH URL:", url)
        console.log("STATUS:", res.status)
        console.log("RAW RESPONSE:", text)

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${text}`)
        }

        const json = JSON.parse(text)
        setData(json)
      } catch (err) {
        console.error(err)
        setError(err.message || "Failed to fetch")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch