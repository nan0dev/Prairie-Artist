import React, { Component } from 'react';

// @ts-ignore
import Modal from 'react-native-modal';
import ModalBaseScene from './ModalBaseScene.js';
import DefaultModalContent from './DefaultModalContent.js';

class FancyModal extends ModalBaseScene {
  renderModal(): React.ReactElement<any> {
    return (
      <Modal
        testID={'modal'}
        isVisible={this.isVisible()}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={0}
        animationOutTiming={0}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}>
        <DefaultModalContent onPress={this.close} content={this.text()} />
      </Modal>
    );
  }
}

export default FancyModal;