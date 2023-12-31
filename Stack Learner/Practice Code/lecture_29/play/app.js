window.onload = function(){
    main();
}

function main(){
    
    //PART ONE - WITHOUT CONTAINER AND TEXT FUNCTION
    // const div = document.createElement(`div`);

    // const h1 = document.createElement('h1');
    // h1.innerText = 'Hello World';

    // const p = document.createElement('p');
    // p.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa facilis? Ipsam possimus doloribus nobis aut? Ipsa nisi, molestias aperiam dolore eaque, labore nam nostrum ea doloremque mollitia odio tempora.';
    
    // div.appendChild(h1);
    // div.appendChild(p);
    
    // document.body.appendChild(div);

    //PART TWO - WITH CONTAINER AND TEXT FUNCTION
    const app = Container(
        [
            Text('h1', 'Hello World'),
            Text('p', 'This is a simple paragraph'),
            Container([Text('h3', 'wow'), Text('h3', 'nice')], {
                display: 'flex',
               gap: '2rem',
            }),
    ]);

    document.getElementById('root').appendChild(app);
}

function Container(children, style = {}){
    const div = document.createElement('div');

    Object.keys(style).map((key) => {
        div.style[key] = style[key];
    });

    children.forEach(element => div.appendChild(element));


    return div;
}

function Text(tag, value){
    const text = document.createElement(tag);
    text.innerText = value;

    return text;
}