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
        }, 1500)
    }

    onMount(mainMenuTextInit)

    return (
      <Show when={true} fallback={<p>peanis</p>}>
        <div class={styles.header} id="main">
          <p class={styles.text} id="welcome_text">Welcome!</p>
          <Show when={check()} fallback={<p class={styles.text}></p>}>
            <p class={styles.text} id="loaded_text">loaded!</p>
            <div class={styles.screen}>
              <ol></ol>
            </div>
          </Show>
        </div>
      </Show>
    
    );
};

export default MainMenu;