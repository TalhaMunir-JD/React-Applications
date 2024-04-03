import { useState } from "react";
import './styles.css';

function Tabs({Tabcontent, onchange}) {

    const[currentTabIndex, SetCurrentTabIndex] = useState(0)

    const handleClick = (index) => {
        SetCurrentTabIndex(index)
        onchange(index)
    }

    return(
        <div className="Wrapper">    
            <div className="TabsContainer">
                {Tabcontent.map((tab, index)=>(
                    <div className={`tabitem ${currentTabIndex === index ? 'active': ''}`} key={index} onClick={()=>handleClick(index)}>
                        <span>{tab.label}</span>
                    </div>
                ))}
            </div> 
            <div className="TabsContent">
                {Tabcontent[currentTabIndex] && Tabcontent[currentTabIndex].content}
            </div>    
        </div>
    )
}


export default Tabs;