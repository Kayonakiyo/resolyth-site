import { Component, onMount, createSignal, Show, createEffect } from 'solid-js';
import styles from './Projects.module.css';
import ProjectBox from './ProjectBox'

import SDVXVideo from './assets/SDVX_Song.mp4'
import SDVXLogo from './assets/sdvx_logo.png'
import SDVXBG from './assets/sdvxbg33.png'

import IIDXVideo from './assets/IIDX_Miami.mp4'
import IIDXLogo from './assets/BMIIDX_RES.png'
import IIDXBG from './assets/backbanner_BMIIDX.png'

import defaultLogo from './assets/HG2HQ.png'
import defaultVideo from './assets/gnomed.mp4'

const Projects: Component = () => {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    const [check, setCheck] = createSignal(false);
    const [projectNumber, setProjectNumber] = createSignal(0);
    const [projectBigLogo, setProjectBigLogo] = createSignal(defaultLogo);
    const [previewBorderColor, setPreviewBorderColor] = createSignal("#ffffff")
    const [backgroundImage, setBackgroundImage] = createSignal(defaultLogo)
    const [projectVideo, setProjectVideo] = createSignal(defaultVideo)
    const [projectLink, setProjectLink] = createSignal("MainMenu")

    createEffect(() => {
      switch(projectNumber()){
        case 0: // SDVX
          setProjectBigLogo(SDVXLogo);
          setPreviewBorderColor("#f974b7")
          setBackgroundImage(SDVXBG)
          setProjectVideo(SDVXVideo)
          setProjectLink("/Projects/SDVX")
          break;
        case 1: //BMIIDX
          setProjectBigLogo(IIDXLogo);
          setPreviewBorderColor("#d13154")
          setBackgroundImage(IIDXBG)
          setProjectVideo(IIDXVideo)
          setProjectLink("/Projects/IIDX")
          break;
        default:
          setProjectBigLogo(defaultLogo);
          setProjectVideo(defaultVideo)
          setProjectLink("MainMenu")
      }
      document.getElementsByTagName("body")[0].classList.add(styles.background); // every refresh, change the background element
      document.getElementsByTagName("body")[0].style.cssText = `background-image: url('${backgroundImage()}')`;
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

    const changePage = () => {
      document.getElementsByTagName("body")[0].classList.remove(styles.background); // every refresh, change the background element
      document.getElementsByTagName("body")[0].style.cssText = ``;
    }
    
    return (
      <Show when={true} fallback={<p>bloopy</p>}>
        
        <div class={styles.bigBoxPreview} style={{'border-color':previewBorderColor()}}>
        
          <ProjectBox visibility="visible" projectNumber={projectNumber()}/>
          <a href={projectLink()} onclick={changePage} style={{'visibility':'visible', 'width':'100%', 'height':'100%'}}>
        <video autoplay muted loop class={styles.bigBoxVideo} src={projectVideo()}/>
        
          <div class={styles.bigBoxLogo} style={{'background-image':`url('` + projectBigLogo() + `')`}}/>
          </a>
        </div>
        
        
      </Show>
    
    );
};

export default Projects;