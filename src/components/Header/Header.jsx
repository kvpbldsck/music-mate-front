import { NavLink } from 'react-router-dom';
import { NavData } from '../../data/navigation';
import './Header.css';

function Header() {
  return (
    <header id="header">
      <div className="container">
        <nav id="main-menu" aria-label="Main Navigation">
          <ul>
            {NavData.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink to={item.to} title={item.title}
                  className={({ isActive }) => isActive ? 'active' : ''}>
                    {item.name}
                  </NavLink>
                </li>
              )
            })
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;

