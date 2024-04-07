import { useEffect, useState } from "react"
import FilteredList from "./FilteredList"

function AutoComplete(){

    const[isLoading, setIsLoading]=useState(false)
    const[iserror, setError]=useState('')
    const[names, setNames]=useState([])
    const[params, setParams]=useState('')
    const[filteredUsers, setFilteredUsers]=useState([])
    const[showDropdown, setShowDropdown]=useState(false)

    const url = 'https://dummyjson.com/users';

    const fetchUsers = async(url) => {
        try{
            setIsLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.users)
            if(data && data.users.length){
                setNames(data.users.map(dataItem => dataItem.firstName))
                setIsLoading(false)
                // console.log(names)
            }           
        }catch(e){
            setError(e.message)
            setIsLoading(false)
            console.log(e.message)
        }
    }

    useEffect(()=>{
        fetchUsers(url)
    },[])

    const handleChange = (event) => {
        const query = event.target.value.toLowerCase()
        setParams(query)
        if(query.length > 1){
            const filteredData =  names && names.length ?
            names.filter(item => item.toLowerCase().indexOf(query) > -1)
            : []
            // console.log(filteredData)
            setFilteredUsers(filteredData)
            setShowDropdown(true)
        }else{
            setShowDropdown(false)
        }
    }

    if(iserror){
        return<div>Error occured in the application{iserror}</div>
    }

    return(
        <div style={{color: 'black'}}>
            {isLoading ? <div>Loading the Application pls wait</div> 
            : <input name="params" value={params} onChange={handleChange} placeholder="Enter a name" />}
            
            {showDropdown && <FilteredList data={filteredUsers}/>}
        </div>
    )
}

export default AutoComplete;