import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
class FrontView extends Component {
    onClickProceed = () =>{
        console.log('In')
        this.props.navigation.navigate('MainApp')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewDesignFirst} />
                <View style={[styles.viewDesignFirst, { width: '50%' }]} />
                <View style={[styles.viewDesignFirst, { width: '40%' }]} />
                <View style={[styles.viewDesignFirst, { width: '30%' }]} />

                <Text style={styles.textStyle}>
                    MessageApp
                </Text>
                <Icons name='comment-alt' size={140} color='#FA58AC' />


                <View style={[styles.viewDesignFirst, { width: '30%' }]} />
                <View style={[styles.viewDesignFirst, { width: '40%' }]} />
                <View style={[styles.viewDesignFirst, { width: '50%' }]} />
                <View style={styles.viewDesignFirst} />
                {/* <View style={[styles.viewDesignFirst, {width:'20%'}]}/> */}

                <TouchableOpacity onPress={this.onClickProceed}>
                    <Text style={styles.clickStyle}>
                        *Click to Proceed*
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }
}
export default FrontView;

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
        margin: 10,
    },
    clickStyle: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FA58AC',
        paddingTop: 10
    },
    viewDesignFirst: {
        borderBottomColor: '#FA58AC',
        borderBottomWidth: 2,
        width: '60%',
        height: 40
    }
});