import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native'
import styles from './styles'
import LogoImg from '../../assets/logo.png'
import {useNavigation} from '@react-navigation/native'

export default function Homepage(){
    const navigation = useNavigation()


    function getIncidents(){
        navigation.navigate('incidents')
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg} style={styles.image}/>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.input} onPress={()=>{}}>
                    <Text style={styles.inputText}> Sou uma ONG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.input} onPress={()=>{}}>
                    <Text style={styles.inputText}>Cadastrar uma ONG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.input} onPress={getIncidents}>
                    <Text style={styles.inputText}>Sou um Herói</Text>
                </TouchableOpacity>
            </View>
        </View>

        
    )
}