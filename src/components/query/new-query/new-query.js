import template from './new-query.html';
import styles from './new-query.scss';

export default {
  template,
  bindings: {
    newq: '&',
    emptyReturn: '<',
  },
  controller,
};

function controller() {
  this.emptyReturn = false;
  this.styles = styles;
  this.item = {};
  this.item.name = `query${Math.round(Math.random() * 10000)}`;

  this.addq = function addq() {
    const item = this.item;
    this.newq({ qobj: item });
    this.item = null;
  };

}