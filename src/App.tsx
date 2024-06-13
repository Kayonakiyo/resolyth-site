import type { Component } from 'solid-js';

import styles from './App.module.css';
import hg_logo from './assets/HG2HQ.png'

const App: Component = () => {

  const handleClick = () => {
    displayTextWithAnimation("this is a test of scrolling text");
  };
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={hg_logo} class={styles.logo} alt="logo" />
        <p>
          <code>stuff looks cool like this</code>
        </p>


        <p class={styles.animated_text} id="InitializerText"></p>
      
          <button onClick={handleClick}>Click me</button> 
        
        
      </header>
    </div>
  );
};

export default App;

function displayTextWithAnimation(text:string) {
  const textElement = document.createElement('div');
  textElement.classList.add(styles.animated_text);
  textElement.textContent = text;
  const test1 = document.getElementById("InitializerText");
  if (test1) {
    test1.innerHTML = '';  // Clear previous text
    test1.appendChild(textElement);
  }
}
