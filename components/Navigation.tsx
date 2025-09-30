'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import gnw_logo from '@/assets/gnw_logo.png'
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/jobs', label: 'Jobs' }
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={gnw_logo} alt={'gridnestworkforce-logo'} height={50}></Image>
            <span className="text-xl font-bold text-[#25598c]">GridNest Workforce</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#004aad]',
                  pathname === item.href ? 'text-[#004aad]' : 'text-gray-700'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#004aad] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#003d8f] transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          name='menu' >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  pathname === item.href 
                    ? 'text-[#004aad] bg-blue-50' 
                    : 'text-gray-700 hover:text-[#004aad] hover:bg-gray-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center bg-[#004aad] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#003d8f] transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}