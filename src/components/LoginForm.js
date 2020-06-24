import React, {Component} from 'react';
import {TextInput,StyleSheet, Text, View} from 'react-native';

import {Card,CardSection,Button,Spinner} from './common';
import Axios from 'axios';
import {BASE_URL} from '../config/Constants'
import {LoginContext} from '../provider/LoginProvider';


class LoginForm extends Component {
    
    state = {
        mobile_number:'',
        password:'',
        token:'',
    }

    submitForm()
    {       
            // Axios.post(BASE_URL+'login?mobile_number=98091232&password=secret123',{
            //         headers: {'Content-Type': 'application/json' }
            // })
            // .then( response => {
            //     console.log(response)
            //     this.setState({token : '##$lkajsdf$%^#klajdf'})
            // })
            // .catch((error)=>{
            //     console.log(error)
            // })

            Axios.get('https://stats.nba.com/stats/boxscore')
            .then( (res) => {
                console.log(res);
            }).catch((
                error)=>{console.log(error.response)
            })
    }

    render(){
        return (
            <LoginContext.Provider value = { {token : this.state.token} } >
                <View>
                    <Card>
                        <CardSection>
                            <TextInput 
                                value = {this.state.mobile_number}
                                onChangeText={ mobile_number => this.setState({mobile_number})} 
                                placeholder="Username" placeholderColor="#c4c3cb" />
                        </CardSection>
                        <CardSection>
                            <TextInput
                                secureTextEntry
                                value = {this.state.password}
                                onChangeText={ password => this.setState({password})}
                                placeholder="Password" placeholderColor="#c4c3cb" />
                        </CardSection>
                        <CardSection>
                            {/* {this.renderButton()} */}
                        </CardSection>
                        <CardSection>
                            <Button whenPress={this.submitForm}>
                            Login
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button whenPress={() => this.props.navigation.navigate('RegisterForm')}>
                            Register
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button whenPress={() => this.props.navigation.navigate('Home')}>
                            Home
                            </Button>
                        </CardSection>
                    </Card>
                </View>
            </LoginContext.Provider>
       );
    }
}

const styles = StyleSheet.create({
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color: 'red'
    }
});


export default LoginForm;
