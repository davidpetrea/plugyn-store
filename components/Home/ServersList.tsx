'use client';
import { ChangeEvent, useState } from 'react';
import { Server } from '../../utils/types';
import ServerItem from './ServerItem';
import SearchInput from './SearchInput';
type ValidSection = 'official' | 'private';

const ServersList = ({ servers }: { servers: Server[] }) => {
 const [currentSection, setCurrentSection] = useState<ValidSection>('official');
 const [search, setSearch] = useState('');

 const handleSectionSwitch = (section: ValidSection) => {
  setCurrentSection(section);
 };

 const onSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
 };

 if (!servers.length) return <div>No servers found.</div>;
 const filteredServers = servers
  .filter(
   (server: Server) =>
    server.name.toLowerCase().includes(search.toLowerCase()) &&
    server.section === currentSection
  )
  .map((server: Server) => {
   return <ServerItem key={server._id} server={server} />;
  });

 return (
  <>
   {/* Section switch buttons */}
   <div className='flex flex-col w-full my-4'>
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
   </div>
   {/* Search input */}
   <SearchInput value={search} onChange={onSetSearch} />
   {/* List */}

   <>
    {filteredServers.length ? (
     <section className='grid gap-2 lg:grid-cols-2'>{filteredServers}</section>
    ) : (
     <section className='text-center min-h-max'>
      No servers match your filters.
     </section>
    )}
   </>
  </>
 );
};

export default ServersList;
