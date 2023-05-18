import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import MainPage from "./components/pages/MainPage";
import BlogPage from "./components/pages/BlogPage";
import WorksPage from "./components/pages/WorksPage";
import WorkPage from "./components/pages/WorkPage";
import PostPage from "./components/pages/PostPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <BrowserRouter>
    <Nav/>
    <Routes>

      <Route path='/portfolio-website/index.html' element={<Navigate to='/'/>}/>
      {/* <Route path='/' element={<Navigate to='/'/>}/> */}

      <Route path='/portfolio-website/' element={<MainPage/>}/>
      <Route path='/portfolio-website/blog' element={<BlogPage/>}/>
      <Route path='/portfolio-website/works' element={<WorksPage/>}/>

      <Route path='/portfolio-website/works/:id' element={<WorkPage/>}/>
      <Route path='/portfolio-website/blog/:id' element={<PostPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
