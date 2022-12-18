'use client';
import { useState, ChangeEvent } from 'react';

type ValidSection = 'official' | 'private';

const PriceList = () => {
 const [currentSection, setCurrentSection] = useState<ValidSection>('official');

 const handleSectionSwitch = (section: ValidSection) => {
  setCurrentSection(section);
 };

 return (
  <section className='flex flex-col w-full my-4'>
   <h2 className='text-xl font-medium text-center'>Price list</h2>
   <div className='p-0.5'></div>
   <div className='flex w-full text-lg font-medium bg-black bg-opacity-50 border-t border-b divide-x-2 border-gold-soft divide-gold-soft'>
    <button
     className={`w-1/2 p-2 ${
      currentSection === 'official'
       ? 'bg-gold-soft bg-opacity-20'
       : 'hover:bg-gold-soft hover:bg-opacity-10'
     } transition duration-200 ease-in-out`}
     value='official'
     onClick={e => handleSectionSwitch(e.currentTarget.value as ValidSection)}
    >
     Official Servers
    </button>
    <button
     className={`w-1/2 p-2 ${
      currentSection === 'private'
       ? 'bg-gold-soft bg-opacity-20'
       : 'hover:bg-gold-soft hover:bg-opacity-10'
     } transition duration-200 ease-in-out`}
     value='private'
     onClick={e => handleSectionSwitch(e.currentTarget.value as ValidSection)}
    >
     Private Servers
    </button>
   </div>
   <p className='capitalize'>Current section: {currentSection}</p>
  </section>
 );
};

export default PriceList;
