"use client"
import React from 'react'
import Link from 'next/link';
import { Logout } from '@/services/loginServices';
const Navbar = () => {

    const logoutUser = async () => {
        try {
            const result = await Logout()
            console.log('result', result)
            // context.setUser(undefined)
            router.push("/login")

        } catch (err) {
            toast.error("failed to logout")
        }

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Next js</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/signup">signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={logoutUser} href='/'>logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href='/profile'>profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
