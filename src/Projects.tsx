import { Component, onMount, createSignal, Show, createEffect } from 'solid-js';
import styles from './Projects.module.css';
import { style } from 'solid-js/web';
import ProjectBox from './ProjectBox'

const Projects: Component = () => {
    const [check, setCheck] = createSignal(false);
    const [projectNumber, setProjectNumber] = createSignal(0);
    const [projectBigLogo, setProjectBigLogo] = createSignal("src/assets/HG2HQ.png");
    const [previewBorderColor, setPreviewBorderColor] = createSignal("#ffffff")

    createEffect(() => {
      switch(projectNumber()){
        case 0: // SDVX
          setProjectBigLogo("src/assets/sdvx_logo.png");
          setPreviewBorderColor("#f974b7")
          break;
        default:
          setProjectBigLogo("src/assets/HG2HQ.png");
      }
    }, [projectNumber]);
    
    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        <div class={styles.header} id="main">
          <div class={styles.highlight} style={{'border-color':previewBorderColor()}}>
            <img src={projectBigLogo()} style={{'position':'relative','bottom':'-75%'}}/>
            <video autoplay muted loop class={styles.screenvideo}>
              <source src="src/assets/wireworks.mp4" type="video/mp4"/>
            </video>
          </div>
            <div class={styles.screen}>
            <ProjectBox visibility="visible" projectNumber={projectNumber()}/>
            </div>
        </div>
      </Show>
    
    );
};

export default Projects;