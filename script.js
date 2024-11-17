// классовый компонент
class ClassComponent extends React.Component {
    render() {
        return <p>Я классовый компонент</p>
    }
}

// функциональный компонент
function FunctionComponent() {
    return (
        <p>Я функциональный компонент</p>
    );
}


// основной компонент
function App() {
    return (
        <div>
            <ClassComponent />
            <FunctionComponent />
        </div>
    );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);