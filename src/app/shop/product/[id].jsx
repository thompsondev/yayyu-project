import { useRouter } from "next/router"

export default function productInfo() {
    const router = useRouter
    console.log(router, "productInfo")
    return <div>productlove</div>
}