'use client'
import React, { useState } from 'react'

const page = () => {
    const [user, setUser] = useState({
        name: '', email: '', phone: ''
    })
    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        let data = await fetch('http://localhost:5005/api/products', {
            method: "POST",
            body: JSON.stringify(user)
        });
        console.log(data)

    }
    return (
        <>
            <p>add product</p>
            <div>
                <input type='text' value={user.name} onChange={(e) => handlechange(e)} name='name' placeholder='name' />
                <input type='email' value={user.email} onChange={(e) => handlechange(e)} name='email' placeholder='email' />
                <input type='number' value={user.phone} onChange={(e) => handlechange(e)} name='phone' placeholder='phone' />
                <button onClick={handleSubmit}>add</button>
            </div>
        </>
    )
}

export default page