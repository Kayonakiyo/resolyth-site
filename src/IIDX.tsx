import { Component, onMount, createSignal, Show } from 'solid-js';
import styles from './IIDX.module.css';

const IIDX: Component = () => {

  const changePage = () => {
    document.getElementsByTagName("body")[0].classList.remove("styles.background")
    document.getElementsByTagName("body")[0].style.cssText = ``;
  }

    const mainMenuTextInit = () => {
       
    }


    onMount(mainMenuTextInit)

    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        <p>IIDX page!</p>
      </Show>
    
    );
};

export default IIDX;