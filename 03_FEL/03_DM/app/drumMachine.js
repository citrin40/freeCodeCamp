var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drumBox1 = [{
    key: "Q",
    keycode: 81,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    id: 'Heater-1'
}, {
    key: "W",
    keycode: 87,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    id: 'Heater-2'
}, {
    key: "E",
    keycode: 69,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    id: 'Heater-3'
}, {
    key: "A",
    keycode: 65,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    id: 'Heater-4'
}, {
    key: "S",
    keycode: 83,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    id: 'Clap'
}, {
    key: "D",
    keycode: 68,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    id: 'Open-HH'
}, {
    key: "Z",
    keycode: 90,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    id: 'Kick-n-Hat'
}, {
    key: "X",
    keycode: 88,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    id: 'Kick'
}, {
    key: "C",
    keycode: 67,
    audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    id: 'Closed-HH'
}];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            volume: 50,
            displayText: 'Press any Button'

        };

        _this.playSound = _this.playSound.bind(_this);
        _this.changeVolume = _this.changeVolume.bind(_this);

        return _this;
    }

    _createClass(App, [{
        key: 'playSound',
        value: function playSound(e) {
            var audioElement = document.getElementById(e.target.value);
            audioElement.volume = this.state.volume / 100;
            audioElement.play();

            var displayText = drumBox1.filter(function (el) {
                return audioElement.id == el.key;
            }).shift().id;
            this.setState({
                displayText: displayText
            });
        }
    }, {
        key: 'changeVolume',
        value: function changeVolume(e) {
            this.setState({
                volume: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'drum-machine' },
                React.createElement(Display, { displayText: this.state.displayText }),
                React.createElement(DrumPad, { playSound: this.playSound }),
                React.createElement(Slider, { value: this.state.volume, changeVolume: this.changeVolume })
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'display' },
                this.props.displayText
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
        key: 'renderDrumButton',
        value: function renderDrumButton(i) {
            return React.createElement(DrumButton, {
                className: 'drum-pad',
                playSound: this.props.playSound,
                value: drumBox1[i].key,
                source: drumBox1[i].audioSource,
                key: i
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var rows = 3,
                cols = 3;
            return React.createElement(
                'div',
                null,
                [].concat(_toConsumableArray(new Array(rows))).map(function (x, rowIndex) {

                    return React.createElement(
                        'div',
                        { className: 'row', key: rowIndex },
                        [].concat(_toConsumableArray(new Array(cols))).map(function (y, colIndex) {
                            return _this4.renderDrumButton(rowIndex * cols + colIndex);
                        })
                    );
                })
            );
        }
    }]);

    return DrumPad;
}(React.Component);

var DrumButton = function (_React$Component4) {
    _inherits(DrumButton, _React$Component4);

    function DrumButton() {
        _classCallCheck(this, DrumButton);

        return _possibleConstructorReturn(this, (DrumButton.__proto__ || Object.getPrototypeOf(DrumButton)).apply(this, arguments));
    }

    _createClass(DrumButton, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            return React.createElement(
                'button',
                { className: 'drum-pad', onClick: function onClick(e) {
                        return _this6.props.playSound(e);
                    }, value: this.props.value },
                this.props.value,
                React.createElement(
                    'audio',
                    { className: 'clip', id: this.props.value },
                    React.createElement('source', { src: this.props.source, type: 'audio/mpeg' })
                )
            );
        }
    }]);

    return DrumButton;
}(React.Component);

var Slider = function (_React$Component5) {
    _inherits(Slider, _React$Component5);

    function Slider() {
        _classCallCheck(this, Slider);

        return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    _createClass(Slider, [{
        key: 'render',
        value: function render() {
            var _this8 = this;

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement('input', {
                    type: 'range', min: '0', max: '100',
                    className: 'range', id: 'range',
                    value: this.props.value,
                    onChange: function onChange(e) {
                        return _this8.props.changeVolume(e);
                    } }),
                React.createElement(
                    'div',
                    { id: 'range-val' },
                    'Vol. ',
                    this.props.value
                )
            );
        }
    }]);

    return Slider;
}(React.Component);

var Toggle = function (_React$Component6) {
    _inherits(Toggle, _React$Component6);

    function Toggle() {
        _classCallCheck(this, Toggle);

        return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
    }

    _createClass(Toggle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'label',
                    { className: 'switch' },
                    React.createElement('input', { type: 'checkbox' }),
                    React.createElement('span', { className: 'slider round' })
                ),
                React.createElement(
                    'p',
                    null,
                    'Drums'
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    var keyCodeExists = function keyCodeExists(el) {
        return el.keycode == event.keyCode;
    };

    if (event.keyCode !== undefined && drumBox1.some(keyCodeExists)) {

        var buttonJson = drumBox1.filter(function (el) {
            if (el.keycode == event.keyCode) {
                return el;
            }
        }).shift();

        var button = document.getElementById(buttonJson.key).parentElement;

        button.click();
    }
});