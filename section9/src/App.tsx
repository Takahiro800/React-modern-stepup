import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Practice1 } from './practice/Practice';
import { Practice2 } from './practice/Practice2';
import { Practice3 } from './practice/Practice3';

export default function App() {
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <Practice3 />
    </div>
  );
}