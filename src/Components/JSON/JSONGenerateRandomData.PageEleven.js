import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONGenerateRandomData() {
  const Component = () => {
    const codeString = `
module.exports = () => {
  const data = {
    products: [],
  };
  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i,
      title: 'products$/{i}',
    });
  }
  return data;
};

  `;
    const codeStringTwo = `
    
 "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "serve-json": "json-server --watch data.js --port 4000 --routes routes.json"
  },
  // instead of
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "serve-json": "json-server --watch db.json --port 4000 --routes routes.json"
  },
  `;
    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          If you wanted to Generate Random data in json server. <br />
          You need to create another file called <br />
          <strong>data.js or smth like this.</strong>
          <br />
          And create simple for loop module
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          what will be added to
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringTwo}
        </SyntaxHighlighter>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonGenerateRandomData</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work
        JsonGenerateRandomData data <br />
        amd making Put, Post, Delete request with simple address changing what
        will be <br />
        PutPostDeleteRQ
        <br />
        <br />
        Thits is example how work Request in JSON static server!
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-blue-500 
          hover:bg-blue-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <Component />
    </div>
  );
}
