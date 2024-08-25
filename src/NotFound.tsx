import { Component, onMount, createSignal, Show } from 'solid-js';
import styles from './NotFound.module.css';

const NotFound: Component = () => {

    const changePage = () => {
    document.getElementsByTagName("body")[0].classList.remove("styles.background")
    document.getElementsByTagName("body")[0].style.cssText = ``;
    }

    return (
        <Show when={true} fallback={<p>bloopy</p>}>
        <p>no links here. <a href="/">go back.</a></p>
        </Show>

    );
};

export default NotFound;