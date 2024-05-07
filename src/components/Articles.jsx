import { Link } from "react-router-dom"
import AllArticlesCard from "./AllArticlesCard"
import { useState, useEffect } from "react"
import { getArticles } from "../../api"

export default function Articles() {

    const [ articles, setArticles ] = useState([])

    useEffect(() => {
      getArticles()
      .then((articleData) => {
        setArticles(articleData.data.articles)
      })
    }, [articles])

    return (
        <div>
        <p>You're on the ARTICLES page</p>
        <ul className="centerList">
                    {articles.map((article)=>{
                        return <AllArticlesCard key={article.article_id} article={article}/> 
                    })}
                </ul>
        </div>
    )
    
}