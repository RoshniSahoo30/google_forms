import './App.css';
import React from 'react';
import Header from './components/Header';
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormHeader from './components/FormHeader';
import './components/FormHeader.css';
import CenteredTabs from './components/Tabs';
import Questionform from './components/QuestionForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
          path="/form/:id"
          element={
                   <>
                    <FormHeader />
                    <CenteredTabs />
                    <Questionform />
                   </>
                  }
        />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Template />
                <Mainbody />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
