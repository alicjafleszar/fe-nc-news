import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import ArticlesList from './components/pages/ArticlesList/ArticlesList';
import SingleArticle from './components/pages/SingleArticle/SingleArticle';
import Layout from './components/layout/Layout';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="" element={<ArticlesList />} />
          <Route path="articles" element={<ArticlesList />} />
          <Route path="articles/:topic" element={<ArticlesList />} />
          <Route path="articles/:topic/:article_id/:article_title" element={<SingleArticle />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
