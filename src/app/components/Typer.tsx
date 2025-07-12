"use client"
import { TypeAnimation } from 'react-type-animation';
 
const Typer = () => {
  return (
    <TypeAnimation
      sequence={[
        'Software Developer', 
        1000,
        'Full-Stack Developer',
        1000,
        'Frontend Developer',
        1000,
        'Backend Developer',
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
      className='font-extrabold text-primary'
    />
  );
};

export default Typer;