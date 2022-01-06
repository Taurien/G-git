import React from "react";
import { Routes, Route/*, Link*/ } from "react-router-dom";

import { DarkModeProvider } from "./Context/DarkModeContext";
import { HeaderTitleContextProvider } from "./Context/HeaderTitleContext";

import Div100vh from "react-div-100vh";
import MainLayout from "./Layouts/MainLayout";

import Home from './routes/Home/Home';
import UserDisplay from './routes/UserDisplay/UserDisplay';
import Repos from './routes/Repos/Repos';
import Following from './routes/Following/Following';
import Followers from './routes/Followers/Followers';

import './styles/App.scss';

function App() {


  return (
    <Div100vh className='flex flex-col'>
      <HeaderTitleContextProvider>
        <DarkModeProvider>
          <MainLayout>
            <Routes>
              <Route exact path="/G-git" element={<Home />} />
              <Route path="user/:login" element={<UserDisplay />} />
              <Route path="user/:login/repos" element={<Repos />} />
              <Route path="user/:login/following" element={<Following />} />
              <Route path="user/:login/followers" element={<Followers />} />
              <Route path="*" element={<p>Holi 404!!</p>} />
            </Routes>
          </MainLayout>
        </DarkModeProvider>
      </HeaderTitleContextProvider>
    </Div100vh>
  );
}

export default App;
