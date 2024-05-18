import { useState, useEffect } from "react"
import { getComments, postComment } from "../../api"
import { useParams } from "react-router-dom"
import CommentsCard from "./CommentsCard"
import LoadingWheel from "./LoadingWheel"
import ErrorHandling from "./ErrorHandling"

export default function Comments(){

    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [commentText, setCommentText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [refresh, setRefresh] = useState(0)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setIsLoading(true)
        getComments(article_id)
        .then((res) => {

          setComments(res.data.comments)
          setIsLoading(false)
        })
        .catch((err) => {
            setError(err)
            setIsLoading(false)
          })
    }, [article_id, refresh])

    
    function handleSubmit(event) {
        console.log("submit")   
        setIsLoading(true)
        event.preventDefault()
        postComment(article_id, commentText)
        .then(() => {
            setCommentText("")
            getComments(article_id)
        .then((updatedComments) => {
                {setComments(updatedComments.data.comments)
            }
            setIsLoading(false)
        })
        }).catch((err) => {
            console.log(err)
        })
    }

    if (error) {
        return <ErrorHandling error={error}/>
    }

    return isLoading ? (
        <LoadingWheel/>
    ) 
    :
    (
        <div>
        <ul className="centerList">
        <div className="postComment">
        <form
        className="postCommentForm"
        onSubmit={
          handleSubmit
        }
      >
        <label htmlFor="comment"
        ></label>
        <textarea 
        className="commentBox"
        placeholder="type comment here"
        type="text"
        id="comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        />
        <div>
        <button type="submit">Post comment</button>
        </div>
        </form>
        </div>
        <br>
        </br>
        
                    {comments.map((comment)=>{
                        return <CommentsCard setRefresh={setRefresh} key={comment.comment_id} comment={comment} article_id={article_id} /> 
                    })}
                </ul>
                
        </div>
    )


}