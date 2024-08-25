import { Component, onMount, createSignal, Show } from 'solid-js';
import styles from './MainMenu.module.css';
import { style } from 'solid-js/web';

const MainMenu: Component = () => {
    const [check, setCheck] = createSignal(false);

    const mainMenuTextInit = () => {
        setTimeout(() => {
          setCheck(true);
          const welcomeText = document.getElementById("welcome_text");
          if(welcomeText){
            welcomeText.remove(); // clear this element from dom
          }
        }, 2500)
    }

    onMount(mainMenuTextInit)

    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        <div class={styles.header} id="main">
          <p class={styles.text} id="welcome_text">Welcome!</p>
          <Show when={check()} fallback={<p class={styles.text}></p>}>
            <p class={styles.menuText} id="loaded_text">Main Menu</p>
            <div class={styles.screen}>
              <ul class={styles.menuText}>
                <li><a href="AboutMe">About Me</a></li>
                <li><a href="Projects">Projects</a></li> 
                <li><a href="Resume_CV">Resume / CV</a></li> 
              </ul>
            </div>
          </Show>
        </div>
      </Show>
    
    );
};

export default MainMenu;