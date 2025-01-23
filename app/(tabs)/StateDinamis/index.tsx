import React, {useState, Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Counter =() =>{
    const [number, setNumber] = useState(0);
    return(
        <View>
           <Text>{number}</Text>
           <Button title="Tambah" onPress={() => setNumber(number +1)} /> 
        </View>
    )
}
const CCounter =() =>{
    return(
        <View>
            <Text>  </Text>
           <Button title="Pencet dong" onPress={() => alert('kerja bagus')} /> 
        </View>
    )
}

class CounterClass extends Component {
    state ={
        number:0,
    }
    render() {
        return (
            <View>
                <Text>{this.state.number}</Text>
                <Button title="Tambah" onPress={() => this.setState({number : this.state.number +1})}  />
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>
                Ini Tuh Materi Componen dinais dengan State brai
            </Text>
            <Text style={styles.titleSection}>
                function komponen nih brai
            </Text>
            <Counter/>
            <CCounter/>
            <Text style={styles.titleSection}>
                Class komponen nih brai
            </Text>
            <CounterClass />

        </View>
    )   
}

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
    },
    titleSection: {
        marginBottom:15,
    },
})