var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Calculator, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "calculator" },
                React.createElement(Display, null),
                React.createElement(Button, { className: "button utility-button", content: "AC" }),
                React.createElement(Button, { className: "button utility-button", content: "+/-" }),
                React.createElement(Button, { className: "button utility-button", content: "%" }),
                React.createElement(Button, { className: "button math-button", content: "\xF7" }),
                React.createElement(Button, { className: "button number-button", content: "7" }),
                React.createElement(Button, { className: "button number-button", content: "8" }),
                React.createElement(Button, { className: "button number-button", content: "9" }),
                React.createElement(Button, { className: "button math-button", content: "x" }),
                React.createElement(Button, { className: "button number-button", content: "4" }),
                React.createElement(Button, { className: "button number-button", content: "5" }),
                React.createElement(Button, { className: "button number-button", content: "6" }),
                React.createElement(Button, { className: "button math-button", content: "-" }),
                React.createElement(Button, { className: "button number-button", content: "1" }),
                React.createElement(Button, { className: "button number-button", content: "2" }),
                React.createElement(Button, { className: "button number-button", content: "3" }),
                React.createElement(Button, { className: "button math-button", content: "+" }),
                React.createElement(Button, { id: "zero", className: "button", content: "0" }),
                React.createElement(Button, { className: "button number-button", content: "." }),
                React.createElement(Button, { className: "button math-button", content: "=" })
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "display" },
                "Display"
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
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { className: this.props.className, id: this.props.id },
                this.props.content
            );
        }
    }]);

    return Button;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));