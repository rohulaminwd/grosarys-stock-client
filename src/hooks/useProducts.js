const { useState, useEffect } = require("react")

const useProducts = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/product")
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return [product, setProduct];
}
export default useProducts;