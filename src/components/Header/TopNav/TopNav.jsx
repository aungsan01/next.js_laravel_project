import * as React from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr'
const TopNav = () => {
    return (
        <>
            <div className='bg-slate-600'>
                <div className='container flex items-center justify-between h-[44px]'>
                    <div className='left-block flex items-center'>
                        <div className='location flex items-center max-lg:hidden'>
                      <Icon.MapPin className = 'text-white text-xl'/>
                        <span className= 'ml-2 caption1 text-white'>  LetterPark ,Bangkok </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNav;