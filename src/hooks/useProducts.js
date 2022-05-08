const { useState, useEffect } = require("react")

const useProducts = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("https://cryptic-hollows-59204.herokuapp.com/product")
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return [products, setProduct];
}
export default useProducts;