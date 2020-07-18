import React from 'react';
import Origamis from '../origamis';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird.png'

const Origami = ({ description, author, index }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            <p className={styles.description}>
                <span>{index} - </span>{description}
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