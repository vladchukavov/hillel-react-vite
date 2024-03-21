import React, {useEffect, useState} from "react"
import AppForm from "../components/AppForm.jsx"
import {Link, Outlet, useLocation} from "react-router-dom"

function Home() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const location = useLocation();

    const storedPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
            .catch(error => console.error('Error fetching posts:', error))
    }

    const storedUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
            .catch(error => console.error('Error fetching users:', error))
    }

    useEffect(() => {
        storedUsers()
    }, [])

    const submitTarget = (event) => {
        event.preventDefault()
        const userFound = users.find(user => user.name === login && user.username === password)
        if (userFound) {
            storedPosts()
            setIsLoggedIn(true)
        } else {
            alert("Invalid login or password!")
        }
    }

    const inputTarget = (event) => {
        const {name, value} = event.target
        if (name === "login") {
            setLogin(value)
        } else if (name === "password") {
            setPassword(value)
        }
    };

    const logoutTarget = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            {!isLoggedIn && <AppForm submitTarget={submitTarget} inputTarget={inputTarget}/>}
            {isLoggedIn && (
                <>
                    <header>
                        <nav className={`nav`}>
                            <Link to={`/`}>
                                <button>Home</button>
                            </Link>
                            <button onClick={logoutTarget}>log out</button>
                        </nav>
                    </header>
                    <main className={`main`}>
                    <section >
                        <h1 className={`user__name`}>User Posts:</h1>
                        {users.map((item) => (
                            <div key={item.id}>
                                <ul>
                                    <li><Link to={`/user/${item.id}`}>{item.name}</Link></li>
                                </ul>

                            </div>
                        ))}
                    </section>
                    {location.pathname === "/" && (
                        <section className={`posts`}>
                            <h2 className={`posts__header`}>All Posts:</h2>
                            {posts.map(item => (
                                <div className={`posts__container`} key={item.id}>
                                    <h2>{item.title}</h2>
                                    <p>{item.body}</p>
                                </div>
                            ))}
                        </section>
                    )}
                    </main>
                </>
            )}
            <Outlet/>
        </>
    )
}

export default Home