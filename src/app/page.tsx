
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
   
  <div>
  <title>PORTFOLIO</title>
  <link rel="stylesheet" href="style.css"></link>


    <div className="resume-container"></div>
    
    <div className="bg-cyan-100 " >
        <img src="profilepicture.jpg" height="250" width="250" alt ="profile-picture" className="portfoliopicture" ></img>

        <div className='container grid lg:grid-cols-1] '>

<div className='hidden lg:block'></div>
     <div className='text-[60px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-black'>           
        <div>
        <p><b>I 'm</b></p>
        <p><b>Afshan</b></p>
        <p><b>Ahmar</b></p>
     </div>
     </div>
     </div>
 <section id="objective"><h1 className="bg-slate-400 text-3xl"><b>Career objective</b></h1>
    <p className="text-align: justify;hyphens: auto; text-xl">To secure an employment  opportunity  with a progressive
        organization,where I can utilize my professional skills and 
        knowledge to the maximum add value in the growth of the organization
        Seeking an opportunity as a fresh candidate to start my professional
        career.<br/>
        

        </p>
        </section>
        </div>
        </div>
    
       
    
    

  )
}