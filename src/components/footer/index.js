import React, { Component } from 'react';
import LinkComponent from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

class Footer extends Component {

    static contextType = UserContext;

    render() {
        const {
            loggedIn,
            user
        } = this.context;

        const links = getNavigation(loggedIn, user);

        return (
            <footer className={styles.container}>
                <div>
                    {
                        links.map(nav => {
                            return (
                                <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="footer" />
                            )
                        })
                    }
                </div>
                <p className={styles.copyright}>SMWorks Productions &copy; 2020</p>
            </footer>
        )
    }
}

export default Footer;