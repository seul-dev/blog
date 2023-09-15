import Link from './Link';

export default function Footer() {
  return (
    <footer className='py-4 text-gray-600 dark:text-gray-400 text-sm flex justify-end space-x-2'>
      <span className=''>{`© ${new Date().getFullYear()}`}</span>
      <Link href={`https://github.com/seul-dev/blog`}>seul-dev</Link>. Allrights
      reserved.
    </footer>
  );
}
