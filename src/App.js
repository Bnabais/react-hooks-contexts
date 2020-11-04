import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageLayout from './components/page-layout/PageLayout';

import { HeaderProvider } from './hooks/HeaderContext';

import './App.css';

function App() {
  return (
    <main>
        <HeaderProvider>
            <Header />
            <PageLayout />
            <Footer />
        </HeaderProvider>
    </main>
  );
}

export default App;
