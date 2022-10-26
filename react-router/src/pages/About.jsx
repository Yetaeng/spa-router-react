import React from 'react';
import useRouter from '../router/router';

const About = () => {
  const push = useRouter();
  return (
    <>
      <h1>About</h1>
      <button onClick={() => push('/')}>go to main</button>
    </>
  )
}

export default About;