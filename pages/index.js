
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
const Home = () => {


    const router=useRouter()
    const handleClick=()=>{
        console.log('placing the order')
        router.push('/product')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="product" >
                <a>Product</a>
            </Link >
            <Link href="blog">
                <a>Blog</a>
            </Link >
            <button onClick={handleClick}>Place order</button>
        </div>
    )
}

export default Home
