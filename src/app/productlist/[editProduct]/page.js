'use client'
import React, { useEffect, useState } from 'react';
import { updateProduct, getSingleProducts } from '@/services/productServices';

const page = ({ params }) => {

    console.log('params', params)



    const [user, setUser] = useState({
        title: '', price: '', description: ''
    })
    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const fetchSingleProduct = async () => {
            let data = await getSingleProducts(params.editProduct)
            setUser(data)
        }
        fetchSingleProduct()
    }, [])

    const handleUpdate = async () => {
        updateProduct(params.editProduct, user)
    }


    return (
        <>
            <p>update product</p>
            <div>
                <input type='text' value={user.title} onChange={(e) => handlechange(e)} name='title' placeholder='title' />
                <input type='number' value={user.price} onChange={(e) => handlechange(e)} name='price' placeholder='price' />
                <input type='text' value={user.description} onChange={(e) => handlechange(e)} name='description' placeholder='description' />
                <button onClick={handleUpdate}>update</button>
            </div>
        </>
    )
}

export default page