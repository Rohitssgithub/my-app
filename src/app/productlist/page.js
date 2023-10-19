"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { getAllProducts, productDelete } from '@/services/productServices';

// let getProducts = async () => {
//     let data = await fetch('http://localhost:5005/api/products');
//     data = await data.json();
//     console.log(data)
//     if (data.success) {
//         return data.result
//     }
// }


const page = () => {
    const [products, setProducts] = useState([]);

    async function handleDelete(id) {
        productDelete(id)
        // await axios.delete(`http://localhost:5005/api/products/${id}`);
        const updatedProducts = products.filter((product) => product._id !== id);
        setProducts(updatedProducts);
    }

    useEffect(() => {
        async function fetchProducts() {
            const prod = await getAllProducts();
            // console.log('prod', prod)
            setProducts(prod);
        }
        fetchProducts();
    }, []);

    // console.log('products', products)

    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" href='/addproduct'>Add Product</Link>
            </li>
            <p>product list</p>
            <table border='1'>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>price</td>
                        <td>Des</td>
                        <td>action</td>

                    </tr>
                </thead>
                <tbody>

                    {
                        products?.map((ele) => {
                            return (
                                <>
                                    <tr>
                                        <td>{ele.title}</td>
                                        <td>{ele.price}</td>
                                        <td>{ele.description}</td>
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