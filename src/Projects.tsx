import { Component, onMount, createSignal, Show, createEffect } from 'solid-js';
import styles from './Projects.module.css';
import { style } from 'solid-js/web';
import ProjectBox from './ProjectBox'

const Projects: Component = () => {
    const [check, setCheck] = createSignal(false);
    const [projectNumber, setProjectNumber] = createSignal(0);
    const [projectBigLogo, setProjectBigLogo] = createSignal("src/assets/HG2HQ.png");
    const [previewBorderColor, setPreviewBorderColor] = createSignal("#ffffff")
    const [backgroundImage, setBackgroundImage] = createSignal("src/assests/HG2HQ.png")
    const [projectVideo, setProjectVideo] = createSignal("src/assets/gnomed.mp4")

    createEffect(() => {
      switch(projectNumber()){
        case 0: // SDVX
          setProjectBigLogo("src/assets/sdvx_logo.png");
          setPreviewBorderColor("#f974b7")
          setBackgroundImage("url('src/assets/sdvxbg3.png')")
          setProjectVideo("src/assets/SDVX_Song.mp4")
          break;
        case 1: //BMIIDX
          setProjectBigLogo("src/assets/BMIIDX_RES.png");
          setPreviewBorderColor("#a73baf")
          setBackgroundImage("url('src/assets/backbanner_IIDXCOLORS.jpg')")
          setProjectVideo("src/assets/IIDX_Miami.mp4")
          break;
        default:
          setProjectBigLogo("src/assets/HG2HQ.png");
          setProjectVideo("src/assets/gnomed.mp4")
      }
    }, [projectNumber]);

    createEffect(() => {
      const switchProject = (event: { key: string; }) => {
        if(event.key === 'ArrowUp' || event.key === 'ArrowLeft'){
          if(projectNumber() > 0){
            setProjectNumber(projectNumber() - 1)
              
          }
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight'){
          if(projectNumber() < 1){
            setProjectNumber(projectNumber() + 1)
          }
        }
      }

      window.addEventListener('keydown', switchProject);
    })

    
    
    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        <div class={styles.header} style={{'background-image':backgroundImage()}}id="main">
          <div class={styles.highlight} style={{'border-color':previewBorderColor()}}>
            <img src={projectBigLogo()} style={{'position':'relative','bottom':'-75%'}}/>
            <video autoplay muted loop class={styles.screenvideo} id ="vidz" src={projectVideo()}>
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