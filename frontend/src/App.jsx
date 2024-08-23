// src/App.js
import React, { useEffect, useState } from 'react';
import { getData } from './api';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [datas, setData] = useState(null);

  useEffect(() => {
    const getFile = async () => {
      const json = await getData();
      setData(json);
    };
    getFile();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 p-6">
        {datas ? (
          <Dashboard data={datas} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-semibold text-gray-700">Data Loading...</h1>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
