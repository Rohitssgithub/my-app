"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

let getProducts = async () => {
    let data = await fetch('http://localhost:5005/api/products');
    data = await data.json();
    console.log(data)
    if (data.success) {
        return data.result
    }
}


const page = () => {
    const [products, setProducts] = useState([]);

    // let prod = await getProducts();
    // console.log(prod)

    async function handleDelete(id) {
        await axios.delete(`http://localhost:5005/api/products/${id}`);
        const updatedProducts = products.filter((product) => product._id !== id);
        setProducts(updatedProducts);
    }
    async function handleUpdate(id) {
        await axios.put(`http://localhost:5005/api/products/${id}`);


    }
    useEffect(() => {
        async function fetchProducts() {
            const prod = await getProducts();
            setProducts(prod);
        }
        fetchProducts();
    }, []);

    return (
        <>
            <p>product list</p>
            <table border='1'>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>action</td>

                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((ele) => {
                            return (
                                <>
                                    <tr>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.phone}</td>
                                        <td><button onClick={() => handleDelete(ele._id)}>delete</button></td>
                                        <td><Link href={`productlist/${ele._id}`}>edit</Link></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default page