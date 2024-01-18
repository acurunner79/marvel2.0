import React, { useEffect, useRef, useState } from 'react'
import { useAppState } from './AppState';
import SearchForm from './components/SearchForm';
import ReactPlayer from 'react-player';
import './App.css';
import CharacterDisplay from './components/CharacterDisplay';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero';

function App() {

  return (
    <Layout>
      <Hero />
      <SearchForm />
      <CharacterDisplay />
    </Layout>
  );
}

export default App;
