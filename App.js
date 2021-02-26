import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, SafeAreaView, ScrollView, Alert} from 'react-native';

class App extends Component {

  constructor() {
    super();
    this.state = {
      waarde1: "",
      waarde2: "",
      antwoord: "",
    }
  }

  optellen = () => {
    if (this.state.waarde1 == "" || this.state.waarde2 == "") {
      this.setState({antwoord: "Voer een getal in.."});
    }
    else {
    this.setState({antwoord : parseInt(this.state.waarde1) + parseInt(this.state.waarde2),
    });
  }
}

  aftrekken = () => {
    if (this.state.waarde1 == "" || this.state.waarde2 == "") {
      this.setState({antwoord: "Voer een getal in.."});
    }
    else {
    this.setState({antwoord : parseInt(this.state.waarde1) - parseInt(this.state.waarde2),
    });
  }
}

  delen = () => {
    if (this.state.waarde1 == "" || this.state.waarde2 == "") {
      this.setState({antwoord: "Voer een getal in.."});
    }
    else {
    this.setState({antwoord : parseInt(this.state.waarde1) / parseInt(this.state.waarde2),
    });
  }
}

  vermenigvuldigen = () => {
    if (this.state.waarde1 == "" || this.state.waarde2 == "") {
      this.setState({antwoord: "Voer een getal in.."});
    }
    else {
    this.setState({antwoord : parseInt(this.state.waarde1) * parseInt(this.state.waarde2),
    });
  }
}

  render() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.text}>
        Opdracht 5 {'\n'}Sander Verschoor {'\n\n'}
      </Text>

      <View style={styles.input_wrap}>
      <TextInput
      keyboardType='numeric'
        style={styles.input}
        onChangeText={(waarde1) => this.setState({waarde1})}
        placeholder="Voer een getal in.."
        placeholderTextColor="black"
        />
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(waarde2) => this.setState({waarde2})}
        placeholder="Voer een getal in.."
        placeholderTextColor="black"
        />
        </View>

    <View style={styles.main}>
      <TouchableOpacity style={styles.button}  onPress={this.optellen}>
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={this.aftrekken}>
        <Text>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={this.delen}>
        <Text>/</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={this.vermenigvuldigen}>
        <Text>x</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.antwoord}>
     {this.state.antwoord}
    </Text>
</ScrollView>



    );
  }
}
const styles = StyleSheet.create({

contentContainer: {
  flex: 1,
  justifyContent: 'center',
},

input_wrap: {
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row',
  marginBottom: 50,
},

input: {
  height: 40,
  width: 150,
  borderColor: '#48f76e',
  borderWidth: 1,
  borderRadius: 15,
  textAlign: 'center'
},

button: {
  alignItems: "center",
  backgroundColor: "#48f76e",
  padding: 20,
  borderRadius: 15,
},


main: {
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row',
},


text: {
fontSize: 20,
fontWeight: 'bold',
textAlign: 'center',
color: 'black',
},

antwoord: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'black',
  marginTop: 30,
},

});

export default App;
