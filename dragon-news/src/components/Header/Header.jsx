import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    const today = new Date();

    const formattedDate = format(today,  " MMMM dd, yyyy");
    return (
        <div>
            <div className='flex flex-col items-center justify-center p-4'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='text-secondary'><span className='font-bold'>{format(today, "EEEE")}</span> {formattedDate}</p>
            </div>
        </div>
    );
};

export default Header;