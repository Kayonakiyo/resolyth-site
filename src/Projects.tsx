import { Component, onMount, createSignal, Show, createEffect } from 'solid-js';
import styles from './Projects.module.css';
import { style } from 'solid-js/web';
import ProjectBox from './ProjectBox'

import SDVXVideo from './assets/SDVX_Song.mp4'
import SDVXLogo from './assets/sdvx_logo.png'
import SDVXBG from './assets/sdvxbg3.png'

import IIDXVideo from './assets/IIDX_Miami.mp4'
import IIDXLogo from './assets/BMIIDX_RES.png'
import IIDXBG from './assets/backbanner_IIDXCOLORS.jpg'

import defaultLogo from './assets/HG2HQ.png'
import defaultVideo from './assets/gnomed.mp4'

const Projects: Component = () => {
    const [check, setCheck] = createSignal(false);
    const [projectNumber, setProjectNumber] = createSignal(0);
    const [projectBigLogo, setProjectBigLogo] = createSignal(defaultLogo);
    const [previewBorderColor, setPreviewBorderColor] = createSignal("#ffffff")
    const [backgroundImage, setBackgroundImage] = createSignal(defaultLogo)
    const [projectVideo, setProjectVideo] = createSignal(defaultVideo)

    createEffect(() => {
      switch(projectNumber()){
        case 0: // SDVX
          setProjectBigLogo(SDVXLogo);
          setPreviewBorderColor("#f974b7")
          setBackgroundImage(SDVXBG)
          setProjectVideo(SDVXVideo)
          break;
        case 1: //BMIIDX
          setProjectBigLogo(IIDXLogo);
          setPreviewBorderColor("#a73baf")
          setBackgroundImage(IIDXBG)
          setProjectVideo(IIDXVideo)
          break;
        default:
          setProjectBigLogo(defaultLogo);
          setProjectVideo(defaultVideo)
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
        <div class={styles.header} style={{'background-image':`url('` + backgroundImage() + `')`}} id="main">
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