import UseApp from "./App_hook_41";

const App = () => {


    const {user, id, users, loading, nextHandler, prevHandler, max} = UseApp();


    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user)=> <li key={user.id}>{user.name}</li>)}
            </ul>
            <br />
            <br />

            <div>
                <h1>User Details - {id}</h1>
                {loading && <p>Loading...</p>}
                {!loading && user && (
                    <div>
                        Name: {user.name}
                        <br />
                        Email: {user.email}
                        <br />
                        Phone: {user.phone}
                        <br />
                    </div>
                )}
                <br />
                <div>
                    <button disabled={id===1} onClick={prevHandler}>Previous</button>
                    <button disabled={id===max} onClick={nextHandler}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default App;