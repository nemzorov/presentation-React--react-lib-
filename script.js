// классовый компонент
class ClassComponent extends React.Component {
    render() {
        return <p>Я {this.props.name} компонент</p>
    }
}

// функциональный компонент
function FunctionComponent(props) {
    return (
        <p>Я {props.name} компонент</p>
    );
}


// основной компонент
function App() {
    return (
        <div>
            <ClassComponent name="классовый" />
            <FunctionComponent name="функциональный" />
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);