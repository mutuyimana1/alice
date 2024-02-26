import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({navClass, linkClassName}) =>(
    <NavComponent navClass={navClass}
                  linkClassName = {linkClassName}
    />
);
const navElement=[
    {
        "tittle":"Home",
        "link":"/"
    },
    {
        "tittle":"Articles",
        "link":"/articles"
    },
    {
        "tittle":"Profile",
        "link":"#"
    },
    {
        "tittle":"Research",
        "link":"#"
    },
    {
        "tittle":"Featured",
        "link":"#"
    },
]
export const NavComponent = ({onClick, navClass, linkClassName})=>(
  <nav className={navClass}>
      {navElement.map(section=>
        <Link to={section.link}
              smooth={true}
              className={linkClassName}
              onClick={onClick}>
            {section.tittle}
        </Link>
      )}
  </nav>
)
export default Nav;