import { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function MenuItem({ item }){

    const[displayChildrenAttributes, setdisplayChildrenAttributes] = useState({})

    const handleDisplayChildren = (label) => {
        console.log("before",displayChildrenAttributes)
        setdisplayChildrenAttributes({
            ...displayChildrenAttributes,
            [label]: !displayChildrenAttributes[label]
        })
        console.log("after", label, displayChildrenAttributes)
    }

    console.log('Display children attributes profiles: ', displayChildrenAttributes)
    return(<li>
        <div key={item.id} style={{display: 'flex', gap: '20px'}}>
            <p key={item.id}> {item.label}</p>
            {
                item && item.children && item.children.length ? <span onClick={()=>handleDisplayChildren(item.label)}>{
                    displayChildrenAttributes[item.label] ? <FaMinus color="black" size={10}/> : <FaPlus color="black" size={10} />
                }</span> : null
            }
        </div>
        {
            item && item.children && item.children.length > 0 && displayChildrenAttributes[item.label] ? 
            <MenuList List={item.children}/>
            : null
        }
    </li>)
}