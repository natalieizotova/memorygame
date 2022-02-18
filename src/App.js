import './App.css';
import {nanoid} from "nanoid";
import {useEffect, useState} from "react";
import Board from "./Board";
import Button from '@mui/material/Button'


function App() {
    const picture = ['🐠' , '🎪', '🎃', '🛴', '🌹', '🍒']

   const startGame = () => {

       let initialState = []
       for (let i = 0; i < 12; i++) {
           initialState[i] = {
               id: nanoid(),
               value: null,
               isOpen: false
           }
       }


       for (let j = 0; j < picture.length; j++) {
           for (let l = 0; l < 2; l++) {
               let i
               do {
                   i = Math.floor(Math.random() * 12)

               } while (initialState[i].value !== null)
               initialState[i].value = picture[j]
           }
       }
       setField(initialState)
   }
   useEffect(()=>startGame(), [])
    const [field, setField] = useState([])
    const openCard = (id, value) => {
        const newField = field.map(el => el.id === id ? {...el, isOpen: true} : el)
        setField(newField);
        setHistory([...history, value])
    }
    const [history, setHistory] = useState([])

    const checkMove = () => {
        if (history.length % 2 === 0) {
            if (history[history.length - 1] !== history[history.length - 2]) {
                const newField = field.map(el => el.value === history[history.length - 1] ||
                el.value === history[history.length - 2] ? {...el, isOpen: false} : el)
                setField(newField)
            }
        }

    }

    useEffect(()=>{setTimeout(()=>checkMove(), 700)}, [history])

    const finishGame = () => {
        if (field.filter(el=>el.isOpen === true).length===12){
            setMovesAmount(history.length/2)
        }

    }
    useEffect(()=> {setTimeout(()=> finishGame(), 1500)}, [history])
    const [movesAmount, setMovesAmount] = useState(null)

    const restart =()=>{
        setMovesAmount(null)
        startGame()
        setHistory([])

    }

    return (
        <div>
            <h1>Memory game</h1>
            <Board field={field} openCard={openCard}/>

            {movesAmount && <div className='gameOver'>
                <h3>{`Congratulations you win in ${movesAmount} moves!`}</h3>
                <Button variant="contained" onClick={restart}>Restart</Button>
            </div>}
        </div>
    );
}

export default App;
