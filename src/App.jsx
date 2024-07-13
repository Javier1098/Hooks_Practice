import { useEffect, useState } from 'react'
import './App.css'
import { UseReducer } from './Compnentes/UseReducer';

function App() {
  const [count, setCount] = useState(0)

//useEffect se  ejecuta despues de cada renderizado//

    useEffect(() =>{
      //Actualiza le titulo del documento con el count (pestaña de la pagina)
      document.title = `count is ${count}`;
    }, [count]);

  return (
    <>
      <h1>Hooks Practice</h1>
      <div className="card">
        <hr />
        <h2>Exercise Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
      </div>
      <UseReducer count ={count} setCount ={setCount}/>
    </>
  )
}

export default App
