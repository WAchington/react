import { useState } from 'react';
import { sculptureList } from './data.js';


export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  function handlenonClick(){
    setIndex(index-1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}> Next</button> <button onClick={handlenonClick}>back</button>
      
      <h2>
        <i>{sculpture.userId} </i> 
        by {sculpture.id}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <p>
        {sculpture.title}
      </p>
      <p>
      {sculpture.body}
      </p>
      
      <div id="preloader" class="visible"></div>
    </>
  );
}
