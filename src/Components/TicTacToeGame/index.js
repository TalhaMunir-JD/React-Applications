import { useEffect, useState } from 'react'
import './styles.css'

const Square = ({ value, onClick }) => {
    return(<button onClick={onClick} className='square'>
            {value}
        </button>)
}

function Tictactoe(){

    const[square, setSquare] = useState(Array(9).fill(""))
    const[isXturn, setisXturn] = useState(true)
    const[status, setStatus] = useState('')

    const handleClick = (index) => {
        let cpysquares = [...square]
        if(getWinner(cpysquares) || cpysquares[index]) 
            return;
        cpysquares[index] = isXturn ? 'X' : '0'
        setisXturn(!isXturn)
        setSquare(cpysquares)
    }

    const getWinner = () => {
        const winnerCombinations = [
            // 0 1 2
            // 3 4 5
            // 6 7 8
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let i = 0; i < winnerCombinations.length; i++){
            const [x,y,z] = winnerCombinations[i]
            if(square[i] && square[x] == square[y] && square[x] == square[z]){
                return square[x]
            }
        }
        return null
    }

    useEffect(()=>{
        if(!getWinner(square) && square.every(item => item != '')){
            setStatus(`The game didn't end and it was a draw.`)
        }else if(getWinner(square)){
            setStatus(`Winner is ${getWinner(square)}. Please Restart the game.`)
        }else{
            setStatus(`Next turn is ${isXturn ? 'X' : '0'}`)
        }
    }, [isXturn, status])

    const handleRestart = () => {
        setisXturn(true)
        setSquare(Array(9).fill(''))
    }

    return(
        <div className="TicTacToe-Container">
            <button onClick={handleRestart}>Restart</button>
            <h1>{status}</h1>
            <div className="row">
                <Square value={square[0]} onClick={()=>handleClick(0)} />
                <Square value={square[1]} onClick={()=>handleClick(1)}/>
                <Square value={square[2]} onClick={()=>handleClick(2)}/>
            </div>
            <div className="row">
                <Square value={square[3]} onClick={()=>handleClick(3)}/>
                <Square value={square[4]} onClick={()=>handleClick(4)}/>
                <Square value={square[5]} onClick={()=>handleClick(5)}/>
            </div>
            <div className="row">
                <Square value={square[6]} onClick={()=>handleClick(6)}/>
                <Square value={square[7]} onClick={()=>handleClick(7)}/>
                <Square value={square[8]} onClick={()=>handleClick(8)}/>
            </div>
            
        </div>
    )
}

export default Tictactoe;
