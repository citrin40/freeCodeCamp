class App extends React.Component {
    render() {
        return (
            <QuoteBox/>
        )
    }
}

class QuoteBox extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            author: '',
            text: ''
        };
        this.getQuote = this.getQuote.bind(this);
        this.setState = this.setState.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.getQuote();
    }

    getQuote() {

        document.getElementById('new-quote').className = 'transform';

        var quoteId = Math.floor(Math.random()*60000);
        var request = new XMLHttpRequest();
        let text = this.state.text;
        let author = this.state.author;


        request.open('GET', 'https://favqs.com/api/quotes/' + quoteId, false);

        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Authorization', 'Token token="2810108305cd08a07de3247a01b854ca"');


        request.onload = function() {
            if(request.status === 200){
                var data = JSON.parse(this.response);
                text = data.body;
                author = data.author;
            } else {
                console.log(request.status);
            }
        };
        request.send();

        if(request.status > 200) {
            this.getQuote();
        }

        this.setState({
            author: author,
            text: text
        });

        setTimeout(() => {
            document.getElementById('new-quote').className = '';
        },500);

    }


    render() {
        return (
            <div id="quote-box">
                <QuoteAuthor author={this.state.author}/>

                <QuoteText text={this.state.text}/>

                <ButtonArea getQuote={this.getQuote}/>
            </div>
        );
    }
}

class QuoteSign extends React.Component{
    render() {
        return(
            <img src={this.props.source} alt="Twitter Button" id={this.props.direction}/>
        )
    }
}

class QuoteText extends React.Component {

     render() {
         const sourceLeft = "../../../media/03_FEL/01_RQM/quote_32x32_left.png";
         const sourceRight = "../../../media/03_FEL/01_RQM/quote_32x32_right.png";
        return (
            <div id="text">
                <QuoteSign source={sourceLeft} direction="quote-left"/>
                {this.props.text}
                <QuoteSign source={sourceRight} direction="quote-right"/>
            </div>
        )
    }
}

class QuoteAuthor extends React.Component {
    render() {
        return (
            <div id="author">
                {this.props.author}
            </div>
        )
    }
}

class ButtonArea extends React.Component {

    constructor(props){
        super(props);
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote(){
        this.props.getQuote();
    }

    render() {
        return(
            <div id="button-area">
                <ButtonTweet/>
                <ButtonGenerate getQuote={this.props.getQuote}/>
            </div>
        )
    }
}

class ButtonTweet extends React.Component {
    render() {
        return (
            <a href="https://twitter.com/intent/tweet"><img src="../../../media/03_FEL/01_RQM/twitter-white.png" alt="Twitter Button" id="tweet-quote"/></a>
        )
    }
}

class ButtonGenerate extends React.Component {

    constructor(props){
        super(props);
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        this.props.getQuote();
    }

    render() {
        return (
            <a href="#" onClick={this.getQuote} ><img src="../../../media/03_FEL/01_RQM/generate-white.png" alt="New Quote Button" id="new-quote"/></a>
        )
    }
}

const domContainer = document.getElementById('root');
ReactDOM.render(<App/>, domContainer);