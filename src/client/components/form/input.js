import React from 'react';
import Component from '../component.react';

export default class Input extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.any,
    label: React.PropTypes.string,
    labelAfter: React.PropTypes.bool,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
    required: React.PropTypes.bool,
    tag: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    labelAfter: false,
    required: false,
  };

  static counter = 0;

  state = {
    valid: true
  };

  inputId = null;
  prevVal = null;


  getInputId() {
    const {type} = this.props;
    return 'ui-input-' + type + '-' + this.inputId;
  }

  getTags() {
    const {labelAfter, type, name} = this.props;

    var tags = [
      'ui-input',
      'ui-input-' + type,
      'ui-input-named-' + name
    ];

    if (labelAfter) {
      tags.push('ui-input-label-right');
    } else {
      tags.push('ui-input-label-left');
    }

    tags.push('ui-input-' + (this.state.valid ? 'valid' : 'invalid'));

    return tags;
  }

  renderLabel() {
    const {label} = this.props;
    const id = this.getInputId();

    if (!label) {
      return null;
    }

    return (
      <div className="ui-input-label">
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

  renderInput() {
    const id = this.getInputId();
    const {defaultValue, name, tag, type} = this.props;
    const self = this;

    return React.createElement(tag, {
      id: id,
      name: name,
      onKeyUp: (e) => {
        self.onKeyUp(e);
      },
      onChange: (e) => {
        self.onChange(e);
      },
      ref: 'userInput',
      type: type,
      value: defaultValue
    });
  }

  onKeyUp(e) {
    this.changed();

    if (this.props.onKeyUp) {
      this.props.onKeyUp.call(this, e);
    }
  }

  onChange(e) {
    this.changed();

    if (this.props.onChange) {
      this.props.onChange.call(this, e);
    }
  }

  changed() {
    this.validateVisual();

    if (this.props.onKeyUp) {
      this.props.onKeyUp.call(this);
    }
  }

  isEmpty() {
    return !this.val();
  }

  val() {
    if (this.refs.userInput) {
      return this.refs.userInput.getDOMNode().value;
    }

    return null;
  }

  isValid() {
    if (this.props.required && this.isEmpty()) {
      return false;
    }

    return this.validate();
  }

  validate() {
    return true;
  }

  validateVisual() {

    this.setState({
      valid: this.isValid(),
      value: this.val()
    });
  }

  render() {
    const {labelAfter, name} = this.props;

    if (!this.inputId) {
      this.inputId = name;
    }

    const tags = this.getTags().join(' ');
    const htmlLabel = this.renderLabel();
    const htmlInput = this.renderInput();

    var htmlLabelAfter;
    var htmlLabelBefore;

    if (labelAfter) {
      htmlLabelAfter = htmlLabel;
    } else {
      htmlLabelBefore = htmlLabel;
    }

    return (
      <div className={tags}>
        <div className="ui-input-wrapper">
          {htmlLabelBefore}

          <div className="ui-input-container">
            {htmlInput}
          </div>

          {htmlLabelAfter}
        </div>
      </div>
    );
  }
}

