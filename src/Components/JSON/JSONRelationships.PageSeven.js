import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONRelationships() {
  const Component = () => {
    const codeString = `
[
  {
    id: 1,
    rating:: 3,
    comment: "Product 1",
    category: "electronics",
    price: 4000,
    review: [
  {
    id: 1,
    rating:: 3,
    comment: "Review 1 for product id 1",
    productId: 1
  },
  {
    id: 2,
    rating:: 4,
    comment: "Review 1 for product id 2",
    productId: 1
  },
  {
    id: 3,
    rating:: 4,
    comment: "Review 1 for product id 3",
    productId: 1
  },
  {
    id: 4,
    rating:: 4,
    comment: "Review 1 for product id 4",
    productId: 1
  }
]
  },
  {
    id: 2,
    rating:: 4,
    comment: "Product 2",
    category: "electronics",
    price: 3000,
    review: [
  {
    id: 5,
    rating:: 5,
    comment: "Review 1 for product id 5",
    productId: 2
  }
]
  },
  {
    id: 3,
    rating:: 4,
    comment: "Product 3",
    category: "books",
    price: 2000,
    review: [
  {
    id: 6,
    rating:: 5,
    comment: "Review 1 for product id 6",
    productId: 3
  }
]
  },
  {
    id: 4,
    rating:: 4,
    comment: "Product 4",
    category: "games",
    price: 1500,
    review: [ ]
  },
  {
    id: 5,
    rating:: 5,
    comment: "Product 5",
    category: "games",
    price: 4000,
    review: [ ]
  },
  {
    id: 6,
    rating:: 5,
    comment: "Product 6",
    category: "electronics",
    price: 5000,
    discount: {
    type: "shipping"
  },
    review: [ ]
  },
  {
    id: 7,
    rating:: 6,
    comment: "Product 6",
    category: "electronics",
    price: 2000,
    review: [ ]
 }
]
  `;
    const codeTwo = `
{
    id: 1,
    rating:: 3,
    comment: "Product 1",
    category: "electronics",
    price: 4000,
    review: [
  {
    id: 1,
    rating:: 3,
    comment: "Review 1 for product id 1",
    productId: 1
  },
  {
    id: 2,
    rating:: 4,
    comment: "Review 1 for product id 2",
    productId: 1
  },
  {
    id: 3,
    rating:: 4,
    comment: "Review 1 for product id 3",
    productId: 1
  },
  {
    id: 4,
    rating:: 4,
    comment: "Review 1 for product id 4",
    productId: 1
  }
 ]
}
`;

    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          If you want to see db.json and Relationships by their{' '}
          <strong> productId </strong> what equal like in this <br />
          productId = id <br />
          where data merged by id's. <br />
          And then you need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?_embed=review'
            className='address'
          >
            http://localhost:4000/products?q=in
          </a>
          <br />
          And you will see this Relationships between product and child review{' '}
          <br />
          can easely be served as part of the API
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black blueShadow'>
          If you want to see db.json and Relationships by their
          <strong> productsId </strong> and with pagination you need to type
          this in address bar:
          <br />
          <a
            href='http://localhost:4000/products/1?_embed=review'
            className='hover:underline'
          >
            http://localhost:4000/products/1?_embed=review
          </a>
          <br />
          And you will see this Relationships with pagination by pages
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
      <h2 className='text-center text-4xl p-4'>JsonRelationships</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonRelationships
        data <br />
        amd making GET request with little complex address changing what will be{' '}
        <br />
        Relationships
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
