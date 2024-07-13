import { Component, onMount, createSignal, Show } from 'solid-js';
import styles from './ProjectBox.module.css';

const ProjectBox: Component<{visibility:String, projectNumber:Number}> = (props) => {
    const [visible, setVisible] = createSignal(props.visibility);
    const [projectName, setProjectName] = createSignal("Project X");
    const [currentColor, setProjectColor] = createSignal("#ffffff");
    const [secondaryColor, setSecondaryColor] = createSignal("#ffffff")
    const [projectDescription, setProjectDescription] = createSignal("Something has gone amiss.");
    const [smallPreview, setSmallPreview] = createSignal("src/assets/HG2HQ.png");

    const projectInit = () => {
      let name = "Project X";
      let color = "#ffffff";
      let color2 = "#ffffff";
      let description = "Something has gone amiss.";
      let smallPreview = "src/assets/HG2HQ.png";

      switch(props.projectNumber){
        case 0 : 
          name = "Sound Voltex Arcade Controller";
          color = "#f974b7";
          color2 = "#2efdf7";
          description = "A game with knobs, lasers, and FX buttons that make the rhythm game feel like a futuristic post-digital live set.";
          smallPreview = "src/assets/sdvx_banner.png";
          break;
        case 1 :
          name = "Project #1";
          break;
        default :
          name = "Project X";
          break;
      }
      setProjectName(name);
      setProjectColor(color);
      setSecondaryColor(color2);
      setProjectDescription(description);
      setSmallPreview(smallPreview);
    }

    onMount(projectInit);

    return (
      <Show when={visible} fallback={<></>}>
        <div class={styles.element} style={{'border-color':currentColor()}}>
        <img src={smallPreview()} alt="Sound Voltex Exceed Gear"></img>
        <p class={styles.text} style={{'color':currentColor()}}>{projectName()}</p>
          <div class={styles.element2}>
            <p class={styles.text2} style={{'color':secondaryColor()}}>{projectDescription()}</p>
          </div>
        
        </div>
        
      </Show>
    
    );
};

export default ProjectBox;