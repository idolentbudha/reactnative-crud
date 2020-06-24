import React from 'react';
import {Text, View,  Modal,StyleSheet} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onReject }) => {
    return (
    
        <Modal
           animationType="slide"
           transparent={false}
           visible={visible}
           onRequestClose={() => {}}
        >
            <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>
                        {children}
                    </Text>
                </CardSection>
                
                <CardSection style={styles.cardSectionStyle}>
                    
                        <Button whenPress={onAccept} >
                            Yes
                        </Button>
                        <Button whenPress={onReject}>
                                No
                            </Button>
                    
                </CardSection>
                
            </View>
       </Modal>    
    
    );
};

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    cardSectionStyle:{
        justifyContent: 'center'
    },
    textStyle:{
        textAlign:'center',
        fontSize: 18,
        lineHeight: 40,
        flex:1
    },

});

export {Confirm};