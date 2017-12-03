//Components; Props

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        );
    }
}

//Header-Component
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

//Action-Component
class Action extends React.Component {
    handlePicker () {
        alert('handelPicker');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePicker}>What should I do?</button>
            </div>
        );
    }
}

//Options-Component
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>

                {
                    this.props.options.map((options) => <Option key={options} optionText={options}/>)
                }
            </div>
        );
    }
}


//Option-Component
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

//AddOptions-Component
class AddOptions extends React.Component {
    handleAddOption(e) {
        // prevents fullpage reload
        e.preventDefault();
        //targets input with name option
        let addedOption = e.target.elements.option.value.trim(); 
        if(addedOption) {
            alert(addedOption);
        }      
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input typ='text' name='option'/>
                <button>Add Option</button>
            </form>
            
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

const fizzBuzz = () => {
    for(let i = 0; i<31; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
        }  else if  (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i);
        }
        
    }
}
const reverseString = (str) => {
    let reversed = '';

    for(let character of str) {
        reversed = character + reversed;
    }

    return reversed
}