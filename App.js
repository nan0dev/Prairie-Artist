/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Alert
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
 //configs
let secret = require('./config');
var sharedProps = {
  apiKey: secret.KEY,
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/arPaintingsScene');


export default class PrairieArtist extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps : sharedProps
    }
    this._resetExperience = this._resetExperience.bind(this);

  }

  render() {
     return (
      <View style={localStyles.outer} >

     <ViroARSceneNavigator style={localStyles.arView} pbrEnabled = {true} {...this.state.sharedProps} ref={(arNav) => { this._arNav = arNav; }} 
        initialScene={{scene: InitialARScene, passProps:{displayObject:this.state.displayObject}}} viroAppProps={this.state.viroAppProps} />

      

        <View style={{position: 'absolute',  left: 0, right: 0, bottom: 77, alignItems: 'center'}}>
        <TouchableHighlight style={localStyles.buttons}
            onPress={this._resetExperience} >
            <Image source={require("./js/res/refresh.png")} />
          </TouchableHighlight>
          </View>
           
</View>
    );
  }

  _resetExperience(){
    this._arNav.sceneNavigator.push({scene: InitialARScene})
    this.forceUpdate()
  }
  
  
 

}

var localStyles = StyleSheet.create({
    outer : {
    flex : 1,
  },

  arView: {
    flex:1,
  },

  buttons : {
    height: 72,
    width: 72,
    backgroundColor:'#00000000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff00',
  }
});

module.exports = PrairieArtist
