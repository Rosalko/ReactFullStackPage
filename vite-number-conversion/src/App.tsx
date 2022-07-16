import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import ArticleList from "./pages/ArticleList";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/article">
              <Route path="" element={<ArticleList />} />
              <Route path=":id" element={<ArticlePage />} />
            </Route>
            <Route path="*" element={<h1>There is nothing here</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
