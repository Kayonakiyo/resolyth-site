import { Component, onMount, createSignal, Show, createEffect } from 'solid-js';
import styles from './ProjectBox.module.css';
import defaultSmallPreview from './assets/HG2HQ.png'
import SDVXSmallPreview from './assets/sdvx_banner.png'
import IIDXSmallPreview from './assets/BMIIDX_Banner.png'


const ProjectBox: Component<{visibility:String, projectNumber:Number}> = (props) => {
    const [visible, setVisible] = createSignal(props.visibility);
    const [projectName, setProjectName] = createSignal("Project X");
    const [currentColor, setProjectColor] = createSignal("#ffffff");
    const [secondaryColor, setSecondaryColor] = createSignal("#ffffff")
    const [projectDescription, setProjectDescription] = createSignal("Something has gone amiss.");
    const [smallPreview, setSmallPreview] = createSignal(defaultSmallPreview);

    const projectInit = () => {
      let name = "Project X";
      let color = "#ffffff";
      let color2 = "#ffffff";
      let description = "Something has gone amiss.";
      let smallPreview = defaultSmallPreview;

      switch(props.projectNumber){
        case 0 : 
          name = "Sound Voltex Arcade Controller";
          color = "#f974b7";
          color2 = "#2efdf7";
          description = "A game with knobs, lasers, and FX buttons that make the rhythm game feel like a futuristic post-digital live set.";
          smallPreview = SDVXSmallPreview;
          break;
        case 1 :
          name = "Beatmania IIDX Controller Deck";
          color = "#d13154";
          color2 = "#F3A5C5"; 
          description = "The set is in your hands! Scratch records, keep the beat bumping and party on!"
          smallPreview = IIDXSmallPreview
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

    createEffect(() => {
      projectInit();
    }, [props.projectNumber])
    //onMount(projectInit);

    return (
      <Show when={visible} fallback={<></>}>
        <div class={styles.projectBoxPreview} style={{'border-color':currentColor()}}> 
          <div class={styles.projectBoxLogo} style={{'background-image':`url('` + smallPreview() + `')`}}/>
            <p class={styles.projectTitleText} style={{'color':currentColor()}}>{projectName()}</p>
            <p class={styles.projectDescriptionText} style={{'color':secondaryColor()}}>{projectDescription()}</p>
          </div>
      </Show>
    
    );
};

export default ProjectBox;