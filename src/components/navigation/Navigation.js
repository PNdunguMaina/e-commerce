import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const links = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/details', text: 'Details' },
  ];
  return (
    <div>
      <div className="logo-container">Air pollution</div>
      <nav>
        {links.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {link.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
