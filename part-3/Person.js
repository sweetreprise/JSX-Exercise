const Person = (props) => {

    const hobbies = [];

    let ofAge;
    let nameTooLong;
    let shortenedName;

    if(props.age < 18) {
         ofAge = false
    } else {
        ofAge = true
    }

    if(props.name.length > 8) {
        nameTooLong = true
        shortenedName = props.name.slice(0,6)
    } else {
        nameTooLong = false
    }

    return (
        <div>
            <p>
                Learn some information about this person
            </p>
                <p>name: {nameTooLong ? shortenedName : props.name}</p>
                <p>age: {props.age}</p>
            <h3>{ofAge ? "Please go vote!" : "You must be 18"}</h3>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}

