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
      scaleFlower: false
   
    }
  },

  render: function() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={"cotton"} anchorDetectionTypes={this.PlanesVertical} onAnchorFound={this._onCottonAnchorFound} pauseUpdates={this.state.pauseUpdates}>
         <ViroNode scale={[0,0,0]} animation={{name:"smallScale", run: this.state.scaleCotton, onFinish: this._animateCotton}}>
          
            
         
          <Viro3DObject source={require('./res/objects/cotton/cotton.vrx')}
           
           type="VRX"
           animation={
           {name:'cotton',
                      run:this.state.animateCotton,
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
        <ViroARImageMarker target={"flower"}   anchorDetectionTypes={this.PlanesVertical} onAnchorFound={this._onFlowerAnchorFound}  pauseUpdates={this.state.pauseUpdates}>
         
         <ViroNode scale={[0,0,0]} animation={{name:"scale", run: this.state.scaleFlower, onFinish: this._animateFlower}}>
         <ViroNode  animation={{name:"descale", run: this.state.descaleFlower, onFinish: this._deanimateFlower}}>
         
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
        </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
 
  _onFlowerAnchorFound(scene) {
    this.setState({
      scaleFlower: true,
      descaleFlower: false,
      pauseUpdates: true
    })
  },
  _animateFlower(){
    this.setState({
     animateFlower: true
    })
  },
   _deanimateFlower(){
    this.setState({
     animateFlower: false
    })
  },

   _onCottonAnchorFound(scene) {
    this.setState({
      scaleCotton: true,
      descaleFlower: true,
      pauseUpdates: true
    })
  },
  _animateCotton(){
    this.setState({
     animateCotton: true,
    animateFlower: false
    })
  },
 
  _toggleButtons() {
    this.setState({
      animName: (this.state.animName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },
 

  
});



ViroARTrackingTargets.createTargets({
  flower : {
    source : require('./res/targets/Magnolia.jpg'),
    orientation : "Up",
    physicalWidth : 0.165 // real world width in meters
  },
  cotton: {
    source : require('./res/targets/Southern-Snow.jpg'),
    orientation : "Up",
    physicalWidth : 0.165 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
    
    scale:{properties:{scaleX:.06, scaleY:.06, scaleZ:.06,},
                  duration: 980, delay:500, easing: "EaseInEaseOut"},
    smallScale:{properties:{scaleX:.009, scaleY:.009, scaleZ:.009,},
                  duration: 980, delay:500, easing: "EaseInEaseOut"},              
    descale:{properties:{scaleX:0, scaleY:0, scaleZ:0,},
                  duration: 980, delay:500, easing: "EaseOut"}
   
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