'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-50 animate-fadeIn">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:scale-105 transition-transform animate-pulse-slow">
            딩코딩코
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li className="animate-slideInRight opacity-0">
              <Link href="#about" className="hover:text-purple-200 transition-all hover:scale-110 inline-block">
                소개
              </Link>
            </li>
            <li className="animate-slideInRight opacity-0 animation-delay-200">
              <Link href="#videos" className="hover:text-purple-200 transition-all hover:scale-110 inline-block">
                영상
              </Link>
            </li>
            <li className="animate-slideInRight opacity-0 animation-delay-400">
              <Link href="#contact" className="hover:text-purple-200 transition-all hover:scale-110 inline-block">
                연락하기
              </Link>
            </li>
            <li className="animate-slideInRight opacity-0 animation-delay-600">
              <a
                href="https://www.youtube.com/@dingcodingco"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-all hover:scale-110 inline-block hover:shadow-lg"
              >
                유튜브 채널
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            <li>
              <Link
                href="#about"
                className="block hover:text-purple-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                소개
              </Link>
            </li>
            <li>
              <Link
                href="#videos"
                className="block hover:text-purple-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                영상
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block hover:text-purple-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                연락하기
              </Link>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@dingcodingco"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-center"
              >
                유튜브 채널
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
