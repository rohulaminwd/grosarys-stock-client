const { useState, useEffect } = require("react")

const useProducts = () => {
    const [products, setProduct] = useState([])
    const [looding, setLooding] = useState(true)

    useEffect(() => {
        fetch("https://cryptic-hollows-59204.herokuapp.com/product")
        .then(res => res.json())
        .then(data => {
            if(data){
                setProduct(data)
                setLooding(false)
            }
        })
    }, [])

    return [products, setProduct, looding];
}
export default useProducts;