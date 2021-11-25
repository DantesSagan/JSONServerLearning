import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONSorting() {
  const Component = () => {
    const codeString = `
[
 {
    id: 4,
    rating:: 4,
    comment: "Product 4",
    category: "games",
    price: 1500,
    productID: 1
 },
 {
    id: 3,
    rating:: 4,
    comment: "Product 3",
    category: "books",
    price: 2000,
    productID: 1
 },
 {
    id: 2,
    rating:: 4,
    comment: "Product 2",
    category: "electronics",
    price: 3000,
    productID: 1
 },
 {
    id: 1,
    rating:: 3,
    comment: "Product 1",
    category: "electronics",
    price: 4000,
    productID: 1
 },
{
    id: 5,
    rating:: 5,
    comment: "Product 5",
    category: "games",
    price: 4000,
    productID: 2
},
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
    const codeStringTwo = `
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
 },
 {
    id: 1,
    rating:: 3,
    comment: "Product 1",
    category: "electronics",
    price: 4000,
    productID: 1
 },
 {
    id: 5,
    rating:: 5,
    comment: "Product 5",
    category: "games",
    price: 4000,
    productID: 2
 },
 {
    id: 2,
    rating:: 4,
    comment: "Product 2",
    category: "electronics",
    price: 3000,
    productID: 1
 },
 {
    id: 3,
    rating:: 4,
    comment: "Product 3",
    category: "books",
    price: 2000,
    productID: 1
 },
 {
    id: 4,
    rating:: 4,
    comment: "Product 4",
    category: "games",
    price: 1500,
    productID: 1
 }
]
  `;
    const codeThree = `
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
  },
  {
    id: 1,
    rating:: 3,
    comment: "Product 1",
    category: "electronics",
    price: 4000,
    productID: 1
  },
  {
    id: 5,
    rating:: 5,
    comment: "Product 5",
    category: "games",
    price: 4000,
    productID: 2
  },
  {
    id: 2,
    rating:: 4,
    comment: "Product 2",
    category: "electronics",
    price: 3000,
    productID: 1
  },
  {
    id: 3,
    rating:: 4,
    comment: "Product 3",
    category: "books",
    price: 2000,
    productID: 1
  },
  {
    id: 4,
    rating:: 4,
    comment: "Product 4",
    category: "games",
    price: 1500,
    productID: 1
  }
]
`;
    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and Sorting by their{' '}
          <strong> ascending</strong> price you need to type this in address
          bar:
          <br />
          <a
            href='http://localhost:4000/products?_sort=price'
            className='address'
          >
            http://localhost:4000/products?_sort=price
          </a>
          <br />
          And you will see this Sorting ascending prices
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and Sorting by their
          <strong> descending </strong> price need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?_sort=price&_order=desc'
            className='hover:underline'
          >
            http://localhost:4000/products?_sort=price&_order=desc
          </a>
          <br />
          And you will see this Sorting by descdending prices
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringTwo}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and Sorting by their
          <strong> descending </strong> price need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?_sort=price,category&_order=desc,asc'
            className='hover:underline'
          >
            http://localhost:4000/products?_sort=price,category&_order=desc,asc
          </a>
          <br />
          And you will see this Sorting price and category, then order by <br />
          descending and ascending at the same price what their cost!
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeThree}
        </SyntaxHighlighter>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonSorting</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonSorting data{' '}
        <br />
        amd making GET request with little complex address changing what will be{' '}
        <br />
        sorting by ascending and descending prices!
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
