import React from 'react';
import './APP.css'

// const App = () => {
//     const nameArry = {
//         theName: "Abdo",
//         theAge: 22,
//     }
//     const pStyle = { color: 'red', marginTop: '100px', backgroundColor: 'black' };
//     const names = ['osama', 'abdo', 'ali'];

//     return (
//         <Fragment>
//             <h1 style={ pStyle }>{nameArry.theName}</h1>
//             <h1>{nameArry.theAge}</h1>
//             <div> {names.map((ele) => <span key={ele}> { ele } </span>) } </div>
//         </Fragment>
//     )
// }

const App = () => {
    const names = [
        { name: 'Ahmed', age: 25, addrs: 'Giza', phone: '01141582419' },
        { name: "Abdo", age: 22, addrs: "Hrim", phone: '01141629495' },
        { name: 'Osama', age: 40, addrs: 'Fisale', phone: '011261785528' }
    ];

    const data = names.map(({ name, age, addrs, phone }, index) => (
        <div className='card' key= { index }>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Addrs: {addrs}</div>
            <div>Phone: {phone}</div>
        </div>
    ));

    return <div className='parent-cards'> { data } </div>
}

export default App;
