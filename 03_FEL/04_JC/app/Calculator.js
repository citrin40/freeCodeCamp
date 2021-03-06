var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.enterNum = function (e) {
            var buttonValue = e.target.innerText;
            var newText = !_this.state.overwrite ? Number(_this.state.displayText + buttonValue) : buttonValue;

            _this.setState({
                displayText: newText,
                lastInput: buttonValue,
                formula: _this.state.formula + buttonValue,
                overwrite: false,
                clearCount: 0
            });
        };

        _this.clear = function () {
            switch (_this.state.clearCount) {
                case 0:
                    _this.setState({
                        displayText: 0,
                        clearCount: _this.state.clearCount + 1
                    });
                    break;
                case 1:
                    _this.setState({
                        displayText: 0,
                        clearCount: 0,
                        lastInput: '',
                        action: '',
                        firstTerm: 0,
                        overwrite: true
                    });
                    break;

            }
        };

        _this.decimalPoint = function () {

            var newText = _this.state.displayText.toString().split('').pop() === '.' ? _this.state.displayText : _this.state.displayText + '.';

            _this.setState({
                displayText: newText
            });
        };

        _this.negate = function () {
            _this.setState({
                displayText: _this.state.displayText * -1
            });
        };

        _this.percentify = function () {
            _this.setState({
                displayText: Number(_this.state.displayText) / 100
            });
        };

        _this.operator = function (e) {
            if (_this.state.action && typeof _this.state.lastInput === 'number') {
                _this.calculate();
            } else {
                var actionText = e.target.innerText;
                _this.setState({
                    firstTerm: Number(_this.state.displayText),
                    action: actionText,
                    overwrite: true,
                    lastInput: actionText
                });
            }
        };

        _this.calculate = function () {
            switch (_this.state.action) {
                case '+':
                    _this.setState({
                        displayText: _this.state.firstTerm + Number(_this.state.displayText)
                    });
                    break;
                case '-':
                    _this.setState({
                        displayText: _this.state.firstTerm - Number(_this.state.displayText)
                    });
                    break;
                case 'x':
                    _this.setState({
                        displayText: _this.state.firstTerm * Number(_this.state.displayText)
                    });
                    break;
                case '÷':
                    _this.setState({
                        displayText: _this.state.firstTerm / Number(_this.state.displayText)
                    });
                    break;
                default:
                    console.log('calculated');
            }
        };

        _this.state = {
            displayText: 0,
            lastInput: '',
            action: '',
            clearCount: 0,
            firstTerm: 0,
            overwrite: true
        };
        return _this;
    }

    _createClass(Calculator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'calculator' },
                React.createElement(Display, { text: this.state.displayText }),
                React.createElement(Button, { id: 'clear', className: 'button utility-button', content: this.state.lastInput === '' ? 'AC' : 'C',
                    pushButton: this.clear }),
                React.createElement(Button, { className: 'button utility-button', content: '+/-', pushButton: this.negate }),
                React.createElement(Button, { className: 'button utility-button', content: '%', pushButton: this.percentify }),
                React.createElement(Button, { id: 'divide', className: 'button math-button', content: '\xF7', pushButton: this.operator }),
                React.createElement(Button, { id: 'seven', className: 'button number-button', content: '7', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'eight', className: 'button number-button', content: '8', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'nine', className: 'button number-button', content: '9', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'multiply', className: 'button math-button', content: 'x', pushButton: this.operator }),
                React.createElement(Button, { id: 'four', className: 'button number-button', content: '4', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'five', className: 'button number-button', content: '5', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'six', className: 'button number-button', content: '6', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'subtract', className: 'button math-button', content: '-', pushButton: this.operator }),
                React.createElement(Button, { id: 'one', className: 'button number-button', content: '1', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'two', className: 'button number-button', content: '2', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'three', className: 'button number-button', content: '3', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'plus', className: 'button math-button', content: '+', pushButton: this.operator }),
                React.createElement(Button, { id: 'zero', className: 'button', content: '0', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'decimal', className: 'button number-button', content: '.', pushButton: this.decimalPoint }),
                React.createElement(Button, { id: 'equals', className: 'button math-button', content: '=', pushButton: this.calculate })
            );
        }
    }]);

    return Calculator;
}(React.Component);

var Display = function (_React$Component2) {
    _inherits(Display, _React$Component2);

    function Display() {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
    }

    _createClass(Display, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'display' },
                React.createElement(
                    'span',
                    null,
                    this.props.text
                )
            );
        }
    }]);

    return Display;
}(React.Component);

var Button = function (_React$Component3) {
    _inherits(Button, _React$Component3);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'button',
                { className: this.props.className, id: this.props.id, onClick: function onClick(e) {
                        return _this4.props.pushButton(e);
                    },
                    value: this.props.content },
                this.props.content
            );
        }
    }]);

    return Button;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));