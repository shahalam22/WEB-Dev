const Section = ({title, items}) => {
    const itemArray = items.map((item => <li>{item}</li>));

    return (
        <section>
            <br />
            <h2>{title}</h2>
            <br />
            <ul>{itemArray}</ul>
        </section>
    )
}

export default Section;