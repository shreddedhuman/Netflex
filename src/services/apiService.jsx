const API_BASE_URL = 'https://api.tvmaze.com'

export const fetchShows = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows`)
    const data = await response.json()
    return data.slice(0, 50)
  } catch (error) {
    console.error('Error fetching shows:', error)
    throw error
  }
}

export const searchShows = async (searchTerm) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/shows?q=${searchTerm}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error searching shows:', error)
    throw error
  }
}
