

//JAVASCRIPT
// const heading=document.createElement("h2");
// heading.textContent="Hello";
// heading.className="header";
// document.getElementById("root").append(heading)

        //REACT WITH JS
//const reactHeading = React.createElement("h1",{className:"head",children:"Hello Woorld"})


            //REACT WITH JSX

const jsxHeading=( <>
    <h1>About React</h1>
    <p>this is the para from jsx</p>
    <ul>
        <li>great</li>
        <li>awesome</li>
    </ul>
    </>
    );

//components should be named with a capital letter
const App=()=>{
return <>
<h1>About React</h1>
<p>this is the para from jsx</p>
<ul>
    <li>great</li>
    <li>awesome</li>
</ul>
</>
}

function Name(){
    return <>
    <p>jsx is javascript xml</p>
    </>
}


ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Name/></>)
//react dom is virtual dom
//create root will cill point out entry point for vdom  