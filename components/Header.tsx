'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:scale-105 transition-transform">
            딩코딩코
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="#about" className="hover:text-purple-200 transition-colors">
                소개
              </Link>
            </li>
            <li>
              <Link href="#videos" className="hover:text-purple-200 transition-colors">
                영상
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-purple-200 transition-colors">
                연락하기
              </Link>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@dingcodingco"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
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
