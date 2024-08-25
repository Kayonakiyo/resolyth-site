import { Component, onMount, createSignal, Show } from 'solid-js';
import styles from './SDVX.module.css';

const SDVX: Component = () => {

  const changePage = () => {
    document.getElementsByTagName("body")[0].classList.remove("styles.background")
    document.getElementsByTagName("body")[0].style.cssText = ``;
  }

    const [check, setCheck] = createSignal(false);

    const mainMenuTextInit = () => {
       
    }


    onMount(mainMenuTextInit)

    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        <p>sdvx page!</p>
      </Show>
    
    );
};

export default SDVX;