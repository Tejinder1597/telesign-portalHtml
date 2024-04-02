import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "flowbite-react";
import Navbar from './components/Navbar/Navbar';
import TopHeader from './components/TopHeader/TopHeader';
import PortalCard from './components/PortalCard/PortalCard';

function App() {
  return (
    <div className="App-header">
      <Navbar></Navbar>
      <TopHeader></TopHeader>
      <div className='app-body'>
        <PortalCard></PortalCard>
      </div>
    </div>
  );
}

export default App;
