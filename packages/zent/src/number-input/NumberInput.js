import React, { PureComponent, Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import isFunction from 'lodash/isFunction';
import noop from 'lodash/noop';
import Input from 'input';
import Icon from 'icon';

export default class NumberInput extends (PureComponent || Component) {
  static propTypes = {
    className: PropTypes.string,
    prefix: PropTypes.string,
    showStepper: PropTypes.bool,
    decimal: PropTypes.number,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    prefix: 'zent',
    showStepper: false,
    value: '',
    decimal: 0,
    disabled: false,
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    const { value, min, max, decimal } = props;
    let { num, upArrow, downArrow } = this.adjustFixed(
      value,
      min,
      max,
      decimal
    );
    num = value === '' ? '' : num;
    this.state = {
      value: num,
      upArrow,
      downArrow
    };
  }

  componentWillReceiveProps(nextProps) {
    let props = this.props;
    if (
      nextProps.decimal !== props.decimal ||
      nextProps.disabled !== props.disabled ||
      nextProps.value !== props.value ||
      nextProps.max !== props.max ||
      nextProps.min !== props.min
    ) {
      const { value, min, max, decimal } = nextProps;
      let { num, upArrow, downArrow } = this.adjustFixed(
        value,
        min,
        max,
        decimal
      );
      num = value === '' ? '' : num;
      this.setState({
        value: num,
        upArrow,
        downArrow
      });
      this.onPropChange(num);
    }
  }

  adjustFixed(num, min, max, len) {
    // 检查min与max范围
    let downArrow = false;
    let upArrow = false;
    if (min !== undefined || max !== undefined) {
      downArrow = Math.round(num * 10 ** len) <= Math.round(min * 10 ** len);
      upArrow = Math.round(num * 10 ** len) >= Math.round(max * 10 ** len);
      num = downArrow ? min : num;
      num = upArrow ? max : num;
    }

    // 四舍五入, 切保留几位小数， 此四舍五入修正了js原生toFixed保留小数点的BUG问题
    num = (Math.round(num * 10 ** len) / 10 ** len).toFixed(len);
    return {
      num,
      upArrow,
      downArrow
    };
  }

  countFied(num, len, count) {
    // 步进器加减的计算
    let result = ((Math.round(num * 10 ** len) + count) / 10 ** len).toFixed(
      len
    );
    let { min, max } = this.props;
    // 检查范围
    return this.adjustFixed(result, min, max, len);
  }

  onChange = ev => {
    let value = ev.target.value;
    if (!value) {
      this.setState({ value });
    } else if (
      /^(\-|\+)?\d+(\.)?$/g.test(value) ||
      /^(\-|\+)?\d+(\.\d+)?$/g.test(value) ||
      /^\d+\.$/g.test(value) ||
      /^(\-|\+)?$/g.test(value)
    ) {
      this.setState({ value });
    }
  };

  onBlur = evt => {
    const { decimal, min, max } = this.props;
    let { value } = this.state;
    if (/^(\-|\+)?$/g.test(value)) {
      value = '';
    }
    value = value.replace(/\.$/g, '');
    let { num, upArrow, downArrow } = this.adjustFixed(
      value,
      min,
      max,
      decimal
    );
    num = value === '' ? '' : num;
    this.setState({
      value: num,
      upArrow,
      downArrow
    });
    this.onPropChange(num);

    const { onBlur } = this.props;
    if (isFunction(onBlur)) {
      onBlur(evt);
    }
  };

  onArrow(disabled, count) {
    if (disabled) return;
    const { value } = this.state;
    const { decimal } = this.props;
    let { num, upArrow, downArrow } = this.countFied(value, decimal, count);
    this.setState({
      value: num,
      upArrow,
      downArrow
    });
    this.onPropChange(num);
  }

  inc = () => {
    const { disabled } = this.props;
    const { upArrow } = this.state;
    const upArrowState = disabled || upArrow;

    this.onArrow(upArrowState, 1);
  };

  dec = () => {
    const { disabled } = this.props;
    const { downArrow } = this.state;
    const downArrowState = disabled || downArrow;

    this.onArrow(downArrowState, -1);
  };

  onPropChange(result) {
    const props = this.props;
    result = result === '' ? '' : parseFloat(result);
    props.onChange({
      target: {
        ...props,
        type: 'number',
        value: result
      },
      preventDefault: noop,
      stopPropagation: noop
    });
  }

  render() {
    const { prefix, className, showStepper, disabled, readOnly } = this.props;
    const { value, upArrow, downArrow } = this.state;

    // 箭头状态
    let upArrowState = disabled || readOnly || upArrow;
    let downArrowState = disabled || readOnly || downArrow;

    // 最外层样式
    const wrapClass = classNames(
      {
        [`${prefix}-number-input-wrapper`]: true,
        [`${prefix}-number-input-count-wrapper`]: showStepper
      },
      className
    );

    // 上arrow样式
    const upArrowClass = classNames({
      [`${prefix}-number-input-arrow`]: true,
      [`${prefix}-number-input-arrowup`]: true,
      [`${prefix}-number-input-arrow-disable`]: upArrowState
    });

    // 下arrow样式
    const downArrowClass = classNames({
      [`${prefix}-number-input-arrow`]: true,
      [`${prefix}-number-input-arrowdown`]: true,
      [`${prefix}-number-input-arrow-disable`]: downArrowState
    });

    // 可传入Input组件的属性
    let inputProps = omit(this.props, [
      // 这几个 Input 的 props 不要透传
      'type',
      // 'addonBefore',
      // 'addonAfter',
      'onChange',

      // 这些是 NumberInput 特有的 props
      'showStepper',
      'min',
      'max',
      'decimal'
    ]);
    return (
      <div className={wrapClass}>
        {showStepper && (
          <span className={upArrowClass} onClick={this.inc}>
            <Icon type="right" />
          </span>
        )}
        <Input
          {...inputProps}
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        {showStepper && (
          <span className={downArrowClass} onClick={this.dec}>
            <Icon type="right" />
          </span>
        )}
      </div>
    );
  }
}
