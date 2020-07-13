import React from 'react';
import Origamis from '../origamis';
import styles from './index.module.css';

const Origami = ({ description, author }) => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <span className={styles.user}>
                    <small>{author.username}</small>
                </span>
            </div>
        </div>
    )
}

export default Origami;