import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './StarRating.css'
export default function StarRating ({ noOfStars = 10 }) {

    const[rating, setRating] = useState(0)
    const[hover, setHover] = useState(0)

    const handleStarsClick = (index) => {
        setRating(index)
    }

    const handlemouseenter = (index) => {
        setHover(index)
    }

    const handlemouseleave = () => {
        setHover(rating)
    }
    return(
        <div className='starrating'>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index+=1
                    return(
                        <FaStar 
                            key={index}
                            className={(index <= hover) ? 'active' : 'inactive'}
                            onClick={()=>handleStarsClick(index)}
                            onMouseEnter={()=>handlemouseenter(index)}
                            onMouseLeave={()=>handlemouseleave()}
                            size={40}
                        />
                    )
                })
            }
        </div>
    )
}