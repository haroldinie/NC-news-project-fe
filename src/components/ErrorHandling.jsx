import React from "react"

export default function ErrorHandling({error}) {
    const message = error ? error.message : "An unexpected error has occurred.";

    return (
        <div className="error-message">
        <h2>Something went wrong!</h2>
        <p>{message}</p>
    </div>
    )
}