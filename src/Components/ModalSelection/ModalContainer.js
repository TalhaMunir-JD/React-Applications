import { useState } from "react"
import Modal from "./Modal"

function ModalContainer(){
    const[showModalPage, setshowModalPage] = useState(false)

    const handleClick = () => {
        setshowModalPage(!showModalPage)
    }

    const onclose = () => {
        setshowModalPage(false)
    }

    return <div className="Parent">
        <button onClick={handleClick}>Open Modal page</button>
        {showModalPage && <Modal onclose={onclose}/>}
    </div>
}

export default ModalContainer;