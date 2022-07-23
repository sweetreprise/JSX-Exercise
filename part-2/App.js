const App = () => {
    return (
        <div>
        <Tweet username="IAmACat" name="Shiloh" date="July 21, 2022" message="MEOW MEOW MEOW" />
        <hr />
        <Tweet username="FeedMeDumplings" name="Dumpling" date="July 21, 2022" message="Will someone please feed me dumplings?" />
        <hr />
        <Tweet username="PkmnMaster" name="Ash Ketchum" date="July 21, 2022" message="I wanna be the very besttttt like no one ever waaaaas" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));