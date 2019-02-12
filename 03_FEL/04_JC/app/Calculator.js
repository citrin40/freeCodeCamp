var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.enterNum = _this.enterNum.bind(_this);
        _this.clear = _this.clear.bind(_this);
        _this.negate = _this.negate.bind(_this);
        _this.percentify = _this.percentify.bind(_this);
        _this.calculate = _this.calculate.bind(_this);

        _this.state = {
            displayText: 0,
            lastInput: '',
            formula: '',
            action: '',
            clearCount: 0
        };
        return _this;
    }

    _createClass(Calculator, [{
        key: 'enterNum',
        value: function enterNum(e) {
            var buttonValue = e.target.innerText;
            var newText = !(this.state.displayText === 0) ? Number(this.state.displayText + buttonValue) : buttonValue;

            this.setState({
                displayText: newText,
                lastInput: buttonValue,
                formula: this.state.formula + buttonValue
            });
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.setState({
                displayText: 0,
                clearCount: this.state.clearCount + 1
            });
        }
    }, {
        key: 'negate',
        value: function negate() {
            this.setState({
                displayText: this.state.displayText * -1
            });
        }
    }, {
        key: 'percentify',
        value: function percentify() {
            this.setState({
                displayText: Number(this.state.displayText) / 100
            });
        }
    }, {
        key: 'add',
        value: function add() {}
    }, {
        key: 'calculate',
        value: function calculate() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'calculator' },
                React.createElement(Display, { text: this.state.displayText }),
                React.createElement(Button, { className: 'button utility-button', content: this.state.lastInput === '' ? 'AC' : 'C',
                    pushButton: this.clear }),
                React.createElement(Button, { className: 'button utility-button', content: '+/-', pushButton: this.negate }),
                React.createElement(Button, { className: 'button utility-button', content: '%', pushButton: this.percentify }),
                React.createElement(Button, { className: 'button math-button', content: '\xF7', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '7', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '8', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '9', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button math-button', content: 'x', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '4', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '5', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '6', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button math-button', content: '-', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '1', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '2', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '3', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button math-button', content: '+', pushButton: this.enterNum }),
                React.createElement(Button, { id: 'zero', className: 'button', content: '0', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button number-button', content: '.', pushButton: this.enterNum }),
                React.createElement(Button, { className: 'button math-button', content: '=', pushButton: this.enterNum })
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