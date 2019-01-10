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
            return React.createElement(QuoteBox, null);
        }
    }]);

    return App;
}(React.Component);

var QuoteBox = function (_React$Component2) {
    _inherits(QuoteBox, _React$Component2);

    function QuoteBox() {
        _classCallCheck(this, QuoteBox);

        return _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).apply(this, arguments));
    }

    _createClass(QuoteBox, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "quote-box" },
                React.createElement(QuoteAuthor, null),
                React.createElement(QuoteText, null),
                React.createElement(ButtonArea, null)
            );
        }
    }]);

    return QuoteBox;
}(React.Component);

var QuoteSign = function (_React$Component3) {
    _inherits(QuoteSign, _React$Component3);

    function QuoteSign() {
        _classCallCheck(this, QuoteSign);

        return _possibleConstructorReturn(this, (QuoteSign.__proto__ || Object.getPrototypeOf(QuoteSign)).apply(this, arguments));
    }

    _createClass(QuoteSign, [{
        key: "render",
        value: function render() {
            return React.createElement("img", { src: this.props.source, alt: "Twitter Button", id: this.props.direction });
        }
    }]);

    return QuoteSign;
}(React.Component);

var QuoteText = function (_React$Component4) {
    _inherits(QuoteText, _React$Component4);

    function QuoteText() {
        _classCallCheck(this, QuoteText);

        return _possibleConstructorReturn(this, (QuoteText.__proto__ || Object.getPrototypeOf(QuoteText)).apply(this, arguments));
    }

    _createClass(QuoteText, [{
        key: "render",
        value: function render() {
            var sourceLeft = "../../../media/03_FEL/01_RQM/quote_32x32_left.png";
            var sourceRight = "../../../media/03_FEL/01_RQM/quote_32x32_right.png";
            return React.createElement(
                "div",
                { id: "text" },
                React.createElement(QuoteSign, { source: sourceLeft, direction: "quote-left" }),
                "You know you're in love when you can't fall asleep because reality is finally better than your dreams You know you're in love when you can't fall asleep because reality is finally better than your dreams",
                React.createElement(QuoteSign, { source: sourceRight, direction: "quote-right" })
            );
        }
    }]);

    return QuoteText;
}(React.Component);

var QuoteAuthor = function (_React$Component5) {
    _inherits(QuoteAuthor, _React$Component5);

    function QuoteAuthor() {
        _classCallCheck(this, QuoteAuthor);

        return _possibleConstructorReturn(this, (QuoteAuthor.__proto__ || Object.getPrototypeOf(QuoteAuthor)).apply(this, arguments));
    }

    _createClass(QuoteAuthor, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "author" },
                "My Undies is a long author"
            );
        }
    }]);

    return QuoteAuthor;
}(React.Component);

var ButtonArea = function (_React$Component6) {
    _inherits(ButtonArea, _React$Component6);

    function ButtonArea() {
        _classCallCheck(this, ButtonArea);

        return _possibleConstructorReturn(this, (ButtonArea.__proto__ || Object.getPrototypeOf(ButtonArea)).apply(this, arguments));
    }

    _createClass(ButtonArea, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "button-area" },
                React.createElement(ButtonTweet, null),
                React.createElement(ButtonGenerate, null)
            );
        }
    }]);

    return ButtonArea;
}(React.Component);

var ButtonTweet = function (_React$Component7) {
    _inherits(ButtonTweet, _React$Component7);

    function ButtonTweet() {
        _classCallCheck(this, ButtonTweet);

        return _possibleConstructorReturn(this, (ButtonTweet.__proto__ || Object.getPrototypeOf(ButtonTweet)).apply(this, arguments));
    }

    _createClass(ButtonTweet, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: "twitter.com/intent/tweet" },
                React.createElement("img", { src: "../../../media/03_FEL/01_RQM/twitter-white.png", alt: "Twitter Button", id: "tweet-quote" })
            );
        }
    }]);

    return ButtonTweet;
}(React.Component);

var ButtonGenerate = function (_React$Component8) {
    _inherits(ButtonGenerate, _React$Component8);

    function ButtonGenerate() {
        _classCallCheck(this, ButtonGenerate);

        return _possibleConstructorReturn(this, (ButtonGenerate.__proto__ || Object.getPrototypeOf(ButtonGenerate)).apply(this, arguments));
    }

    _createClass(ButtonGenerate, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: "#" },
                React.createElement("img", { src: "../../../media/03_FEL/01_RQM/generate-white.png", alt: "New Quote Button", id: "new-quote" })
            );
        }
    }]);

    return ButtonGenerate;
}(React.Component);

var QUOTES = [{
    quote: "Quote 1",
    author: "Author 1"
}, {
    quote: "Quote 2",
    author: "Author 2"
}, {
    quote: "Quote 3",
    author: "Author 3"
}];

var domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(App, null), domContainer);