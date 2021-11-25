import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONPagination() {
  const Component = () => {
    const codeString = `
[
    {
        id: 1,
        rating:: 3,
        comment: "Product 1",
        category: "electronics",
        price: 4000,
        productID: 1
    },
    {
       id: 2,
       rating:: 4,
       comment: "Product 2",
       category: "electronics",
       price: 3000,
       productID: 1
    }
]
  `;
    const codeStringTwo = `
[
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
    }
]
  `;
    const codeThree = `
To navigate to this link you need follow this simple path:
View page source =>
select =>
http://localhost:4000/products?_page=1&_limit=2
=>
Network
=>
products?_page=2&_limit=2
=>
Headers
=>
Link:
 <http://localhost:4000/products?_page=1&_limit=2>; 
rel="first",
 <http://localhost:4000/products?_page=2&_limit=2>;
rel="next",
 <http://localhost:4000/products?_page=3&_limit=2>; 
rel="last"
`;
    const codeFour = `
And if we navigate to 2nd page we will see this:
Link:
 <http://localhost:4000/products?_page=1&_limit=2>; 
rel="first",
 <http://localhost:4000/products?_page=1&_limit=2>; 
rel="prev",
 <http://localhost:4000/products?_page=3&_limit=2>; 
rel="next",
 <http://localhost:4000/products?_page=3&_limit=2>; 
rel="last"
`;
    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and Pagination by their{' '}
          <strong> pages</strong>and what data you want to see in this page.{' '}
          <br />
          And then you need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?_page=1&_limit=2'
            className='address'
          >
            http://localhost:4000/products?_page=1&_limit=2
          </a>
          <br />
          And you will see this Pagination by 2 id items on a ONE page
          <br /> and then on second page you will see id=3 and id=4
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and Pagination by their
          <strong> second page and etc</strong> need to type this in address
          bar:
          <br />
          <a
            href='http://localhost:4000/products?_page=2&_limit=2'
            className='hover:underline'
          >
            http://localhost:4000/products?_page=2&_limit=2
          </a>
          <br />
          And you will see this Pagination by on a second page
          <br /> and other pages what you are type in a address bar
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringTwo}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 shadow-inner bg-black'>
          If you want to see db.json and Pagination by their URL LINK from 1st
          page to 2n page you need to type this in address bar:
          <br />
          <a
            href='http://localhost:4000/products?_page=1&_limit=2'
            className='hover:underline'
          >
            http://localhost:4000/products?_page=2&_limit=2
          </a>
          <SyntaxHighlighter language='javascript' style={dark}>
            {codeThree}
          </SyntaxHighlighter>
          and then <br />
          <a
            href='http://localhost:4000/products?_page=2&_limit=2'
            className='hover:underline'
          >
            http://localhost:4000/products?_page=2&_limit=2
          </a>
          <SyntaxHighlighter language='javascript' style={dark}>
            {codeFour}
          </SyntaxHighlighter>
          <br />
          And you will see this Pagination under response Headers in the link{' '}
          <br />
          key you can see the URL on a 1st page, next page, last page; <br />
          and if we navigate to <strong>Second</strong> link we will see the
          link the 1st page prev page, next page and the last page <br />
          This is similar what GitHub API does for pagination when you get
          request you get access to this link using{' '}
          <code>response.headers.get</code>
          <br /> and then you may use the links for pagination (ofc you can
          build URL ourselves as a FrontEnd developer which easier for you)
        </div>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonPagination</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonPagination data{' '}
        <br />
        amd making GET request with little complex address changing what will be{' '}
        <br />
        Pagination
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
