import {useState} from "react"
import { getComments, deleteComment } from "../../api"
import { UserLoginContext } from "../contexts/userLogin"
import { useContext } from "react"
import LoadingWheel from "./LoadingWheel"

export default function CommentsCard({comment, article_id, setRefresh}) {

    const [isLoading, setIsLoading] = useState(false)
    const { loggedUser } = useContext(UserLoginContext)
    
    function handleDelete(event) {
        setIsLoading(true)
        if (loggedUser === comment.author){
            deleteComment(comment.comment_id)
            .then(() => {
                getComments(article_id)
                .then(() => {
                    setRefresh(Math.random)
                    setIsLoading(false)
                })
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
                console.log("not authorised to delete this comment")            
        }
    }

    const splitDate = comment.created_at.split("T")
    const formattedDate = splitDate[0].split("-").reverse().join("-")

    return isLoading ? (
            <LoadingWheel/>
        ) 
        :
        (
        <li className="commentCard">
            <div className="author_created_at">
                <div className="author_created">
            <h5>{comment.author}</h5>
            <p>{formattedDate}</p>
            </div>
            {loggedUser === comment.author && <button className="deleteButton"value={comment.comment_id}
            onClick={(event) => handleDelete(event.target.value)}
            >✖</button>}
            </div>
            <br>
            </br>
            <div className="commentBody">
            <p>{comment.body}</p>
            </div>
            <br>
            </br>
            <br>
            </br>
        </li>
    )
}