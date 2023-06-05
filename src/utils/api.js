import axios from "axios";

const api = axios.create({
    baseURL: 'https://nc-news-yh3k.onrender.com/api/'
})

export function fetchArticles(queryObj) {
    return api
        .get('/articles', {
            params: queryObj
        })
        .then(res => res.data.articles)
        .catch(err => err)
}

export function fetchArticleById(id) {
    return api
        .get(`/articles/${id}`)
        .then(res => res.data.article)
        .catch(err => err)
}

export function fetchComments(id) {
    return api
        .get(`/articles/${id}/comments`)
        .then(res => res.data.comments)
        .catch(err => err)
}

export function fetchTopics() {
    return api
        .get(`/topics`)
        .then(res => res.data.topics)
        .catch(err => err)
}