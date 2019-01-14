class App extends React.Component {
    render() {
        return (
            <div id="drum-machine">
                <Display/>
                <DrumPad/>
                <Slider/>
                <Toggle/>
            </div>
        )
    }
}

class Display extends React.Component {
    render() {
        return (
            <div id="display">Test Etwas längerer</div>
        );
    }
}

class DrumPad extends React.Component {
    render() {
        return (
            <button className="drum-pad">Q
            </button>

        );
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div className="container">
                <input type="range" min="0" max="100" className="range" id="range"/>
                <div id="range-val"></div>
            </div>
        );
    }
}

class Toggle extends React.Component {
    render() {
        return (
            <div className="container">
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    Toggle
                </label>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

