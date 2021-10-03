const getGif = async (url) => {
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    }
  })
  return gifs
}

export default getGif