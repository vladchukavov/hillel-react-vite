import React from "react";

function AppForm({ submitTarget, inputTarget }) {
    return (
        <form className={'login'} onSubmit={submitTarget}>
            <input className={`login__input`} type={"text"} placeholder={"login"} name={"login"} onInput={inputTarget}></input>
            <input className={`login__input`} type={"password"} placeholder={"password"} name={"password"} onInput={inputTarget}></input>
            <button>Login</button>
        </form>
    );
}

export default AppForm;