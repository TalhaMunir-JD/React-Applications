import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import './ImageSlider.css';

export default function ImageSlider({ url, page = 1, limit = 5 }) {

    const[images, setImages] = useState([])
    const[slide, setSlide] = useState(0)
    const[loading, setLoading] = useState(false)
    const[errMessage, seterrMessage] = useState(null)

    const fetchData = async (url) => {
        try{
            setLoading(true)
            const response = await fetch(`${url}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if (data){
                setImages(data)
                console.log(data)
                setLoading(false)
            }
        }catch(e){
            seterrMessage(e.message)
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        if(url !== '') fetchData(url)
    }, [url])

    if(loading){
        return <div>Still loading please wait </div>
    }

    if(errMessage !== null){
        return <div>Error Occured {errMessage}</div>
    }


    const handleprevious = () => {
        setSlide(slide === 0 ? images.length - 1: slide - 1)
    }


    const handlenext = () => {
        setSlide(slide === images.length - 1 ? 0 : slide + 1)
    }

    return(
        <div className="container">
            <BsArrowLeftCircleFill 
                onClick={handleprevious} 
                className="arrow left-arrow"
            />
            {
                images && images.length ? 
                images.map((imageItem, index)=>(
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={slide === index ? "image-slider": "image-slider hide-image-slider"}
                    />
                ))
                : null
            }
            <BsArrowRightCircleFill onClick={handlenext} className="arrow right-arrow"/>
            <span className="circle-indicators">
                {
                    images && images.length ? 
                    images.map((_, index)=><button 
                        key={index}
                        onClick={()=>setSlide(index)}
                        className={slide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                    >
                    </button>)
                    : null
                }
            </span>
        </div>
    )
}