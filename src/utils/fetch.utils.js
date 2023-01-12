export const getType = async (type) => {
  const check = localStorage.getItem(type)
  if (check) {
    return JSON.parse(check)
  } else {
    if (type === 'popular') {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        )
        const data = await api.json()

        localStorage.setItem('popular', JSON.stringify(data))

        return Promise.resolve(data)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${type}`
        )
        const data = await api.json()
        localStorage.setItem(type, JSON.stringify(data))
        return Promise.resolve(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

export const getSearchedResults = async (name) => {
  try {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    const data = await api.json()

    return Promise.resolve(data)
  } catch (error) {
    console.log(error)
  }
}

export const getSingleRecipe = async (id) => {
  try {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await api.json()

    return Promise.resolve(data)
  } catch (error) {
    console.log(error)
  }
}
