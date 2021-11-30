import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONConfigurations() {
  const Component = () => {
    const codeString = `
 "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "serve-json": "json-server --watch db.json"
  }
  `;
    const codeStringTwo = `
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject",
    "serve-json": "json-server --watch db.json --port 4000"
  },
  `;
    const codeStringThree = `
// routes.json in main folder of project
{
  "api/v1/*": "/$1"
}

  `;
    const codeStringFour = `
// routes.json in main folder of project
{
  "api/v1/*": "/$1",
  "/products/:category": "/products?category=:category"
}
// what will be looks like this in address bar of you browser: http://localhost:4000/products/category
`;
    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          First of all open package.json and find string: <br />
          <strong>"scripts"</strong> <br />
          and in this object you can create string: <br />
          <strong>"serve-json": "json-server --watch db.json"</strong> <br />
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          And additional added to this string endpoint like this: <br />
          <strong>
            "serve-json": "json-server --watch db.json --port 4000"
          </strong>
          <br />
          Server will be launch from this port what was written.
          <p className='text-left text-xl mt-4'>
            This is might be needed for using multiple ports if you use <br />
            port:3000 or 4000 you can write port what are you needed, whatever.{' '}
            <br />
            For more flexibility and working with multiple ports at the same
            time.
          </p>
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringTwo}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          For another example of flexibility of json server. <br />
          We can create additional <strong>routes.json</strong> what will work
          like <br />
          <strong>Other routes</strong> <br />
          to achieve routes path to json servers routes <br />
          And now, route path will be, for another way, looks like this:
          <br />
          <strong>http://localhost:4000/api/v1/products</strong> <br />
          What needed for multiple routes in you project.
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringThree}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          If you want to get <br />
          <strong>
            "/products?category=:category" like electronics category
          </strong>{' '}
          <br />
          We can create additional simple way{' '}
          <strong>"/products/:category"</strong> what will work like <br />
          <strong>
            {' '}
            "/products/:category": "/products?category=:category"
          </strong>{' '}
          <br />
          In this full route way: <br />
          <strong>http://localhost:4000/products/electronics</strong> <br />
          to see category of electronics.
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringFour}
        </SyntaxHighlighter>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonConfigurations</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work JsonConfigurations
        data <br />
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
