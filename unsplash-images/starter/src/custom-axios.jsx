import axios from 'axios'

const customAxios = axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`
    }
})
export default customAxios