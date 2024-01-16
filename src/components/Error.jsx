import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const{status, statusText, data} = error
    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col gap-3 text-gray-300'>
            <h1 className='font-bold text-4xl'>Oops something went wrong</h1>
            <h2 className='font-semibold'>{status+ ": "+ statusText} </h2>
            <p>{data}</p>
            <Link to="/" className='text-sky-900'>Back to home page</Link>
        </div>
    );
};

export default Error
