const App = () => {
    return (
        <div>
            <Person 
            name="Jane Doe" 
            age={36} 
            hobbies={["Pet cat", "Sit in the sun", "Vibe"]}
            />

            <Person 
            name="Cris" 
            age={27} 
            hobbies={["Play games", "Eat a pizza", "Drive truck"]}
            />

            <Person 
            name="Shiloh" 
            age={1.5} 
            hobbies={["Nap", "Eat", "Name more"]}
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));