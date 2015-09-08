import React from 'react';
import Component from '../component.react';

var inputCounter = 0;

export default class Input extends Component {
  static propTypes = {
    labelAfter: React.PropTypes.bool,
    required: React.PropTypes.bool,
    onKeyUp: React.PropTypes.func,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    labelAfter: false,
    required: false,
    type: 'text'
  };

  static counter = 0;

  state = {
    valid: true
  };

  inputId = null;
  prevVal = null;

  getInputId() {
    const {type} = this.props;
    return 'ui-input-' + type + '-' + this.inputId;
  }

  getTags() {
    const {labelAfter, type, name} = this.props;

    var tags = [
      'ui-input',
      'ui-input-' + type,
      'ui-input-named-' + name
    ];

    if (labelAfter) {
      tags.push('ui-input-label-right');
    } else {
      tags.push('ui-input-label-left');
    }

    tags.push('ui-input-' + (this.state.valid ? 'valid':'invalid'));

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

  renderInput() {
    const id = this.getInputId();
    const {type, name} = this.props;
    const obj = this;

    return (
      <input
        id={id}
        name={name}
        onKeyUp={(e) => {
          obj.onKeyUp(e);
        }}
        ref="userInput"
        type={type} />
    );
  }

  onKeyUp() {
    this.changed();

    if (this.props.onKeyUp) {
      this.props.onKeyUp.call(this);
    }
  }

  changed() {
    this.validateVisual();

    if (this.props.onKeyUp) {
      this.props.onKeyUp.call(this);
    }
  }

  isEmpty() {
    return !this.val();
  }

  val() {
    if (this.refs.userInput) {
      return this.refs.userInput.getDOMNode().value;
    }

    return null;
  }

  isValid() {
    if (this.props.required && this.isEmpty()) {
      return false;
    }

    return this.validate();
  }

  validate() {
    return true;
  }

  validateVisual() {

    this.setState({
      valid: this.isValid()
    });
  }

  render() {
    const {labelAfter, type, name} = this.props;

    if (!this.inputId) {
      this.inputId = ++ inputCounter;
    }

    const tags = this.getTags().join(' ');
    const htmlLabel = this.renderLabel();
    const htmlInput = this.renderInput();

    var htmlLabelAfter;
    var htmlLabelBefore;

    if (labelAfter) {
      htmlLabelAfter = htmlLabel;
    } else {
      htmlLabelBefore = htmlLabel;
    }

    return (
      <div className={tags}>
        {htmlLabelBefore}

        <div className="ui-input-container">
          {htmlInput}
        </div>

        {htmlLabelAfter}
      </div>
    );
  }
}

