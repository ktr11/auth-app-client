import React from 'react'
import Registration from './auth/Registration'

export default function Home(props) {
    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/dashboard")
    }
    return (
        <div>
            <h1>Home</h1>
            <h2>ログイン状態: {props.loggedInStatus}</h2>
            <Registration handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
        </div>
    )
}