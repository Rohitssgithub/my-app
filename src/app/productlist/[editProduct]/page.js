'use client';
import React, { useEffect, useState } from 'react';
// import { updateProduct, getSingleProducts } from '@/services/productServices';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '@/redux/feature/productslice';
import { updateProduct } from '@/redux/feature/productslice';
const Page = ({ params }) => {
    const dispatch = useDispatch();
    const { singleProduct } = useSelector((state) => state.product);
    console.log('singleProduct', singleProduct);

    const [user, setUser] = useState({
        title: '',
        price: '',
        description: ''
    });

    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        dispatch(fetchSingleProduct(params.editProduct));
    }, [params.editProduct]);

    useEffect(() => {
        if (singleProduct) {
            setUser({
                title: singleProduct.title || '',
                price: singleProduct.price || '',
                description: singleProduct.description || ''
            });
        }
    }, [singleProduct]);

    const handleUpdate = async () => {
        console.log('called');
        dispatch(updateProduct(params.editProduct, user));
    };

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
    );
}

export default Page;
