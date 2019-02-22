var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var initial = "# Welcome to my React Markdown Previewer!\n" + "\n" + "## This is a sub-heading...\n" + "### And here's some other cool stuff:\n" + "  \n" + "Heres some code, `<div></div>`, between 2 backticks.\n" + "\n" + "```\n" + "// this is multi-line code:\n" + "\n" + "function anotherExample(firstLine, lastLine) {\n" + "  if (firstLine == '```' && lastLine == '```') {\n" + "    return multiLineCode;\n" + "  }\n" + "}\n" + "```\n" + "  \n" + "You can also make text **bold**... whoa!\n" + "Or _italic_.\n" + "Or... wait for it... **_both!_**\n" + "And feel free to go crazy ~~crossing stuff out~~.\n" + "\n" + "There's also [links](https://www.freecodecamp.com), and\n" + "> Block Quotes!\n" + "\n" + "And if you want to get really crazy, even tables:\n" + "\n" + "Wild Header | Crazy Header | Another Header?\n" + "------------ | ------------- | ------------- \n" + "Your content can | be here, and it | can be here....\n" + "And here. | Okay. | I think we get it.\n" + "\n" + "- And of course there are lists.\n" + "  - Some are bulleted.\n" + "     - With different indentation levels.\n" + "        - That look like this.\n" + "\n" + "\n" + "1. And there are numbererd lists too.\n" + "1. Use just 1s if you want! \n" + "1. But the list goes on...\n" + "- Even if you use dashes or asterisks.\n" + "* And last but not least, let's not forget embedded images:\n" + "\n" + "![React Logo w/ Text](https://goo.gl/Umyytc)\n";

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            input: initial,
            output: ''
        };
        _this.parseMarkup = _this.parseMarkup.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "parseMarkup",
        value: function parseMarkup(e) {
            console.log(e);
            var input = e ? e.target.value : this.state.input;
            console.log(input);

            var rawMarkdown = marked(input);

            this.setState({
                input: input,
                output: rawMarkdown
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { id: "container" },
                React.createElement(Editor, { parseMarkup: function parseMarkup(e) {
                        return _this2.parseMarkup(e);
                    }, value: this.state.input }),
                React.createElement(Previewer, { markup: { __html: this.state.output } })
            );
        }
    }]);

    return App;
}(React.Component);

var Editor = function (_React$Component2) {
    _inherits(Editor, _React$Component2);

    function Editor() {
        _classCallCheck(this, Editor);

        return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
    }

    _createClass(Editor, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.parseMarkup();
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "textarea",
                { id: "editor", onChange: function onChange(e) {
                        return _this4.props.parseMarkup(e);
                    } },
                this.props.value
            );
        }
    }]);

    return Editor;
}(React.Component);

var Previewer = function (_React$Component3) {
    _inherits(Previewer, _React$Component3);

    function Previewer() {
        _classCallCheck(this, Previewer);

        return _possibleConstructorReturn(this, (Previewer.__proto__ || Object.getPrototypeOf(Previewer)).apply(this, arguments));
    }

    _createClass(Previewer, [{
        key: "render",
        value: function render() {
            return React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.props.markup });
        }
    }]);

    return Previewer;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));