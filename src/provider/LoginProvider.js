import React, {Component} from 'react';

const LoginContext = React.createContext()

const LoginProvider = () => {
    state = {
        token:''
    }
    return (
        <LoginContext.Provider value = {state.token = ''} >
                {this.props.children}
        </LoginContext.Provider>
    );
}


export { LoginProvider, LoginContext} ;
