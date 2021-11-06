/**
 * Define actions to manage tip section
 */
(function () {
  'use strict';

  function tipPanel() {
    const defaultTips = [
      'Tip: ¡Usa flechas para mover un objeto seleccionado en 1 píxel.',
      'Tip: Shift + Click para seleccionar y modificar varios objetos.',
      'Tip: Mantenga presionada la tecla Mayús al girar un objeto para saltos en ángulo de 15 °.',
      'Tip: Mantenga presionada la tecla Mayús al dibujar una línea para saltos en ángulo de 15 °.',
      'Tip: Ctrl +/-, Ctrl + rueda del mouse para acercar y alejar!',
    ]
    const _self = this;
    $(`${this.containerSelector} .canvas-holder .content`).append(`
    <div id="tip-container">${defaultTips[parseInt(Math.random() * defaultTips.length)]}</div>`)
    this.hideTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).hide();
    }

    this.showTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).show();
    }

    this.updateTip = function (str) {
      typeof str === 'string' && $(`${_self.containerSelector} .canvas-holder .content #tip-container`).html(str);
    }
  }

  window.ImageEditor.prototype.initializeTipSection = tipPanel;
})();