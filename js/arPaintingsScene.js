'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroOrbitCamera,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
  ViroAmbientLight,
  ViroDirectionalLight,
} from 'react-viro';

var createReactClass = require('create-react-class');


var ARCarDemo = createReactClass({
  getInitialState() {
    return {
      playAnim: false,
      animateFlower: false,
   
    }
  },
//#bcbbb8
//#fff6ef
  render: function() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={"logo"} anchorDetectionTypes={this.PlanesVertical} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
         <ViroNode scale={[0,0,0]} animation={{name:"scaleFlower", run: this.state.animateFlower,}}>
          <ViroAmbientLight color="#bcbbb8"/>
              <ViroSpotLight position={[0.3, 1, 0.6]}
                            color="#fff6ef"
                            direction={[0, 0, -0.3]}
                            innerAngle={0}
                            outerAngle={1000}
                          />
         
          <Viro3DObject source={require('./res/objects/flower/flower.vrx')}
           
           type="VRX"
           animation={
           {name:'flower',
                      run:this.state.animateFlower,
                      loop:false,
                     duration:1500}}
            
            />
       

       
          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, 0, 0]}
            width={3.5} height={3.5}
            arShadowReceiver={true} />
        </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
  _onAnchorFound() {
    this.setState({
      animateFlower: true,
      pauseUpdates: true
    })
  },
  _toggleButtons() {
    this.setState({
      animName: (this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },
 
  _animateFinished(){
    this.setState({
     
    })
  },
});



ViroARTrackingTargets.createTargets({
  logo : {
    source : require('./res/targets/Magnolia.jpg'),
    orientation : "Up",
    physicalWidth : 0.165 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
    
    scaleFlower:{properties:{scaleX:.06, scaleY:.06, scaleZ:.06,},
                  duration: 980, delay:500, easing: "EaseInEaseOut"}
   
});

ViroMaterials.createMaterials({
  flower: {
    roughness: 1.0,
    metalness: 0.0,
    lightingModel: "PBR"
  },
  surfaceMaterial:{

  }
});

module.exports = ARCarDemo;