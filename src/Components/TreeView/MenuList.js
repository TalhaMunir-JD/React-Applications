import MenuItem from "./MenuItem";

export default function MenuList({ List = [] }){
    return(<ul>
        {console.log(List)}
        {List && List.length ? 
            List.map((listItem, index) => <MenuItem item = {listItem} index={index}/>)
            : null}
    </ul>)
}