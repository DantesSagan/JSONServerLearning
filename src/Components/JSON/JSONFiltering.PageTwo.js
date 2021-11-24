import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONGetRequest() {
  const Component = () => {
    const codeString = `
"products": [
    {
      "id": 1,
      "rating:": 3,
      "comment": "Product 1",
      "category": "electronics",
      "price": 4000,
      "productID": 1
    },
    {
      "id": 2,
      "rating:": 4,
      "comment": "Product 2",
      "category": "electronics",
      "price": 3000,
      "productID": 1
    },
    {
      "id": 6,
      "rating:": 5,
      "comment": "Product 6",
      "category": "electronics",
      "price": 5000,
      "productID": 3
    }
  ]
  `;
    const codeStringTwo = `
[
    {
      "id": 6,
      "rating:": 5,
      "comment": "Product 6",
      "category": "electronics",
      "price": 5000,
      "productID": 3,
      "discount": {
        "type": "shipping"
      }
    }
]
  `;

    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and filtering by category, electronic you
          need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?category=electronics'
            className='address'
          >
            http://localhost:4000/products?category=electronics
          </a>
          <br />
          And you will see this filtering products, electronics
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and filtering by category, electronic you
          need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?category=electronics&discount.type=shipping'
            className='hover:underline'
          >
            http://localhost:4000/products?category=electronics&discount.type=shipping
          </a>
          <br />
          And you will see this filtering products by electronics with nested
          discount where we found type what equal shipping
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
      <h2 className='text-center text-4xl p-4'>JsonFiltering</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonFiltering data
        amd making GET request <br />
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
