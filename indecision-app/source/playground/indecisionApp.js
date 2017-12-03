// JSX - JavaScript XML
const app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: []
}

const renderSite = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={randomOption}>Random Option</button>
            <button onClick={reset}>Reset</button>
            <ol>
                {
                    app.options.map((string) => {
                        return <li key={string}>{string}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};

//reset
const reset = () => {
    app.options = [];
    renderSite();
}
//randomOption
const randomOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const randomTask = app.options[randomNum];
    console.log(randomTask);
};

const onFormSubmit = (e) => {
        ;

   const option = e.target.elements.option.value

   if(option) {
       app.options.push(option);
       e.target.elements.option.value = '';
       renderSite();
   }
}




const appRoot = document.getElementById('app');
renderSite();


