import React from 'react';
import Image from 'next/image';

// Define the type for the props
interface IDCardProps {
  name: string;
  age: number;
  famousFor: string;
  imgSrc: string;
}

// ID Card Component that accepts typed props
const IDCard: React.FC<IDCardProps> = ({ name, age, famousFor, imgSrc }) => {
  return (
    <div className='bg-slate-200 p-8 rounded-lg shadow-lg max-w-md w-full flex items-center justify-center border-4 border-gray-300 m-6'>
      {/* Info Section */}
      <div className='w-2/3 pr-4'>
        <p className='mb-2'>
          <strong className='text-gray-500'>Name:</strong>
          <span className='text-black ml-2'>{name}</span>
        </p>
        <p className='mb-2'>
          <strong className='text-gray-500'>Age:</strong>
          <span className='text-black ml-2'>{age}</span>
        </p>
        <p className='mb-2'>
          <strong className='text-gray-500'>Famous For:</strong>
          <span className='text-black ml-2'>{famousFor}</span>
        </p>
      </div>

      {/* Image Section */}
      <div className='w-1/3 text-center'>
        <Image
          src={imgSrc}
          alt={name}
          width={150}
          height={150}   
          className='rounded-lg border-4 border-slate-300'
        />
      </div>
    </div>
  );
};

// Main component to display 3 ID Cards
export default function IDCardList() {
  const students: IDCardProps[] = [
    {
      name: 'Saturu Gojo',
      age: 77,
      famousFor: 'Limitless, Six Eyes',
      imgSrc: '/saturu.jpeg',
    },
    {
      name: 'Mikey',
      age: 18,
      famousFor: 'leader of the Kanto Manji Gang',
      imgSrc: '/mikey.jpeg',
    },
    {
      name: 'Levi Ackerman',
      age: 17,
      famousFor: "humanity's most powerful soldier and head of an elite squad in the Survey Corps.",
      imgSrc: '/levi.jpeg',
    },
  ];

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-400 pt-12'>
      <h1 className='text-3xl font-black mb-9 flex justify-center'>Student ID Cards</h1>
      <div className='flex flex-wrap justify-center'>
        {students.map((student, index) => (
          <IDCard
            key={index}
            name={student.name}
            age={student.age}
            famousFor={student.famousFor}
            imgSrc={student.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
