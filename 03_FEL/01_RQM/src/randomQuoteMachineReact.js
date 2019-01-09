class App extends React.Component {
    render() {
        return (
            <QuoteBox/>
        )
    }
}

class QuoteBox extends React.Component {
    render() {
        return (
            <div id="quote-box">
                <QuoteText/>
                <QuoteAuthor/>
                <ButtonArea/>
            </div>
        );
    }
}

class QuoteText extends React.Component {
     render() {
        return (
            <div id="text">
                This is example Quote.
            </div>
        )
    }
}

class QuoteAuthor extends React.Component {
    render() {
        return (
            <div id="author">
                My Undies
            </div>
        )
    }
}

class ButtonArea extends React.Component {
    render() {
        return(
            <div id="button-area">
                <ButtonTweet/>
                <ButtonGenerate/>
            </div>
        )
    }
}

class ButtonTweet extends React.Component {
    render() {
        return (
            <img src="../../../media/03_FEL/01_RQM/twitter.png" alt="Twitter Button" id="tweet-quote"/>
        )
    }
}

class ButtonGenerate extends React.Component {
    render() {
        return (
            <img src="../../../media/03_FEL/01_RQM/generate_small.png" alt="Twitter Button" id="new-quote"/>
        )
    }
}

const QUOTES = [
    {
        quote: "Quote 1",
        author: "Author 1"
    },
    {
        quote: "Quote 2",
        author: "Author 2"
    },
    {
        quote: "Quote 3",
        author: "Author 3"
    },

]


const domContainer = document.getElementById('root');
ReactDOM.render(<App/>, domContainer);