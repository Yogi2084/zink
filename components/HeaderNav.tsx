'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { label: 'About', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-6 text-md font-medium border-b border-white pb-4 gap-1.5 justify-end ">
      {navItems.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            'hover:text-accent transition-colors',
            pathname === href ? 'text-accent' : 'text-gray-300'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
