
import { useRouter } from "next/dist/client/router"
const ProductDetails=()=>{
    const router=useRouter()
 
   const ProuctId= router.query.productId
    return(
        <div>
            <h1>Detail Description about {ProuctId}</h1>
        </div>
    )
}

export default ProductDetails