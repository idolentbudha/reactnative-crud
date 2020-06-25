import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {Card,CardSection} from './common';
import axios from 'axios';
import CONSTANTS from '../config/Constants'
import {AuthContext} from '../context/Context';

class Home extends Component {
    
    static contextType = AuthContext;

    state ={
        data:[]
    }

    componentWillMount(){
        const {token} = this.context

        const  header ={ headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }}

        const bodyParameters = {
            key: 'value'
        }
        
        axios.get(
            `${CONSTANTS.BASE_URL}home`,
            bodyParameters,
            header
        )
        .then( (response) => {
            if(response.status == 200){
                this.setState({data: response.data.data.information});
            }
        })
        .catch((error)=>{
            console.log(error.response.data)
        });
    }

    render(){
        return (                
                <View>
                    <Card>
                        <CardSection>
                            <Text>{this.state.data}
                            </Text>
                        </CardSection>
                    </Card>
                </View>
        );
    }
}

export default Home;
