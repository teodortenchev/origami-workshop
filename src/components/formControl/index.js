import React from 'react';
import styles from './index.module.css';

const FormControl = ({ fieldName, fieldType, id, value, onChange, autocomplete }) => {
    return (
        <div className={styles["form-control"]}>
            <label htmlFor={id} className={styles.label}>{fieldName}</label>
            <input className={styles.input} type={fieldType || 'text'} value={value} onChange={onChange} autoComplete={autocomplete} />
        </div>
    )
}

export default FormControl;