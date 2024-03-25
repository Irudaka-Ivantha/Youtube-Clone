import React from 'react'
import './Home.css'


export const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar={sidebar} />
        <div className={`container ${sidebar?"":'large-container'}`}>
          <Feed/>
        </div>
    </>
  )
}

export default Home;
