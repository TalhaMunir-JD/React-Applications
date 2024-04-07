function FilteredList({ data }){
    console.log('data: ', data.length);

    return (<ul>
        {
            data && data.length ?
            data.map((dataItem, index)=>
                <li key={index}>
                    {dataItem}
                </li>)
            : null
        }
    </ul>)
}

export default FilteredList;