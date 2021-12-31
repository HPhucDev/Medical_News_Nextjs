import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../services';
import logo from '../public/Logo.png';

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-black-800 py-8">
        <div className="md:float-left block">
          <Image src={logo} alt="hello" height="30%" width="35%"/>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black ">Medical News</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents ">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer mt-4">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
