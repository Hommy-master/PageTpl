import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from '@/NextUI';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import NavCenter from './NavCenter';
import LoginButton from './LoginButton';

export default function TopNav() {

  return (
    <Navbar maxWidth="2xl" isBordered className='border-b-yellow-200'>
      <NavbarBrand>
        <Link color="foreground" href="/" className='font-bold text-inherit hover:text-amber-600'>Demo</Link>
      </NavbarBrand>

      <NavCenter />

      <NavbarContent justify="end">
        <NavbarItem>
          <LoginButton />
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
