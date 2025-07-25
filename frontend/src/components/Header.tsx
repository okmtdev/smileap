import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-700 p-4">
      <div className="container mx-auto flex items-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={24}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
