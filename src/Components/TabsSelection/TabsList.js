import Tabs from "./Tabs";

const CustomComponent = () => {
    return(
        <div>
            <h1>This is a custom component</h1>
        </div>
    )
}

function TabsList (){
    const content =[
        {
            label: 'Tab1',
            content:'This is tab 1'
        },
        {
            label: 'Tab2',
            content:'This is tab 2'
        },
        {
            label: 'Tab3',
            content: <CustomComponent />,
        }
    ];

    const handleChange = (index) => {
        console.log(index);
    }
    console.log(content)
    return(<Tabs Tabcontent={content} onchange={handleChange}/>)

}

export default TabsList;