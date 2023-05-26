import './App.css';
import {useEffect, useState} from "react";
import {
    CalculatePage,
    Page1,
    Page10,
    Page11,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    TitlePage
} from "./pages";



function App() {

    const [counter, setCounter] = useState(0)
    const [bar, setBar] = useState(0)
    const [name, setName] = useState('')


    const fillProgressBar = () => {
        if ( bar + 11 <= 100) {
            setBar(bar + 11);
        }
    };


    return (
        <div className="App">
            {counter === 0 && <TitlePage setCounter={setCounter}/>}
            {counter === 1 && <Page1 setCounter={setCounter} bar={bar} setBar={setBar} fillProgressBar={fillProgressBar}
                                     />}
            {counter === 2 && <Page2 setCounter={setCounter} bar={bar} setBar={setBar} fillProgressBar={fillProgressBar}
                                     setName={setName} name={name}/>}
            {counter === 3 && <Page3 setCounter={setCounter} bar={bar} setBar={setBar} fillProgressBar={fillProgressBar}
                                     />}
            {counter === 4 && <Page4 setCounter={setCounter} bar={bar} name={name}/>}
            {counter === 5 && <Page5 setCounter={setCounter} fillProgressBar={fillProgressBar} bar={bar} name={name}/>}
            {counter === 6 && <Page6 setCounter={setCounter} fillProgressBar={fillProgressBar} bar={bar}/>}
            {counter === 7 && <Page7 setCounter={setCounter} fillProgressBar={fillProgressBar} bar={bar}/>}
            {counter === 8 && <Page8 setCounter={setCounter} name={name} />}
            {counter === 9 && <Page9 setCounter={setCounter} bar={bar} name={name} fillProgressBar={fillProgressBar}/>}
            {counter === 10 && <Page10 setCounter={setCounter} bar={bar} name={name} fillProgressBar={fillProgressBar}/>}
            {counter === 11 && <Page11 setCounter={setCounter} bar={bar} name={name} fillProgressBar={fillProgressBar}/>}
            {counter === 12 && <CalculatePage setCounter={setCounter} name={name}/>}
        </div>
    );
}

export default App;
