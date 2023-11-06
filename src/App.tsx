import React from 'react';
import {PostComponent} from './components/post.tsx';
import { NavBar } from './components/nav_bar.tsx';
import { ProfileData } from './components/profile_data.tsx';
function App() {
  return (
    <div className="flex relative overflow-hidden flex-col justify-evenly bg-stone-900 h-full  w-full">
      <NavBar/>
      <div className=' h-12'></div>

        {/* main container */}
      <div className='flex'>
        {/* profile data */}
        <ProfileData/>
          {/* posts list */}
          <div className='p-2'>
                    <PostComponent/>
                    <PostComponent/>
                    <PostComponent/>
          </div>
      </div>

      
     
    </div>
  );
}

export default App;
