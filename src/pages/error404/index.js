import React from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout'
import image from '../../images/error404.jpg';

const Error404 = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <h1>Something went wrong...</h1>
                <img src={image} alt="Error 404. Page not found" className={styles.image}/>
            </div>
        </PageLayout>
    )
}

export default Error404;