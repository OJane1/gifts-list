import { data } from './data';
import './App.css';
import { useState } from 'react';

function App() {

const [gifts, setGifts] = useState(data);

const removeGift = (id) => {
  let newGifts = gifts.filter(gift => gift.id !== id);
  setGifts(newGifts);
}

  return (
    <div>
    <div className="container">
      <h1>List of {gifts.length} gifts</h1>
    </div>
    <div className='container'>
    {gifts.map((element => {
      const { id, gift, image } = element;

      return(
        <div>
          <div className='container'>
            <h2>{id} - {gift}</h2>
          </div>
          <div className='container'>
            <img src={image} width="300px" />
          </div>
          <div className='container'>
            <button onClick={()=> removeGift(id)} className='btn'>Remove</button>
          </div>
        </div>
      )
    }))}
    <div className='container'>
      <button onClick={() => setGifts([])} className='btn'>DELETE ALL</button>
    </div>
    </div>
    </div>
  );
}

export default App;
