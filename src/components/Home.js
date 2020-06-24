import {Component, useContext} from 'react';
import {Button,StyleSheet, Text, View} from 'react-native';

import {Card,CardSection,Spinner} from './common';
import { LoginContext } from '../provider/LoginProvider';
import Axios from 'axios';
import {BASE_URL} from '../config/Constants'



class Home extends Component {
    state = { data: [] }
    
    componentWillUnmount(){
        const loginResponse = useContext(LoginContext);
        Axios.defaults.headers.common['Authorization'] = loginResponse.token;
        Axios.get(BASE_URL+'home')
        .then( (response) => {
            if(response.status){
                this.state.data = response.data.data;
            }

        })
        .catch();
    }

    render(){
        return (
            <View>
                <Card>
                    <CardSection>
                        <Text>{this.state.data.information}</Text>
                    </CardSection>
                </Card>
            </View>
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


export default Home;
