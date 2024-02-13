import WorkIm from '../assets/projects/workImg.jpeg'
import RealEst from '../assets/projects/realestate.jpg'
import vender from '../assets/projects/vender.png' 
import nexusmee from '../assets/projects/nexusmee.png'  
import CodeEditiorPlatform from '../assets/projects/code Editorplatrom.png'
import Work from '../components/Work'
//using this api https://api.github.com/users/ankur766/repos crete a list of projects and repo url
//use this api to get the repo url and live li
    

export const data=[
    {
        id:1,
        name:"Code EditiorPlatform ",
        image:CodeEditiorPlatform,
        des:" provide developers with a text editing environment that is specifically designed for writing and editing source code, with features such as syntax highlighting, auto-completion, and debugging tools.",
        
    },
    {
        id:2,
        name:"Nexus Meetup Application",
        image:nexusmee,
        github:"",
        des:"A meetup application to connect people and facilitate events" +"for the" +"Nexus Meetup Application",
    },
    {
        id:3,
        name:"Vendor-Management-System",
        image:vender,
        github:"",
        des:"A Vendor Management System (VMS) is a software solution that helps organizations streamline and automate the process of managing their relationships with external vendors, including procurement, performance monitoring, and payment tracking.",
    },
    {
        id:4,
        name:"Multimedia-Presentation",
        image:"",
        github:"",
        des:"A multimedia presentation combines various forms of media, such as text, images, audio, and video, to deliver engaging and interactive content for effective communication and audience engagement.",
    },


]