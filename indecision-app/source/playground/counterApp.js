alert('hallo');



// let count = 0;

// // Button to add one
// const addOne = () => {
//     count++;
//     console.log(count);
//     renderCounterApp();
// }

// // Button to subtract one
// const minusOne = () => {
//     if(count > 0) {
//         count--;
//     } else {
//         console.log('you cant count under 0');
//     }
//     renderCounterApp();
// }

// // Button to reset
// const reset = () => {
//     count = 0;
//     console.log(count);
//     renderCounterApp();
// }

// // renders the page again
// const renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className='button'>+1</button>
//             <button onClick={minusOne} className='button'>-1</button>
//             <button onClick={reset} className='button'>Reset</button>
//         </div>
//     );
//     ReactDOM.render([template], appRoot);
// }

// const appRoot = document.getElementById('app');
// renderCounterApp()
