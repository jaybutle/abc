import React from 'react'
import{about} from '../portfolio'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import Education from '../components/Education/Education'
import {useState,useEffect} from 'react';

const About = () => {
    const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesVisible(true);
    });
  }, []);

  return (
    <div className='flex flex-col items-left mt-12 md:mt-8 relative z-[1]'>
        <div className='grid grid-cols-3 gaps-28 items-center z-1'>
            {/* name ka column */}
            <div className='col-span-1'>
                <h2 className='font-bold mt-[8rem] text-4xl'>
                    <span className='text-primary leading-10'>{about.firstName} <br/> {about.lastName}</span>
                    
                </h2>

            </div>
            {/* image column hum start kar rahe hain */}
            <div className='flex justify-center col-sapn-1'>
                <div className='rounded-full overflow-hidden w-1000 h-100'>
                    <img src = "/developer-man.png"></img>
                </div>
            </div>

            {/* ye wala div description ka hai */}

            <div className='col-sapn-1 ml-20 text-left'>
                {about.role}  <h2 className='mt-4  font-bold text-2xl'>{about.role}</h2>
                <p className='mt-8  text-lg max-w-2xl'>{about.description}</p>

            </div>

                
        </div>
       <Education/>
       <div className="absolute inset-0 z-[0]">
        {particlesVisible && <Particles options={particlesOptions} />}
      </div>

    </div>

  )
}

export default About
