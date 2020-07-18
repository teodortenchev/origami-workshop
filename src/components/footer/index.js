import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';

const Footer = () => {
    const links = getNavigation();

    return (
        <footer className={styles.container}>
            <div>
                {
                    links.map(nav => {
                        return (
                            <Link href={nav.link} title={nav.title} type="footer" />
                        )
                    })
                }
            </div>
            <p className={styles.copyright}>SMWorks Productions &copy; 2020</p>
        </footer>
    )
}

export default Footer;