
export const API_KEY = import.meta.env.VITE_API_KEY
export const FETCH_URL = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY

export const AUTO_SUGGEST_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const LIVE_CHAT_COUNT = 30 //calculate according to device capabality