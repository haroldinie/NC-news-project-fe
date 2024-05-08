import '../App.css'
import './AllArticlesCard.css'
import { Link, useParams } from "react-router-dom"


export default function AllArticlesCard({article}) {
    return (
        <Link className="link" to ={`/articles/${article.article_id}`}>
        <li className="card">
            <div className="image">
            <img className="imageb" src={article.article_img_url} alt="no image"/>
            </div>
            <div className="article-title">
            <h3>{article.title}</h3>
            </div>
            <div className="cardInfo">
            <p className='smallText'>Topic</p>
                <p>{article.topic}</p>
            <p className='smallText'>posted by:</p>
            <p>{article.author}</p>
            </div>
        </li>
        </Link>
    )
}