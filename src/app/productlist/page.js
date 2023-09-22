'use client'
import React from 'react';
import axios from 'axios';

let getProducts = async () => {
    let data = await fetch('http://localhost:5005/api/products');
    data = await data.json();
    console.log(data)
    if (data.success) {
        return data.result
    }
}

const page = async () => {
    let prod = await getProducts();
    console.log(prod)

    async function handleDelete(id) {
        let data = await axios.delete('http://localhost:5005/api/products/' + id)
    }

    return (
        <>
            <p>product list</p>
            <table border='1'>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        prod.map((ele) => {
                            return (
                                <>
                                    <tr>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.phone}</td>
                                        <td><button onClick={() => handleDelete(ele._id)}>click</button></td>
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