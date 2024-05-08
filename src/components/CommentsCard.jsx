export default function CommentsCard({comment}) {
    return (
        <li className="commentCard">
            <div className="author_created_at">
            <h5>{comment.author}</h5>
            <p>{comment.created_at}</p>
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