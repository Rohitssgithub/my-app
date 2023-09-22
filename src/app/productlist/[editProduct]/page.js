'use client'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const [user, setUser] = useState({
        name: '', email: '', phone: ''
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
    }
    console.log(user)

    const getProductDetails = async () => {
        let productData = await fetch(`http://localhost:5005/api/products/${params.editProduct}`)
        productData = await productData.json();
        console.log(productData)
        setUser(productData.result)
    }

    useEffect(() => {
        getProductDetails()
    }, [])



    return (
        <>
            <p>update product</p>
            <div>
                <input type='text' value={user.name} onChange={(e) => handlechange(e)} name='name' placeholder='name' />
                <input type='email' value={user.email} onChange={(e) => handlechange(e)} name='email' placeholder='email' />
                <input type='number' value={user.phone} onChange={(e) => handlechange(e)} name='phone' placeholder='phone' />
                <button onClick={handleSubmit}>update</button>
            </div>
        </>
    )
}

export default page