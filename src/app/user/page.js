import Link from 'next/link';
import React from 'react';

async function getUser() {
    let data = await fetch('https://dummyjson.com/users')
    data = await data.json();
    return data
}

const page = async () => {
    let users = await getUser();
    return (
        <>
            {
                users.users.map((ele) => {
                    return (
                        <Link href={`/user/${ele.id}`}> {ele.id}. {ele.firstName} {ele.lastName}</Link >
                    )
                })
            }
        </>
    )
}

export default page