import { Component, onMount, createSignal, Show, createEffect } from 'solid-js';
import styles from './Projects.module.css';
import { style } from 'solid-js/web';
import ProjectBox from './ProjectBox'

const Projects: Component = () => {
    const [check, setCheck] = createSignal(false);
    const [projectNumber, setProjectNumber] = createSignal(0);
    
    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        <div class={styles.header} id="main">
          <p class={styles.text} id="header_text">This is the projects page.</p>
            <div class={styles.screen}>
            <ProjectBox visibility="visible" projectNumber={projectNumber()}/>
            </div>
        </div>
      </Show>
    
    );
};

export default Projects;