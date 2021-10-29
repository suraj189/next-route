import Link from "next/link"

const ProductList=()=>{


    return(
        <div>
            <Link href="/product/1">
            <a>Product 1</a>
            </Link>
            <Link href="/product/2"><a>Product 2</a></Link>
            <Link href="/product/3"><a>Product 3</a></Link>

        </div>
    )
}

export default ProductList