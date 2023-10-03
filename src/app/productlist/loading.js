import React from 'react'
import '../productlist/loading.css'

const loading = () => {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default loading