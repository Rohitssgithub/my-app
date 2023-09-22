'use client'
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {



    const [user, setUser] = useState({
        name: '', email: '', phone: ''
    })
    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const getProductDetails = async () => {
        let productData = await fetch(`http://localhost:5005/api/products/${params.editProduct}`)
        productData = await productData.json();
        console.log(productData)
        setUser(productData.result)
    }

    useEffect(() => {
        getProductDetails()
    }, [])

    const handleUpdate = async () => {
        let result = await fetch(`http://localhost:5005/api/products/${params.editProduct}`, {
            method: "PUT",
            body: JSON.stringify(user)
        });
        result = await result.json();
        if (result.result) {
            alert('updated')
        }
    }


    return (
        <>
            <p>update product</p>
            <div>
                <input type='text' value={user.name} onChange={(e) => handlechange(e)} name='name' placeholder='name' />
                <input type='email' value={user.email} onChange={(e) => handlechange(e)} name='email' placeholder='email' />
                <input type='number' value={user.phone} onChange={(e) => handlechange(e)} name='phone' placeholder='phone' />
                <button onClick={handleUpdate}>update</button>
            </div>
        </>
    )
}

export default page