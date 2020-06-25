import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from '../styles/styles';
import {Card,CardSection,Button} from './common';
import axios from 'axios';
import CONSTANTS from '../config/Constants'
import {AuthContext} from '../context/Context';

class LoginForm extends Component {
    
    state = {
        mobile_number:'123',
        password:'secret123',
        token:'',
        error:false,
        errorMessage: ''
    }
    
    submitForm = ({setToken }) =>
    {       
        console.log('URL:',`${CONSTANTS.BASE_URL}login?mobile_number=${this.state.mobile_number}&password=${this.state.password}`)

            axios.post(
                `${CONSTANTS.BASE_URL}login?mobile_number=${this.state.mobile_number}&password=${this.state.password}`,
                { headers: {'Content-Type': 'application/json' }
            })
            .then( response => {  
                console.log('RESPONSE:',response.data.data.token);           
                if( response.status == 200 ){
                    this.setState( {token: response.data.data.token} )
                    setToken(response.data.data.token);
                    console.log('*******TOKEN ISSUE SUCESSFULLY***********');
                }else{
                    this.setError('Invalid Credentials');
                }
                
            })
            .catch(error=>{
                console.log(error.response.data)
                if( error.response.data.errors && error.response.data.errors.length != 0){
                    let err_msg = '';
                    let errors = Object.values(error.response.data.errors)
                    for(  let err of errors ){
                        err_msg += '\n'+err[0]
                    }
                    this.setError(err_msg);
                }else{
                    this.setError('Invalid Credentials');
                }
            })       
    }

    setError(message){
        this.setState({error: true});
        this.setState({errorMessage : message});
    }

    render(){
        return (                
                <View>
                    {   (this.state.token != '')?( this.props.navigation.navigate('Home') ) : console.log('no token')}
                    <Card>
                        <CardSection>                            
                            <TextInput 
                                value = {this.state.mobile_number}
                                onChangeText={ mobile_number => this.setState({mobile_number})} 
                                placeholder="Mobile No." placeholderColor="#c4c3cb" />
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
                        <AuthContext.Consumer>
                            {({ token, setToken }) => (
                            <Button whenPress={()=> this.submitForm({ setToken })}>
                                Login
                            </Button>
                            )}
                        </AuthContext.Consumer>
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
                        <CardSection>
                        <Text style={styles.errorTextStyle}>
                        {   (this.state.error )? this.state.errorMessage : ''}
                        </Text>
                        </CardSection>
                    </Card>
                </View>
       );
    }
}

export default LoginForm;
