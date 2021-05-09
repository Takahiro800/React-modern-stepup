import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Practice1 } from './practice/Practice';
import { Practice2 } from './practice/Practice2';
import { Practice3 } from './practice/Practice3';
import { Practice4 } from './practice/Practice4';

export default function App() {
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
    </div>
  );
}