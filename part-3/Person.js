const Person = (props) => {

    return (
        <div>
            <p>
                Learn some information about this person
            </p>
                <p>name: {props.name.length > 8 ? props.name.slice(0,6) : props.name} </p>
                <p>age: {props.age}</p>
            <h3>{props.age < 18 ? "Please go vote!" : "You must be 18"}</h3>
            <ul>
                {/* {props.hobbies.map(hobby => <li>{hobby}</li>)} */}
                {props.hobbies.map((hobby, idx) => <li key = {idx}>{hobby} {idx}</li>)}
            </ul>
        </div>
    )
}

