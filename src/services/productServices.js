// import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpHelper";

export async function addProduct(user) {
    try {
        let data = await httpAxios.post("/api/products", user)
        console.log('data', data)
        return data.data.result

    } catch (err) {
        console.log('err', err)
    }
}

export async function getAllProducts() {
    try {
        let data = await httpAxios.get("/api/products")
        console.log('data', data)
        return data.data.result
    } catch (err) {
        console.log('err', err)
    }
}


export async function getSingleProducts(id) {
    console.log('id', id)
    try {
        let data = await httpAxios.get(`/api/products/${id}`)
        console.log('data', data)
        return data.data.result
    } catch (err) {
        console.log('err', err)
    }
}

export async function updateProduct(id, user) {
    try {
        let data = await httpAxios.put(`/api/products/${id}`, user)
        console.log('data', data)
        return data.data.result
    } catch (err) {
        console.log('err', err)
    }
}

export async function productDelete(id) {
    try {
        let data = await httpAxios.delete(`/api/products/${id}`)
        return data.data.result

    } catch (err) {
        console.log('err', err)
    }
}