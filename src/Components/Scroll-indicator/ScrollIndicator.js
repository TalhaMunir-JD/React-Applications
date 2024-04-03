import { useEffect } from "react";
import { useState } from "react";
import './styles.css';
function ScrollIndicator(){
    const[products, setProducts] = useState([])
    const[loading, setloading] = useState(false)
    const[error, setError] = useState('')
    const[scrollPercentage, setScrollPercentage] = useState(0)

    const url = 'https://dummyjson.com/products?limit=100'

    useEffect(() => {
        fetchData(url)
    },[url])


    const handleScrollPercentage = () => {
        console.log(document.body.scrollTop, document.documentElement.scrollHeight, document.documentElement.scrollTop, document.documentElement.clientHeight)

        const howmuchscrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        // console.log(height)
        const percentage = (howmuchscrolled/height) * 100
        console.log(percentage)
        setScrollPercentage(percentage)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage)

        return()=>{
            window.removeEventListener('scroll', ()=>{})
        }
    },[])

    if(loading){
        return(<div>
            Loading the Application
        </div>)
    }
    if(error){
        return(<div>
            Error: {error}
        </div>)
    }



    const fetchData = async(geturl) => {    
        try{
            setloading(true)
            const response = await fetch(geturl)
            const data = await response.json()
            if(data && data.products && data.products.length>0){
                setProducts(data.products)
                setloading(false)
            }
        }catch(error){
            console.log(error.message)
            setError(error.message)
            setloading(false)
        }
    }

    return(
        <div>
            <div className="TopContainer">
                <h1>Scroll bar indicator</h1>
                <div className="Progressbarcontainer">
                    <div className="ProgressBar" style={{width:`${scrollPercentage}%`, backgroundColor:'green'}}></div>
                </div>
            </div>
            {
                products && products.length > 0 
                ? products.map((productitem) => <p key={productitem.id}>{productitem.title}</p>)
                : null
            }
        </div>

    )
}

export default ScrollIndicator;