import { useRouter } from "next/dist/client/router"
const review=()=>{
    const router=useRouter()
     const {productId,reviewId}=router.query
   const ProuctId= router.query.productId
    return(
        <div>
            <h1>Review {reviewId} of Product {ProuctId}</h1>
        </div>
    )
}

export default review