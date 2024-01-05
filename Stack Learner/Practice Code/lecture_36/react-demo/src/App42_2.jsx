import useFetchData from "./hooks/useFetchData";

const App = () => {
    // const [users, setUsers] = useState([]);
    // const [userLoading, setUserLoading] = useState(false);
    // const [userError, setUserError] = useState('');
    // const [posts, setPosts] = useState([]);
    // const [postLoading, setPostLoading] = useState(false);
    // const [postError, setPostError] = useState('');

    // useEffect(() => {
    //     fetchUsers();
    //     fetchPosts();
    // }, []);

    // const fetchUsers = async () => {
    //     setUserLoading(true);
    //     try{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await res.json();
    //         setUsers(data);
    //         setUserError('');
    //         setUserLoading(false);
    //     }catch(error){
    //         setUserError('Server Error Occured while fetching users');
    //         setUserLoading(false);
    //     }
    // }

    // const fetchPosts = async () => {
    //     setPostLoading(true);
    //     try{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await res.json();
    //         setPosts(data);
    //         setPostError('');
    //         setPostLoading(false);
    //     }catch(error){
    //         setPostError('Server Error Occured whle fetching posts');
    //         setPostLoading(false);
    //     }
    // }

    const {data: users, loading: userLoading, error: userError} = useFetchData('https://jsonplaceholder.typicode.com/users', (data) => data.map((dat)=>({id: dat.id, name: dat.name})));
    const {data: posts, loading: postLoading, error: postError} = useFetchData('https://jsonplaceholder.typicode.com/posts', (data) => data.slice(0, 10).map((dat)=>({id: dat.id, title: dat.title})));

    // // (data) => data.map((dat)=>({id: dat.id, name: dat.name})) eta callback function
    // // (data) => data.slice(0, 10).map((dat)=>({id: dat.id, title: dat.title})) eta callback function
    // // cb = callback function || eta deyar karon holo jeno ei cb onujayi amra data create korte pari fetched data theke. Then modified data return korte pari

    return (
        <div style={{
            width: '600px',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between',
        }}>
            <div>
                <h1>Users</h1>
                <hr />
                {userLoading && <h3>Loading...</h3>}
                {userError && <h3>{userError}</h3>}
                {users?.map((user)=>(   // ei "?" use korar reason holo, data ta null kina check kora
                    <li key={user.id}>{user.name}</li>
                ))}
            </div>
            <div>
                <h1>Posts</h1>
                <hr />
                {postLoading && <h3>Loading...</h3>}
                {postError && <h3>{postError}</h3>}
                {posts?.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </div>
        </div>
    )
}

export default App;