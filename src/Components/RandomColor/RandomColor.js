import { useEffect, useState } from "react";

export default function RandomColor() {
    const [typeofColor, setTypeofColor] = useState("HEX");
    const [color, setColor] = useState("#000000");

    const generateHexColor = () => {
        const hexArray = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"];
        let hex = '#'

        for(let i = 0; i < 6; i++){
            hex += hexArray[Math.floor(Math.random()*hexArray.length)]
        }

        setColor(hex)
    };

    const generateRGBColor = () => {

        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)

        setColor(`RGB(${r},${g},${b})`)
    }

    useEffect(()=>{
        if(typeofColor === 'HEX'){
            generateHexColor()
        }else{
            generateRGBColor()
        }
    },[typeofColor])


    return (
        <div style={{
            backgroundColor: color,
            width: "100vw",
            height:"100vh"
        }}>
            <div>
                <button onClick={()=>setTypeofColor("RGB")}>Generate RGB color</button>
                <button onClick={()=>setTypeofColor("HEX")}>Generate HEX color</button>
                <button onClick={()=>{
                    typeofColor === 'HEX' ? generateHexColor() : generateRGBColor()
                }}>Generate Random color</button>
            </div>
            <div style={{
                display: "flex",
                justifyContent:"center",
                alignItems:"center",
                color:"white",
                marginTop:"30px",
                flexDirection:"column",
                fontSize:"30px"
            }}>
                <h3>{typeofColor}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}
