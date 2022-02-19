import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Wrapper from './components/Wrapper/Wrapper';

//Containers
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import Finder from './containers/Finder/Finder';

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searcher" element={<Finder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
