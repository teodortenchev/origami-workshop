import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button';
import FormControl from '../../components/formControl';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        };
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }


    render() {

        const { email, password, rePassword } = this.state;

        return (
            <PageLayout>
                <Title title="Register Page" />

                <div className={styles.container}>

                    <form>
                        <FormControl fieldName="Email" fieldType="email" id="email"
                            autocomplete="" value={email} onChange={(e) => this.onChange(e, 'email')} />
                        <FormControl fieldName="Password" fieldType="password" id="password"
                            autocomplete="" value={password} onChange={(e) => this.onChange(e, 'password')} />
                        <FormControl fieldName="Confirm Password" fieldType="password" id="rePassword"
                            autocomplete="" value={rePassword} onChange={(e) => this.onChange(e, 'rePassword')} />
                        <div>
                            <SubmitButton title="Register" />
                        </div>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage;