import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
class HomeLog extends Component {

    onNext = () =>{
        this.props.navigation.navigate('Message')
    }

    render() {
        console.log('HOME LOG IN')
        return (

            <View style={styles.container}>
                    
                    
                <View style={{width:'100%', alignItems:'center', flex:1}}>
                    
                    <Text style={styles.textStyle}>Enter Name</Text>
                <TextInput style={styles.inputStyle} placeholder='' textAlign={'center'} />
                </View>
                    <TouchableOpacity onPress={this.onNext}>
                        <Icons name='arrow-alt-circle-right' size={40} color='#FA58AC'/>
                    </TouchableOpacity>
                    

            </View>
        )
    }
}
export default HomeLog;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8E0F7',
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FA58AC',
        fontWeight:'bold'
    },
    clickStyle: {
        fontSize: 80,
        textAlign: 'center',
        color: '#FA58AC',
        paddingTop: 10
    },
    inputStyle: {
        backgroundColor: 'transparent',
        width: '90%',
        borderColor:'#FA58AC',
        borderWidth:3,
        fontWeight:'bold',
        fontSize: 22,
        color: '#3B0B17',
        // transform: [
        //     { translateX: 0 },
        //     { translateY: -125 }
        // ]
    }
});