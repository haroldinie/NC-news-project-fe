import '../App.css'
import './AllArticlesCard.css'
import { Link, useParams } from "react-router-dom"


export default function AllArticlesCard({article}) {

    
    return (
        <Link className="linkb" to ={`/articles/${article.article_id}`}>
        <li className="card">
            <div className="image">
            <img className="imageb" src={article.article_img_url} alt="no image"/>
            </div>
            <div className="article-title">
            <h3>{article.title}</h3>
            </div>
            <div className="cardInfo">
            <p className='smallText'>Topic:</p>
            <p className='smallText'>posted by:</p> 
            </div>
            <div className='cardInfo9'>{article.topic} 
            <div>{article.author}</div>
            </div>
        </li>
        </Link>
    )
}