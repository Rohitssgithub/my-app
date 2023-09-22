import React from 'react';
async function getUser(id) {
    console.log(id)
    let data = await fetch(`https://dummyjson.com/users/${id}`)
    data = await data.json();
    return data
}

const page = async ({ params }) => {
    let users = await getUser(params.userId);

    return (
        <>
            {

            }
        </>
    )
}

export default page