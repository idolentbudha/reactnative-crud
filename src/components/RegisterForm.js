import React,{Component} from 'react';
import styles from '../styles/styles';
import { Card, CardSection, Button } from './common';
import {TextInput, Text} from 'react-native';
import axios from 'axios';
import CONSTANTS from '../config/Constants'

class RegisterForm extends Component{
    state = {
        name:'',
        mobile_number:'',
        password:'',
        error:false,
        errorMessage: ''
    }
    createUser = () => {
        console.log(this.state);
        console.log(CONSTANTS.BASE_URL+'signup?name='+this.state.name+'&mobile_number='+this.state.mobile_number+'&password='+this.state.password)
        axios.post(CONSTANTS.BASE_URL+'signup?name='+this.state.name+'&mobile_number='+this.state.mobile_number+'&password='+this.state.password,{
            headers: {'Content-Type': 'application/json' }
        })
        .then( response => {
            console.log(response.data)
            if( response.status == 200 ){
                this.props.navigation.navigate('Login') 
            }else{
                this.setError('Couldnot Create User');
            }
        })
        .catch( error => {
            console.log(Object.values(error.response.data.errors))
            if(error.response.data.errors){
                let err_msg = '';
                let errors = Object.values(error.response.data.errors)
                for(  let err of errors ){
                    err_msg += '\n'+err[0]
                }
                this.setError(err_msg);
            }else{
                this.setError('Network Error');
            }

        })  
    }

    setError(message){
        this.setState({error: true});
        this.setState({errorMessage : message});
    }
    render(){
         return (
            <Card>
                <CardSection>
                <TextInput 
                    value = {this.state.name}
                    onChangeText={ name => this.setState({name})} 
                    placeholder="name" placeholderColor="#c4c3cb" />
                </CardSection>
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
                    <Button whenPress={this.createUser} >
                        Create
                    </Button>
                </CardSection>
                <CardSection>
                        <Text style={styles.errorTextStyle}>
                        {   (this.state.error )? this.state.errorMessage : ''}
                        </Text>
                </CardSection>
            </Card>
        )
    }
}



export default  RegisterForm;