import { useRouter } from "next/dist/client/router"

const Docs=()=>{

    const router=useRouter()
    const {params=[]}=router.query
    console.log(params)
    return(
        <h1>Docs Home Page</h1>
    )
}

export default Docs