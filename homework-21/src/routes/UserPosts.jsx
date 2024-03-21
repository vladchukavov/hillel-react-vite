import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function UserPosts() {
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const { userId } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(json => setUser(json))

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [userId])
    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <section className={`user`}>
            <h1 className={`user__header`}>User Info:</h1>
            <p className={`user__name`}>Name: <b>{user.name}</b></p>
            <h2 className={`user__header-post`}>User Posts:</h2>
                {posts.map(post => (
                    <>
                        <ul className={`user__container`}>
                            <li  key={post.id}>
                                <h2>{post.title}</h2>
                                <p key={post.id}>{post.body}</p>
                            </li>
                        </ul>
                    </>
                ))}
        </section>
    )
}

export default UserPosts
