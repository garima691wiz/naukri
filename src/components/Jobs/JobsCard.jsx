import React from 'react';
import { IoBriefcaseOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";

const JobsCard = ({ title, companyName, salary, location, description, datePosted }) => {
  const truncatedDescription = description.length > 1000 ? description.slice(0, 1000) + "..." : description;

  return (
    <div className='w-[80%] m-auto bg-white my-[20px] p-4 rounded-[12px] flex flex-col gap-1 shadow-lg hover:shadow-xl transition-all duration-300'>
      <p className='text-[20px] font-bold'>{title}</p>
      <p className='text-gray-500'>{companyName}</p>
      <div className='flex gap-2'>
        <div className='flex items-center gap-2'>
          <IoBriefcaseOutline />
          {salary ? salary : "Not disclosed"}
        </div>

        <div>|</div>
        <div className='flex items-center gap-2'>
          <IoLocationOutline />
          {location}
        </div>
      </div>
      <div className='flex gap-2 items-start'>
        <FaRegNoteSticky />
        <span className="text-gray-700">{truncatedDescription}</span>
      </div>
      <div className='mt-4 text-[12px] text-gray-500'>
        Posted on: <span className='font-semibold'>{datePosted}</span>
      </div>
    </div>
  );
};

export default JobsCard;
