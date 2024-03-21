import { useState } from 'react'
import data from './data'
import './Accordion.css'
function Accordion () {

    const[selected, setSelected] = useState(null)
    const[enablemultiple, setenablemultiple] = useState(false)
    const[multipleSelection, setMultipleSelection] = useState([])

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null: id)
    }

    const handleMultipleSelection = (id) => {
        enablemultiple === true ? console.log('multiple is enabled') : console.log('multiple is disabled')
        let multiple = [...multipleSelection]
        const index = multiple.indexOf(id)
        if(index === -1){ multiple.push(id) }
        else{ multiple.splice(index, 1)}

        setMultipleSelection(multiple)
    }

    return(
        <div className='accordioncontainer'>
            <div className='Accordian'></div>
            <button onClick={()=>setenablemultiple(!enablemultiple)} className='toggleButton'>Click to enable multiple selection</button>
                {
                    data && data.length > 0 ? 
                    data.map((dataItem) => (
                        <div key={dataItem.id}>
                            <div className='item'>
                                <div onClick={enablemultiple ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className='title'>
                                    <h3>
                                        {dataItem.question}
                                    </h3>
                                    <span>+</span>
                                </div>
                            {
                                enablemultiple ? multipleSelection.indexOf(dataItem.id) !== -1 &&
                                <div className='answer'>{dataItem.answer}</div> : 
                                selected === dataItem.id ? <div className='answer'>{dataItem.answer}</div> : null
                            }
                            </div>
                        </div>
                    ))
                    : <div>No Data found</div>
                }
        </div>
    
    )
}

export default Accordion;