import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button';
import FormControl from '../../components/formControl';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""         
        };
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }


    render() {

        const { email, password } = this.state;

        return (
            <PageLayout>

                <div className={styles.container}>

                    <form>
                        <FormControl fieldName="Email" fieldType="email" id="email"
                            autocomplete="usernme" value={email} onChange={(e) => this.onChange(e, 'email')} />
                        <FormControl fieldName="Password" fieldType="password" id="password"
                            autocomplete="current-password" value={password} onChange={(e) => this.onChange(e, 'password')} />
                        
                        <div>
                            <SubmitButton title="Login" />
                        </div>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default LoginPage;