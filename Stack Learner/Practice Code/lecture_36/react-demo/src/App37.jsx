import './App.css';

const tasks = [
    {
        id: 'unique_id_001',
        subtitle: 'subtitle',
        createdAt: '2022-04-24T18:04:42.7922',
        tags: [
            {
                id: 'tag_id_001',
                text: 'Its Done',
                icon: 'D',
            },
            {
                id: 'tag_id_002',
                text: 'Its Cancelled',
                icon: 'C',
            },
            {
                id: 'tag_id_003',
                text: 'Its In Progress',
                icon: 'P',
            },
            {
                id: 'tag_id_004',
                text: 'Just Wrote It',
                icon: 'W',
            },
        ],
        comments: [
            {
                id: 'comment_id_001',
                user: {
                    avatar: 'xyz.com',
                    name: 'user_1',
                    id: 'user_id_001',
                },
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit expedita sequi ab nihil sunt recusandae esse maxime illo distinctio autem rerum quaerat.'
            },
            {
                id: 'comment_id_002',
                user: {
                    avatar: 'xyz.com',
                    name: 'user_2',
                    id: 'user_id_002',
                },
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit expedita sequi ab nihil sunt recusandae esse maxime illo distinctio autem rerum quaerat.'
            }
        ],
        tasks: [
            {
                id: 'task_id_001',
                title: 'Foggy Nelson',
                text: 'Here to clean the streets of Hells Kitchen',
                status: 'done',
            },
            {
                id: 'task_id_002',
                title: 'Matt Murdock',
                text: 'Here to clean the streets of Hells Kitchen',
                status: 'cancelled',
            },
            {
                id: 'task_id_003',
                title: 'Jessica Jones',
                text: 'Here to clean the streets of Hells Kitchen',
                status: 'progress',
            },
            {
                id: 'task_id_004',
                title: 'Luke Cage',
                text: 'Here to clean the streets of Hells Kitchen',
                status: 'progress',
            }
        ]
    },
    {
        id: 'unique_id_002',
        subtitle: 'subtitle',
        createdAt: '2022-04-24T18:04:42.7922',
        tags: [
            {
                id: 'tag_id_001',
                text: 'Its Done',
                icon: 'D',
            },
            {
                id: 'tag_id_002',
                text: 'Its Cancelled',
                icon: 'C',
            },
        ],
        comments: [
            {
                id: 'comment_id_001',
                user: {
                    avatar: 'xyz.com',
                    name: 'user_1',
                    id: 'user_id_001',
                },
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit expedita sequi ab nihil sunt recusandae esse maxime illo distinctio autem rerum quaerat.'
            },
        ],
        tasks: [
            {
                id: 'task_id_001',
                title: 'Foggy Nelson',
                text: 'Here to clean the streets of Hells Kitchen',
                status: 'done',
            },
            {
                id: 'task_id_002',
                title: 'Matt Murdock',
                text: 'Here to clean the streets of Hells Kitchen',
                status: 'cancelled',
            },
        ]
    },
]


function getDay(dateStr){
    const date = new Date(dateStr).getDay();
    const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date];
}

function formatDate(dataStr){
    const date = new Date(dataStr);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

const TagItemList = ({item}) => {
    return (
        <li key={item.id}>
            <small>{item.icon}</small> - {item.text}
        </li>
    )
}

const CommentItem = ({comment}) => {
    return (
        <div className='comment-item' key={comment.id}>
            <h3>{comment.user.name}</h3>
            <p>{comment.text}</p>
        </div>
    )
}

const TaskItem = ({item}) => {
    return (
        <li key={item.id}>
            <h3>{item.title}</h3>
            <p>
                <small>{item.status}</small>
            </p>
            <p>{item.text}</p>
        </li>
    )
}

const TaskCard = ({task}) => {
    return (
        <div className='day-card'>
            <h1 className='title'>
                {getDay(task.createdAt)}, {formatDate(task.createdAt)}
            </h1>
            <h3 className='sub-title'>Subtitle</h3>

            <ul className='tag-ul'>
                {task.tags.map((item)=><TagItemList item={item}/>)}
            </ul>
            <div className='line'></div>

            <p className='notes'>Notes linked to people</p>
            <div className='comments'>
                {task.comments.map((comment)=><CommentItem comment={comment}/>)}
            </div>
            <br />

            <ul className='tasks'>
                {task.tasks.map((item)=><TaskItem item={item}/>)}
            </ul>
        </div>
    )
}

const App37 = () => {
    return (
        <div className='cards-group'>
            {tasks.map((item)=><TaskCard key={item.id} task={item}/>)}
        </div>
    )
}

export default App37;