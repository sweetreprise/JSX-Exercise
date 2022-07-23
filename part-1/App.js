const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Shiloh" />
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));