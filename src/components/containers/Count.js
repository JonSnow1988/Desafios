import React from 'react'

const Count = ({min, max, onAdd, count}) => {
    return (
        <>
        <div style={{ diplay: "flex", alignItems: "center"}}>
           
           <button onClick={min}> - </button>
           <p>{count}</p>
           <button onClick={max}> + </button>    
        </div>
        <button disabled={count === 1} onClick={onAdd}>
            {" "}
            Agregar {count}{" "}
             </button>
        </>     
    )
}

export default Count
