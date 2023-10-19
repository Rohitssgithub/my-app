'use client'
import React, { useState } from 'react'
import { addProduct } from '@/services/productServices'
const page = () => {
    const [user, setUser] = useState({
        title: '', price: '', description: ''
    })
    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        // let data = await fetch('http://localhost:5005/api/products', {
        //     method: "POST",
        //     body: JSON.stringify(user)
        // });
        // console.log(data)
        addProduct(user)

    }
    return (
        <>
            <p>add product</p>
            <div>
                <input type='text' value={user.title} onChange={(e) => handlechange(e)} name='title' placeholder='title' />
                <input type='number' value={user.price} onChange={(e) => handlechange(e)} name='price' placeholder='price' />
                <input type='text' value={user.description} onChange={(e) => handlechange(e)} name='description' placeholder='description' />
                <button onClick={handleSubmit}>add</button>
            </div>
        </>
    )
}

export default page