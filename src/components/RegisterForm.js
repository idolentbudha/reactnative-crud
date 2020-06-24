import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardSection, Button } from './common';

class RegisterForm extends Component{
    render(){
         return (
            <Card>
                 <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}


const styles = StyleSheet.create({
    pickerTextStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
});

export default  RegisterForm;