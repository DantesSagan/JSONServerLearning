import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONFullTextSearch() {
  const Component = () => {
    const codeString = `
[
  {
    id: 6,
    rating:: 5,
    comment: "Product 6",
    category: "electronics",
    price: 5000,
    productID: 3,
    discount: {
     type: "shipping"
   }
  }
]
  `;
    const codeTwo = `
[
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
      "productID": 3,
      "discount": {
        "type": "shipping"
      }
    },
    {
      "id": 7,
      "rating:": 6,
      "comment": "Product 6",
      "category": "electronics",
      "price": 2000,
      "productID": 2
    }
 ]
`;

    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          If you want to see db.json and FullTextSearch by their{' '}
          <strong> letters or words</strong> what equal like in this example =
          "in" and what data (words) you want to see in this page. <br />
          And then you need to type this in address bar:
          <br />
          <a href='http://localhost:4000/products?q=in' className='address'>
            http://localhost:4000/products?q=in
          </a>
          <br />
          And you will see this FullTextSearch
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black blueShadow'>
          If you want to see db.json and FullTextSearch by their
          <strong> electronics </strong>word you need to type this in address
          bar:
          <br />
          <a
            href='http://localhost:4000/products?q=electronics'
            className='hover:underline'
          >
            http://localhost:4000/products?q=electronics
          </a>
          <br />
          And you will see this FullTextSearch what need you to searching in
          db.json
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeTwo}
        </SyntaxHighlighter>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonFullTextSearch</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonFullTextSearch
        data <br />
        amd making GET request with little complex address changing what will be{' '}
        <br />
        FullTextSearch
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
