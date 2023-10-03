// import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpHelper";

export async function addUser(user) {
    try {
        let data = await httpAxios.post("/api/user", user)
        // toast.success("user has been created!!", {
        //     position: "top-center"
        // })
        return data.data


    } catch (err) {
        console.log('err', err)
        // toast.error("not able to create", {
        //     position: "top-center"
        // })

    }
}