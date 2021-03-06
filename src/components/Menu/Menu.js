import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

import './Menu.scss';

export default function Menu({menuColor}) {
    return (
        <header 
        className="menu"
        style={{backgroundColor: menuColor || "transparent"}}
        >
            <Container>
                <ul>
                    <li>
                    <Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;Inicio&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                    </li>
                    <li>
                        <Link to="/skills">Habilidades&nbsp;</Link>
                    </li>
                    <li>
                        <Link to="/projects">Proyectos</Link>
                    </li>
                </ul>
            </Container>
        </header>
    )
}
