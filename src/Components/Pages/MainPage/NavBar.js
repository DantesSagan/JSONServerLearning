import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes/routes';
import React from 'react';

export default function NavBar() {
  return (
    <header>
      <nav className='grid grid-cols-3 shadow-inner p-2 m-2 rounded-t-2xl gridCol border-double border-gray text-center'>
        <div
          id='navOne'
          className='col-span-4 button'
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          <div>
            <Link to={ROUTES.Main}>Home</Link>
          </div>
        </div>

        <div className='p-2 rounded-lg'>
          <div className='button bg-black text-white'>
            <Link to={ROUTES.JSON}>JSON</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
