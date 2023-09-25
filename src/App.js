import { useEffect, useState } from 'react';
import NevBar from './Component/NevBar';
import Amazon from './Component/amazon';
import Cart from './Component/Cart';

function App() {

  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item,d) =>{
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }


  return (
    <div>
      <NevBar setShow={setShow} />
      {
        show ? <Amazon handleClick={handleClick}/> : <Cart setCart={setCart} handleChange={handleChange} cart={cart} />
      }
    </div>
  );
}

export default App;
