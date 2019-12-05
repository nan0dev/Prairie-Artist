import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Button,
  StatusBar,
  DeviceEventEmitter
} from 'react-native';
class ModalBaseScene extends Component {
    constructor(props, state) {
        super(props);
        this.open = () => this.setState({ visible: true, text: "testggggg" });
        this.text = () => this.state.text;
        this.close = () => this.setState({ visible: false });
        this.isVisible = () => this.state.visible;
        this.state = Object.assign(Object.assign({}, state), { visible: false, text: "test" });
    }
    renderButton() {
     
    }
    
    render() {
       this.eventListener = DeviceEventEmitter.addListener('eventKey',this.handleEvent);
        return (
       

      <View style={styles.view}>
        {this.renderButton()}
        {this.renderModal()}
      </View>
    );
    }
    handleEvent=(event)=>{
      console.log(event)
     this.setState({ visible: true, text: event.text });
}

}
var localStyles = StyleSheet.create({
    outer : {
    flex : 1,
  },

  buttons : {
    // height: 62,
    // width: 62,
    // backgroundColor:'#00000000',
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: '#ffffff00',
  }
});
const styles = StyleSheet.create({
    view: {
       
    },
});
export default ModalBaseScene;
