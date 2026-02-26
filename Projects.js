import React from 'react'
import { projects } from '../portfolio'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles3.json";
import ProjectContainer from '../components/ProjectContainer/ProjectContainer'
import uniqid from 'uniqid'
import { useState,useEffect} from 'react';

const Projects = () => {
    const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesVisible(true);
    });
  }, []);
    if(!projects.length)
    return null;
  return (
    <section className='section projects'>
        <div className=' grid grid-cols-3 gap-4 max-w-[1200px]  '>
            {projects.map((project)=>(
                <ProjectContainer key = {uniqid()} project ={project}/>
            
            ))}

        </div>
        <div className=" absolute inset-0 z-[0] flex">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div>
    </section>
  )
}

export default Projects;


