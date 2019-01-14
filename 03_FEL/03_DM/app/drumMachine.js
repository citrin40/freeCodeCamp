var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "drum-machine" },
                React.createElement(Display, null),
                React.createElement(DrumPad, null),
                React.createElement(Slider, null),
                React.createElement(Toggle, null)
            );
        }
    }]);

    return App;
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
                "Test Etwas l\xE4ngerer"
            );
        }
    }]);

    return Display;
}(React.Component);

var DrumPad = function (_React$Component3) {
    _inherits(DrumPad, _React$Component3);

    function DrumPad() {
        _classCallCheck(this, DrumPad);

        return _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).apply(this, arguments));
    }

    _createClass(DrumPad, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { className: "drum-pad" },
                "Q"
            );
        }
    }]);

    return DrumPad;
}(React.Component);

var Slider = function (_React$Component4) {
    _inherits(Slider, _React$Component4);

    function Slider() {
        _classCallCheck(this, Slider);

        return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    _createClass(Slider, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement("input", { type: "range", min: "0", max: "100", className: "range", id: "range" }),
                React.createElement("div", { id: "range-val" })
            );
        }
    }]);

    return Slider;
}(React.Component);

var Toggle = function (_React$Component5) {
    _inherits(Toggle, _React$Component5);

    function Toggle() {
        _classCallCheck(this, Toggle);

        return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
    }

    _createClass(Toggle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "label",
                    { className: "switch" },
                    React.createElement("input", { type: "checkbox" }),
                    React.createElement("span", { className: "slider round" }),
                    "Toggle"
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));