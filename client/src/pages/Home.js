import React, { useContext } from 'react'
import RenderJson from '../components/RenderJson';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const auth = useContext(AuthContext)
  return(
    <div>
      <h1>Welcome! </h1>
      <h2> My name is Denny, and I'm a Web Developer </h2>
    </div>
  )
};

export default Home;