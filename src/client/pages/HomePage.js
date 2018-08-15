import React from 'react';

const Home = () => {
    return (
    <div>
        <h2>I'm the, well very BEST home component</h2>
        <button onClick={ console.log('Hi There!') }>Click Me!</button>
    </div>
    );
};

export default {
   component: Home
};