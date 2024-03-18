import {useEffect, useState} from "react"
import AppForm from "./AppForm.jsx";

function App() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const storedPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((json) => setPosts(json))
    }
    const storedUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json) => setUsers(json))
    }
    useEffect(() => {
        storedUsers()
    }, []);

    const submitTarget = (event) => {
        event.preventDefault()
        const userFound = users.find(user => user.name === login && user.username === password);
        if (userFound) {
            storedPosts()
            setIsLoggedIn(true)
        } else {
            alert("Invalid login or password!")
        }
    }
    const inputTarget = (event) => {
        const { name, value } = event.target;
        if (name === "login") {
            setLogin(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    const logoutTarget = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            {!isLoggedIn && (
                <AppForm submitTarget={submitTarget} inputTarget={inputTarget} />
            )}
            {isLoggedIn && (
                <>
                    <section className={`button-logout`} >
                        <button  onClick={logoutTarget}>log out</button>
                    </section>
                    <section className={`posts`}>
                    {posts.map((item) => (
                        <div className={`posts__container`} key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    ))}
                    </section>
                </>
            )}
        </>
    );
}

export default App
