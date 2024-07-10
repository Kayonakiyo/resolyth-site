import { Component, onMount, createSignal, Show } from 'solid-js';
import styles from './ProjectBox.module.css';

const ProjectBox: Component<{visibility:String, projectNumber:Number}> = (props) => {
    const [visible, setVisible] = createSignal(props.visibility);
    const [projectName, setProjectName] = createSignal("Project X");
    const [currentColor, setProjectColor] = createSignal("#ffffff");
    const [projectDescription, setProjectDescription] = createSignal("Something has gone amiss.");

    const projectInit = () => {
      let name = "Project X";
      let color = "#ffffff";
      let description = "Something has gone amiss.";

      switch(props.projectNumber){
        case 0 : 
          name = "Project #0";
          color = "";
          description = "A game with knobs, lasers, and FX buttons that make the rhythm game feel like a futuristic post-digital live set.";
          break;
        case 1 :
          name = "Project #1";
          break;
        default :
          name = "Project X";
          break;
      }
      setProjectName(name);
    }

    onMount(projectInit);

    return (
      <Show when={visible} fallback={<></>}>
        <div class={styles.element} style={{'border-color':currentColor()}}>
        <img src="src/assets/sdvx_banner.png" alt="Sound Voltex Exceed Gear"></img>
        <p class={styles.text}>{projectName()}</p>
          <div class={styles.element2}>
            <p class={styles.text2}>{projectDescription()}</p>
          </div>
        
        </div>
        
      </Show>
    
    );
};

export default ProjectBox;