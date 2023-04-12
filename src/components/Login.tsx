import React from 'react';
import { View } from 'react-native';
import { useTypeSelector } from '../hooks/useTypeSelector';


const Login: React.FC = () => {
    const { users, loading, error } = useTypeSelector(state => state.user)

    return (
        <View>

        </View>
    );
}

export default Login;