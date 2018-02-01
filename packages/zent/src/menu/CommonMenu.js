import React, { Component, PureComponent } from 'react';
import { getKeyFromChildrenIndex } from './utils';

export default class CommonMenu extends (PureComponent || Component) {
  renderCommonMenuItem(component, index, subPrefix, extraProps) {
    const newChildProps = {
      specKey: getKeyFromChildrenIndex(component, index, subPrefix),
      onClick: this.handleClick,
      ...extraProps,
    };

    return React.cloneElement(component, newChildProps);
  }
}
