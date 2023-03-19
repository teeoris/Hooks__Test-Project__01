import {useState} from 'react'
import { data } from './data';
import './app.css';

function App() {
const [footballers, setFootballers] = useState(data);

const removeFootballer = (id)=> {
  const newFootballer = footballers.filter((footballer)=> footballer.id !== id);
  setFootballers(newFootballer);
};

const clearAll = ()=> {
  setFootballers([])
};

  return (
    <div className='footballer'>
      <div className='footballer__title'>
        <h1>Man Utd Players</h1>
        <span></span>
      </div>
      {footballers.map((footballer)=> {
        const {id, name, position} = footballer;
        return (
          <section key={id} className='footballer__container' >
            <div className='footballer__info'>
              <h2>{name}</h2>
              <p>{position}</p>
              <button className='btn' type='button' onClick={()=> removeFootballer(id)}>Remove</button>
              <hr />
            </div>
          </section>
        )
      })}
      <button className='btn' type='button' onClick={clearAll}>Clear all</button>
    </div>
  );
}

export default App;
