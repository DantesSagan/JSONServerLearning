import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';

export default function JSONPutPatchDeleteRQ() {
  const Component = () => {
    const codeString = `
// from this 
[
 {
    "id": 12,
    "rating:": 3,
    "comment": "Product 12",
    "category": "electronics",
    "price": 4000
 }
]
// to this
[
 {
    "id": 12,
    "rating:": 3,
    "comment": "Product 12",
    "category": "furniture",
    "price": 4000
 }
]
  `;
    const codeStringTwo = `
// from 4000
[
 {
    "id": 12,
    "rating:": 3,
    "comment": "Product 12",
    "category": "furniture",
    "price": 4000
 }
]
 // to 8000
[
 {
    "id": 12,
    "rating:": 3,
    "comment": "Product 12",
    "category": "furniture",
    "price": 8000
 }
]
  `;
    return (
      <div>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          First of all open Extensions <strong>Thunder Client</strong> and
          changing PUT request <br />
          in a left corner choose method PUT <br />
          and in json Content change category field <br />
          from "electronics" to "furniture" <br />
          and type in address bar
          <br />
          then open extenstion Thunder Client and type in address bar this:{' '}
          <br />
          <a href='http://localhost:4000/products/12' className='address'>
            http://localhost:4000/products/12
          </a>
          <div className='text-left text-xl'>
            "<br />A PUT request creates a resource or updates an existing
            resource. <br />
            The client specifies the URI for the resource. <br />
            The request body contains a complete representation of the resource.{' '}
            <br />
            If a resource with this URI already exists, it is replaced. <br />
            Otherwise, a new resource is created, if the server supports doing
            so. <br />"
          </div>
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow'>
          <br />
          And in the left corner choose PATCH request in a left corner <br />
          and then delete code what you want <br />
          in this case delete all except = "price" <br />
          and change cost from 4000 to 8000 <br />
          in Json Content field
          <br /> Making PATCH request what change
          <strong> price partial </strong> <br />
          And you will see what will be updated by
          <br /> Thunder Client Sending request
          <div className='text-left text-xl'>
            " <br />
            In computing, the PATCH method is a request method supported by the
            Hypertext Transfer Protocol (HTTP) protocol for making partial
            changes to an existing resource. <br />
            The PATCH method provides an entity containing a list of changes to
            be applied to the resource requested using the HTTP Uniform Resource
            Identifier (URI).
            <br />"
            <br />
          </div>
        </div>
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeStringTwo}
        </SyntaxHighlighter>
        <div className='text-center text-2xl rounded-lg p-8 border-4 border-red-700 bg-black blueShadow mb-24'>
          <br />
          And in the left corner choose Delete request <br />
          and then delete code what you want <br />
          in Json Content field
          <br /> Making DELETE request what change
          <strong> DELETE all code by sending request </strong> <br />
          And you will see what will be updated by
          <br /> Thunder Client
          <div className='text-left text-xl'>
            " <br />
            The HTTP DELETE method is used to delete a resource from the server.{' '}
            <br />
            Unlike GET and HEAD requests, the DELETE requests may change the
            server state. <br /> Sending a message body on a DELETE request
            might cause some servers to reject the request. <br />
            But you still can send data to the server using URL parameters.{' '}
            <br />"
            <br />
          </div>
        </div>
      </div>
    );
  };
  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div className='text-white'>
      <h2 className='text-center text-4xl p-4'>JsonPutPatchDeleteRQ</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-left text-3xl p-4'>
        This is example code to explain and show how to work
        JsonPutPatchDeleteRQ data <br />
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
