import { useEffect, useState } from "react"
import getGif from "../helpers/getGifs"

const useFetchGifs = (categories) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=RRRHXaPkZZzXfLEn3mHdr1A31inQfHRW&q=${categories}&limit=5`
    getGif(url)
      .then(gifs => setState({
        data: gifs,
        loading: false
      }))
  }, [categories])
  return state
}
export default useFetchGifs