import { Component, createSignal, onMount } from 'solid-js';
import { Router, Route, useNavigate } from '@solidjs/router'; 
import styles from './App.module.css';
import hg_logo from './assets/HG2HQ.png'

// other components
import MainMenu from './MainMenu';

const App: Component = () => {
  // signals/hooks

  const [text, setText] = createSignal("Initializing RESOLYTH SITE... Please wait a moment...");
  const navigate = useNavigate();

  const mainMenuTextInit = () => {
    
    animateText("Initializing RESOLYTH SITE... Please wait a moment...")

    // attach listeners 
    setTimeout(() => {
      const mainBox = document.getElementById('mainBox');
      if (mainBox){
        mainBox.classList.remove(styles.App)
        mainBox.offsetWidth; // refloow
        mainBox.classList.add(styles.mainMenuTransition)
      }
    }, 3000);
    
    setTimeout(() => {
      navigate('/MainMenu');
    }, 5000)
    
 
  }

  // const showMainMenu = (mainBox:HTMLElement) => {
  //   // try to change class of big div to load new anims and clear old ones.
  //   mainBox.classList.add(styles.mainMenuTransition)
  // }

  onMount(mainMenuTextInit);

  return (

      <div class={styles.App} id="mainBox">
        <header class={styles.header}>
          <img src={hg_logo} class={styles.logo} alt="logo" />
          <div class={styles.container} id="textContainer">
            {

            }
            <p class={styles.animated_text} id="textBlock" ></p>
          </div>        
        </header>
      </div>
   
  );
};

function animateText(text:string){
  const textElement = document.getElementById("textBlock");
  if (textElement) {
    textElement.classList.remove(styles.animated_text); 
    textElement.innerHTML='';
    textElement.offsetWidth; // reflooooooowwwwww
    textElement.innerHTML=text;
    textElement.classList.add(styles.animated_text);
  }
}

export default App;


