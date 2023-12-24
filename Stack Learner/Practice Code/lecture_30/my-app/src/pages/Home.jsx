import Layout31 from '../components/layout/Layout31';
import Section from '../components/Section';

const education = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',
]

const experience = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nesciunt, quis iste iure ipsa porro obcaecati, ad amet quia totam laboriosam fuga perferendis necessitatibus quas? Modi neque tempora inventore fugiat?',

]

function Home() {
    return (
        <Layout31>
            <Section title='Experience' items={education}/>
            <Section title='Education' items={experience}/>
        </Layout31>
    )
}

export default Home;