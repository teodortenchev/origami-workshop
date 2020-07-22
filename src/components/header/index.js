import React from 'react';
import styles from './index.module.css';
import LinkComponent from '../link';
import logo from '../../images/white-origami-bird.png';
import getNavigation from '../../utils/navigation';

const Header = () => {
    const links = getNavigation();

    return (
        <header className={styles.navigation}>
            <img className={styles.logo} src={logo} alt="" />
           {
               links.map(nav => {
                   return (
                    <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="header" />
                   )
               })
           }
        </header>
    )
}

export default Header;