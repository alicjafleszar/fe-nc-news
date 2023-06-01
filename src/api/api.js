import axios from "axios";

const api = axios.create({
    baseURL: 'https://nc-news-yh3k.onrender.com/api/'
})

export function fetchArticles() {
    return api
        .get('/articles')
        .then(res => res.data.articles)
        .catch(err => err)
}