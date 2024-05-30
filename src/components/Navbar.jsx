import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './DarkMode';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [icon, setIcon] = useState(theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />);

  useEffect(() => {
    setIcon(theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />);
  }, [theme.palette.mode]);

  return (
    <nav className="scrolled-header sticky top-0 left-0 w-full border-b border-[#4d4e53] shadow-sm text-xl z-10 mx-auto" style={{ backgroundColor: 'var(--navbar-background)', color: 'var(--navbar-foreground)' }}>
      <div className="px-12 h-24 flex justify-between items-center relative">
        <a href="#" className="md:inline hidden">Xiao Yin</a>
        <a href="#" className="md:hidden">XY</a>
        <div className="flex justify-end space-x-2">
          <a href="#aboutMe" className="p-4">About</a>
          <a href="#projects" className="p-4">Projects</a>
          <a href="#contact" className="p-4">Contact</a>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {icon}
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
