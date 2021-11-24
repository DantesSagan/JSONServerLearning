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
      "productID": 1
    },
    {
      "id": 2,
      "rating:": 4,
      "comment": "Product 2",
      "productID": 1
    },
    {
      "id": 3,
      "rating:": 4,
      "comment": "Product 3",
      "productID": 1
    },
    {
      "id": 4,
      "rating:": 4,
      "comment": "Product 4",
      "productID": 1
    },
    {
      "id": 5,
      "rating:": 5,
      "comment": "Product 5",
      "productID": 2
    },
    {
      "id": 6,
      "rating:": 5,
      "comment": "Product 6",
      "productID": 3
    }


  `;
    const codeStringTwo = `
    "review": [
    {
      "id": 1,
      "rating:": 3,
      "comment": "Review 1 for product 1",
      "productID": 1
    },
    {
      "id": 2,
      "rating:": 4,
      "comment": "Review 1 for product 2",
      "productID": 1
    },
    {
      "id": 3,
      "rating:": 4,
      "comment": "Review 1 for product 3",
      "productID": 1
    },
    {
      "id": 4,
      "rating:": 4,
      "comment": "Review 1 for product 4",
      "productID": 1
    },
    {
      "id": 5,
      "rating:": 5,
      "comment": "Review 1 for product 5",
      "productID": 2
    },
    {
      "id": 6,
      "rating:": 5,
      "comment": "Review 1 for product 6",
      "productID": 3
    }
  ]
  `;

    const codeStringThree = `
  {
      "id": 1,
      "rating:": 3,
      "comment": "Review 1 for product 1",
      "productID": 1
    },
  `;
    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json list of types products type in address bar:
          <br />
          <a href='http://localhost:4000/products' className='hover:underline'>
            http://localhost:4000/products
          </a>
          <br />
          And you will see this json products
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json list of types review type in address bar:
          <br />
          <a href='http://localhost:4000/review' className='hover:underline'>
            http://localhost:4000/review
          </a>
          <br />
          And you will see this json review
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringTwo}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json list of types review and especially id
          number 1 type in address bar:
          <br />
          <a href='http://localhost:4000/review/1' className='hover:underline'>
            http://localhost:4000/review/1
          </a>
          <br />
          And you will see this json review
          <br />
          This is so simple without any string of code!
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringThree}
        </SyntaxHighlighter>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonGetRequest</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonGetRequest{' '}
        <br />
        <br />
        Thits is example how work Request in JSON static server!
        <div>
          You need to create Serve-json: <br />
          1) npm install json-server;
          <br />
          2) Create name.json and add to this json some data in package.json
          like this: <br />
          "scripts": {`"serve-json": "json-server --watch db.json --port 4000"`}
          ,
          <br />
          3) Type in a terminal: npm run serve-json <br />
          ('http://localhost:4000/review || http://localhost:4000/products'). 2)
          ; <br />
          4) npm run serve-json on port 4000 or whatever
        </div>
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
