import React, { FC, ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/Home';
import GlobalStyles from 'components/GlobalStyles';

const App: FC = (): ReactElement => (
    <>
        <GlobalStyles />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
);

export default App;
