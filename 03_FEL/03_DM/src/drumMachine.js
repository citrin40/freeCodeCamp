
const drumBox1 = [
    {
        key: "Q",
        keycode: 81,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        id: 'Heater-1'
    },
    {
        key: "W",
        keycode: 87,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        id: 'Heater-2'
    },
    {
        key: "E",
        keycode: 69,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        id: 'Heater-3'
    },
    {
        key: "A",
        keycode: 65,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        id: 'Heater-4'
    },
    {
        key: "S",
        keycode: 83,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        id: 'Clap'
    },
    {
        key: "D",
        keycode: 68,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        id: 'Open-HH'
    },
    {
        key: "Z",
        keycode: 90,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        id: 'Kick-n-Hat'
    },
    {
        key: "X",
        keycode: 88,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        id: 'Kick'
    },
    {
        key: "C",
        keycode: 67,
        audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        id: 'Closed-HH'
    },
];

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            volume: 50,
            displayText: 'Press any Button'

        };

        this.playSound = this.playSound.bind(this);
        this.changeVolume = this.changeVolume.bind(this);

    }

    playSound(e){
        let audioElement = document.getElementById(e.target.value);
        audioElement.volume = this.state.volume/100;
        audioElement.play();

        let displayText = drumBox1.filter((el) => {return (audioElement.id == el.key)}).shift().id;
        this.setState({
            displayText: displayText
        });
    }

    changeVolume(e){
        this.setState({
            volume: e.target.value
        })
    }

    render() {
        return (
            <div id="drum-machine">
                <Display displayText={this.state.displayText}/>
                <DrumPad playSound={this.playSound}/>
                <Slider value={this.state.volume} changeVolume={this.changeVolume}/>
                <Toggle/>
            </div>
        )
    }
}

class Display extends React.Component {
    render() {
        return (
            <div id="display">{this.props.displayText}</div>
        );
    }
}

class DrumPad extends React.Component {

    renderDrumButton(i) {
        return(
            <DrumButton
                className="drum-pad"
                playSound={this.props.playSound}
                value={drumBox1[i].key}
                source={drumBox1[i].audioSource}
                key={i}
                />
        );
    }

    render() {
        const rows = 3, cols = 3;
        return (
            <div>
                {[...new Array(rows)].map((x, rowIndex) => {

                    return(
                    <div className="row" key={rowIndex}>

                        {[...new Array(cols)].map((y, colIndex) => this.renderDrumButton(rowIndex * cols + colIndex))}
                    </div>
                    );
                })
                }
            </div>
        );
    }
}

class DrumButton extends React.Component {
    render() {
        return (
            <button className="drum-pad" onClick={(e) => this.props.playSound(e)} value={this.props.value} >
                {this.props.value}
                <audio className="clip" id={this.props.value} >
                    <source src={this.props.source}  type="audio/mpeg"/>
                </audio>
            </button>
        )
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div className="container">
                <input
                    type="range" min="0" max="100"
                    className="range" id="range"
                    value={this.props.value}
                    onChange={(e) => this.props.changeVolume(e)}/>
                <div id="range-val">Vol. {this.props.value}</div>
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
                </label>
                <p>Drums</p>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));


window.addEventListener("keydown", function (event){
    if(event.defaultPrevented){
        return;
    }
    const keyCodeExists = (el) => {return (el.keycode == event.keyCode)};


    if(event.keyCode !== undefined && drumBox1.some(keyCodeExists)){

        let buttonJson = drumBox1.filter((el) => {
            if(el.keycode == event.keyCode){
                return el;
            }
        }).shift();

        let button = document.getElementById(buttonJson.key).parentElement;

        button.click();
    }
});

