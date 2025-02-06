import { NavLink } from 'react-router-dom';
import { NavData } from '../../data/navigation';
import './Header.css';

function Header() {
  return (
    <header id="header">
      <nav id="main-menu">
        <ul>
          {NavData.map((item) => {
            return (
              <li key={item.name}>
                <NavLink to={item.to} title={item.title}>{item.name}</NavLink>
              </li>
            )
          })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;

