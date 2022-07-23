import Button from './components/button';
import React, { useState } from 'react';

function App() {
        const [counter, setCounter] = useState(0);

        const incrementCounter = () => {(setCounter(counter+1))};        
               
        return (
        <div className='layout'>
                <h1>{counter}</h1>
                <Button onClick={incrementCounter}>
                +
                </Button>
        </div>
        );
        };
        

export default App;