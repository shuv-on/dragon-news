import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';
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
            <div className=' bg-base-100'>
                <div className='w-11/12 mx-auto  p-2 flex gap-5'>
                   <button className='btn bg-base-200 text-white ' >Latest</button>
                   <Marquee >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, a similique consectetur adipisci voluptates dolore, facilis dolores tenetur dignissimos saepe ab harum cumque enim molestiae! Ad incidunt quos omnis inventore.</p>
                   </Marquee>
                   
                </div>
            </div>
            
        </div>
    );
};

export default Header;