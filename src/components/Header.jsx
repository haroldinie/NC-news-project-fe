import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header id="header">
            <h1>NC News</h1>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/articles">All Articles</Link>
            <Link className="link" to="/topics">Topics</Link>
        </header>
    )
}