import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'
import { trySend } from '../../ReduxStore/ActionFolder/Messages'
class MessagesView extends Component {
    pressButton = () =>{
        console.log('na press')
        this.props.sendIt()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{width:'100%', flexDirection:'row'}}>
                    <TextInput style={styles.inputStyle} placeholder='Enter Text' />
                        <View style={{width:'15%'}}>
                            <TouchableOpacity style={{padding:4}} onPress={this.pressButton}>
                            <Icons name='space-shuttle' size={40} color='#FA58AC'/>
                            </TouchableOpacity>

                        </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        sendIt: () => dispatch(trySend())
    }
    
}

export default connect(null, mapDispatchToProps)(MessagesView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
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
        width: '85%',
        borderColor:'#FA58AC',
        borderWidth:3,
        borderRadius: 30,
        fontWeight:'bold',
        fontSize: 22,
        color: '#3B0B17',

        // transform: [
        //     { translateX: 0 },
        //     { translateY: -125 }
        // ]
    }
});