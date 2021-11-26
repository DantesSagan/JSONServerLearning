import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONOperators() {
  const Component = () => {
    const codeString = `
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
      "id": 3,
      "rating:": 4,
      "comment": "Product 3",
      "category": "books",
      "price": 2000,
      "productID": 1
    },
    {
      "id": 5,
      "rating:": 5,
      "comment": "Product 5",
      "category": "games",
      "price": 4000,
      "productID": 2
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
      "id": 6,
      "rating:": 6,
      "comment": "Product 6",
      "category": "electronics",
      "price": 2000,
      "productID": 2
    }
  ],
  `;
    const codeStringTwo = `
[
    {
      "id": 2,
      "rating:": 4,
      "comment": "Product 2",
      "category": "electronics",
      "price": 3000,
      "productID": 1
    },
    {
      "id": 3,
      "rating:": 4,
      "comment": "Product 3",
      "category": "books",
      "price": 2000,
      "productID": 1
    },
    {
      "id": 4,
      "rating:": 4,
      "comment": "Product 4",
      "category": "games",
      "price": 1500,
      "productID": 1
    },
    {
      "id": 5,
      "rating:": 5,
      "comment": "Product 5",
      "category": "games",
      "price": 4000,
      "productID": 2
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
      "id": 6,
      "rating:": 6,
      "comment": "Product 6",
      "category": "electronics",
      "price": 2000,
      "productID": 2
    }
  ],
  `;
    const codeThree = `
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
      "id": 6,
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
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black blueShadow'>
          If you want to see db.json and Operators by their{' '}
          <strong> price</strong> what greater or equal to 2000, <br />
          less then or equal to 4000 <br />
          and what data you want to see in this page. <br />
          And then you need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?price_gte=2000&price_lte=4000'
            className='address'
          >
            http://localhost:4000/products?price_gte=2000&price_lte=4000
          </a>
          <br />
          And you will see this Operators by range of 2000-4000 their price
          <br /> and then on second page you will see id=3 and id=4
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black blueShadow'>
          If you want to see db.json and Operators by their
          <strong> id</strong> you need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?id_ne=1'
            className='hover:underline'
          >
            http://localhost:4000/products?id_ne=1
          </a>
          <br />
          And you will see this Operators what not equal to 1 <br />
          (this means all id will displayed except 1)
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringTwo}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black blueShadow'>
          If you want to see db.json and Operators filtering all products what
          will be equal to beginning of thier word for example to = e,
          <br /> you need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?category_like=^e'
            className='hover:underline'
          >
            http://localhost:4000/products?category_like=^e
          </a>
          <br />
          And will be output all words what starts from letter = e (electronics)
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
      <h2 className='text-center text-4xl p-4'>JsonOperators</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonOperators data{' '}
        <br />
        amd making GET request with little complex address changing what will be{' '}
        <br />
        Operators
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
