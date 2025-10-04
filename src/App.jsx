import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PostDetail from './Pages/PostDetail'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  )
}

export default App
