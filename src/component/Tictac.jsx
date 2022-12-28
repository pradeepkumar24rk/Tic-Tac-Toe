import React,{ useState } from 'react'
import './Tictac.css'
import styled from 'styled-components';
const Container=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
/* width: 1350px; */
align-items: center;
margin-top: 50px;

`
const Td=styled.td`
border: 1px solid rgb(235, 223, 223);
    box-shadow: 10px 10px 20px grey;
    // background-color: red;
    width: 100px;
    height: 100px;
    font-size: 40px;

`
const Tictac = () => {
    const [turn,setTurn]=useState('x');
    const[cells,setCells]=useState(Array(9).fill(''));
    const [winner,setWinner]=useState();
    const [background, setBackground] = useState("#fdfdfd");

    const handleClick=(num)=>{
        // alert(num);
        let square=[...cells];
        if(cells[num]!=='')
        {
            return;
            // alert("already")
        }

        if(turn==='x')
        {
            square[num]='x';
            setBackground(background);
            setTurn('o');
        }
        else{
            square[num]='o';
            setTurn('x');
        }
        checkforWinner(square);
        setCells(square);
    }

    const checkforWinner=(square)=>{
        let combos={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagnol:[
                [0,4,8],
                [2,4,6],
            ],
        };

        for(let combo in combos){
            combos[combo].forEach((pattern)=>{
                if(square[pattern[0]]===''||
                square[pattern[1]]===''||
                square[pattern[2]]===''){
                    //do nothing
                }
                else if(square[pattern[0]]===square[pattern[1]]&&
                    square[pattern[1]]===square[pattern[2]]
                    ){
                        setWinner(square[pattern[0]]);
                    }
            });
        }
    }
    
    const handleRestart=()=>
    {
        setCells(Array(9).fill(''));
        setWinner(null);
    }




    const   Cell=({num})=>{
        return <Td onClick={()=>handleClick(num)}>{cells[num]}</Td>
    }
  return (
    <Container>
        
        <table>
        <h3>Turn: <span>{turn}</span></h3>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        <div className='winning'>
        {winner && (
            <>
            <p>{winner} is the winner!</p>
            <button onClick={()=>handleRestart()}>Play again</button>
            </>
        )}
        </div>
        
    </Container>
  )
}

export default Tictac