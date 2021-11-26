import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONPostRequest() {
  const Component = () => {
    const codeString = `
[
 {
    "id": 11,
    "rating:": 3,
    "comment": "Product 11",
    "category": "electronics",
    "price": 4000
 },
 {
    "id": 12,
    "rating:": 3,
    "comment": "Product 12",
    "category": "electronics",
    "price": 4000
 }
]
  `;
    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          First of all open Extensions and type <strong>Thunder Client</strong>{' '}
          in address bar
          <br />
          then open extenstion Thunder Client and type in address bar this:{' '}
          <br />
          <a href='http://localhost:4000/products' className='address'>
            http://localhost:4000/products
          </a>
          <br />
          And in the left corner choose POST request and then add code what you
          want to add in <br />
          Json Content field
          <br /> Making PostRequest what creates additional
          <strong> Id </strong> <br />
          And you will see this additional PostRequest what will be created by
          <br /> Thunder Client
          <br />
          can easely added to with it part of the API with id 11 and 12
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonPostRequest</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonPostRequest
        data <br />
        amd making GET request with little complex address changing what will be{' '}
        <br />
        PostRequest
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
