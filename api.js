import axios from "axios";

export function getArticles() {
    return axios
    .get("https://h-nc-news-project.onrender.com/api/articles")
    .catch((err) => {
        console.log(err)
    })
}

export function getArticleById(article_id) {
    return axios
    .get(`https://h-nc-news-project.onrender.com/api/articles/${article_id}`)
    .catch((err) => {
    console.log(err)
    })
}

export function getComments(article_id){
    return axios
    .get(`https://h-nc-news-project.onrender.com/api/articles/${article_id}/comments`)
    .catch((err) => {
        console.log(err)
    })
}

