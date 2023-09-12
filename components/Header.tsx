import ThemeSwitchToggle from './ThemeSwitchToggle';

export default function Header() {
  return (
    <header className='flex items-center justify-between py-10'>
      <ThemeSwitchToggle />
    </header>
  );
}
