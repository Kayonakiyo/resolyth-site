import { Component, onMount, createSignal, Show } from 'solid-js';
import styles from './AboutMe.module.css';

const AboutMe: Component = () => {
    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        <div class={styles.border}>
        <p>My username is Resolyth. Welcome to my site!</p>
        <p>I continue to work to make this page the best it can be, with info on
            all my projects and musings. 
        </p>

        <p>Firstly, my experience and hobbies!</p>
        <p>Naturally, I really enjoy programming! Most of my projects revolve around very niche
            functionality (such as with my GLAIVE software collection), or to explore mediums of
            interactive and more niche tech (such as arcade peripherals and mods).
        </p>
        <p>
          I hope that this page can also be a jumping off point for people
          wanting to get into 'making' stuff by getting into the small detalis of how
          devices and technologies in our lives work! 
        </p>
        </div>
        

      </Show>
    );
};

export default AboutMe;