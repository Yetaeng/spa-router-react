import React from 'react';
import useRouter from '../router/router';

const Main = () => {
  const push = useRouter();
  return (
    <>
      <h1>Main</h1>
      <button onClick={() => push('/about')}>go to about</button>
    </>
  )
}

export default Main;