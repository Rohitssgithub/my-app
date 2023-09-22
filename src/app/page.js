import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <Link href='/addproduct'>add product</Link>
      <br />
      <Link href='/productlist'>product list</Link>
    </>
  )
}

export default page