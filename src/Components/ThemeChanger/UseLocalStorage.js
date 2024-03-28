import { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue) => {
    let Currentvalue;

    const[value, setValue] = useState(()=>{
        try{
            Currentvalue = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        }catch(error){
            console.log("error in custom hook: ", error.message)
            Currentvalue = defaultValue
        }
        return Currentvalue;
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    return[value, setValue]
}


export default useLocalStorage;