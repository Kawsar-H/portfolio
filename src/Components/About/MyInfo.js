import React from 'react';
import { Button } from 'react-bootstrap';

const MyInfo = () => {
    return (
        <div style={{marginBottom:"50px"}}>
            <h1>About Me</h1>
            <img style={{width:"300px"}} src="https://i.ibb.co/6tJvyCT/20210502-160559.jpg" alt=""/>
            <p style={{fontSize:"17"}}>Hey.. I'am Kawsar Hossain.I am a very forward thinking professional with a multi-faceted background in web application, front-end and back-end , responsive mobile first programming for both static and dynamically.</p>
               <p>Key Skill

                  ●	Ability to produce quality work products with attention to detail
                  ●	Highly Self-motivated and adaptable to learning and understanding new technologies
                  ●	The ability to write clean, maintainable code ,design patterns to good effect
                  ●	Excellent Javascript programming skills with knowledge of developing large
                  

               </p>
            <a href="#contact">
            <Button className="btn btn-sm" style={{background:"#e31b6d", outline:"none", border:"none"
                , borderRadius:"8px"}}>Hire Me</Button>
            </a>
        </div>
    );
};

export default MyInfo;