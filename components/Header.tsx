import ThemeSwitchToggle from './ThemeSwitchToggle';
import Link from './Link';
import { navLinks } from '@/data/navLinks';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className='flex items-center justify-between py-8'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Seul</h1>
      </Link>
      <nav className='flex items-center leading-5 sapce-x-4 sm:space-x-6'>
        {navLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='font-medium hidden sm:block'
            >
              {link.label}
            </Link>
          ))}
        <ThemeSwitchToggle />
        <MobileNav />
      </nav>
    </header>
  );
}
