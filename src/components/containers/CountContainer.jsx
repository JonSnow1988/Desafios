import React from 'react'
import Count from './Count'



const CountContainer = ({ initial, stock }) => {

     const [count, setCount] = React.useState(initial);


    const add = () => {
        if (count > stock) {
            alert ('superaste el stock');
        }else {
            setCount(count + 1);
        }
    };

    const sub = () => {
      if (count > 0)  setCount (count - 1);
      else alert('tenes que agregar al menos un item')
    };

    const onAdd = () => {
        alert(`Agregaste ${count} al carrito`);
    };



    return (
        <div>
            <Count min= {sub} max={add} onAdd={onAdd} count={count} />     
        </div>
    )
}

export default CountContainer
