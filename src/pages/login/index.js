import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button';
import FormControl from '../../components/formControl';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    static contextType = UserContext;

    handleSubmit = async event => {
        event.preventDefault();

        const { username, password } = this.state;

        await authenticate('http://localhost:9999/api/user/login', { username, password }, (user) => {
            console.log('Successful login');
            this.context.logIn(user);
            this.props.history.push('/');
        }, (e) => {
            console.log('Error', e)
        })
    }

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }


    render() {

        const { username, password } = this.state;

        return (
            <PageLayout>
                <Title title="Login Page" />
                <div className={styles.container}>

                    <form onSubmit={this.handleSubmit}>
                        <FormControl fieldName="Email" fieldType="username" id="username"
                            autocomplete="usernme" value={username} onChange={(e) => this.handleChange(e, 'username')} />
                        <FormControl fieldName="Password" fieldType="password" id="password"
                            autocomplete="current-password" value={password} onChange={(e) => this.handleChange(e, 'password')} />

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
