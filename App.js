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
  TouchableOpacity,
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

      

        <View style={{position: 'absolute', top:1, left: 0, right: 15, bottom: 0, alignItems: 'flex-end'}}>
        <TouchableOpacity style={localStyles.buttons}
            onPress={this._resetExperience} >
            <Image source={require("./js/res/refresh.png")} />
          </TouchableOpacity>
          </View>
          
          <View style={{position: 'absolute', right: 15, bottom: 20, alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={this._sresetExperience}>
                    <Image source={require("./js/res/question.png")} />
              </TouchableOpacity>
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
    // height: 62,
    // width: 62,
    // backgroundColor:'#00000000',
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: '#ffffff00',
  }
});

module.exports = PrairieArtist
