import { ChangeEventHandler } from 'react';
import { SearchIcon } from '@/svg/SvgComponents';

const SearchInput = ({
 value,
 onChange,
}: {
 value: string;
 onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
 return (
  <>
   <p className='text-sm'>Search for server</p>
   <div className='flex items-center w-full gap-2 pl-2 mb-2 bg-black bg-opacity-50 border border-white rounded-md lg:w-1/2'>
    <SearchIcon />
    <input
     type='text'
     value={value}
     onChange={onChange}
     className='w-full p-2 text-sm bg-black bg-opacity-50 border-l border-white outline-none'
     placeholder='Search server by name...'
    />
   </div>
  </>
 );
};

export default SearchInput;
