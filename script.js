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

const rootEl = document.createElement("div"); // создаем элемент div
rootEl.id = "root"; // устанавливаем атрибут id
const root = document.body.appendChild(rootEl); // добавляем его в body
ReactDOM.render(<App />, root); // рендерим основной компонент