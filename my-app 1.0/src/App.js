import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import NavBar from "./components/NavBar";

export default function App() {

  const [toDoes, setToDoes] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <div style={{margin: '0vw 2vw 0vw 2vw'}}>
      <h1 style={{ color: 'white', textAlign: 'center', opacity: '0.9', fontSize: '25px' }}>TASK MANAGEMENT PLATFORM</h1>
      <NavBar toDoes={toDoes} doing={doing} done={done}
      onAdd={(name, text, status)=>{
        setToDoes([
          ...toDoes,
          {
            id: Math.random(),
            name: name,
            text: text,
            status: status
          }
        ])
      }}
      onAdd1={(name, text, status)=>{
        setDoing([
          ...doing,
        {
          id: Math.random(),
          name: name,
          text: text,
          status: status
        }
        ])
      }}
      onAdd2={(name, text, status)=>{
        setDone([
          ...done,
        {
          id: Math.random(),
          name: name,
          text: text,
          status: status
        }
        ])
      }}

      onDelete={(todo)=>{
        setToDoes(toDoes.filter((i)=>i.id !== todo.id))
      }}
      onDelete1={(inprogress)=>{
        setDoing(doing.filter((i)=>i.id !== inprogress.id))
      }}
      onDelete2={(finish)=>{
        setDone(done.filter((i)=>i.id !== finish.id))
      }}
      
      />
    </div>
  );
}


