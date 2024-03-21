import { useEffect, useState } from "react"
import './styles.css'

export default function LoadMoreItems (){

    const[loading, setLoading] = useState(true)
    const[products, setProducts] = useState([])
    const[count, setCount] = useState(0)
    const[errorMessage, seterrorMessage] = useState(null)

    const fetchData = async () => {
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`)
            const data = await response.json()
            console.log(data.products)
            if(data && data.products && data.products.length){
                setProducts((prevData)=>[...prevData, ...data.products])
                setLoading(false)
            }
        }catch(e){
            seterrorMessage(e.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[count])
    
    if(loading){
        console.log(count)
        return(<div>The stuff is still loading so please wait</div>)
    }

    if(errorMessage){
        <div>{errorMessage}</div>
    }

    return(
        <div className="load-more-container">
            <div className="items">
                {
                    products && products.length ? 
                        products.map((item)=>(
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title}/>
                                <p>{item.title}</p>
                            </div>
                        ))
                    : null
                }

            </div>
            <button className="loadmorebutton" onClick={()=>setCount(count+1)}>
                Load More Items
            </button>
        </div>
    )
}