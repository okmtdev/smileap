import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-200 p-4">
      <div className="container mx-auto flex items-center">
        <Image
          src="/smileap.svg"
          alt="Next.js Logo"
          width={164}
          height={32}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
