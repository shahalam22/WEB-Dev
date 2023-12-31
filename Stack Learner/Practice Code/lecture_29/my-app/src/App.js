// previously we used to do code in react like this

// import React from 'react';

// function App(){
//   return React.createElement('div', null, [
//     React.createElement('h1', null, 'Hello React'),
//     React.createElement('p', null, "React is all about javascript"),
//   ]);
// }

// export default App;

// now, we can do code in react like this.
// we can simply code in html inside js function then the html will be converted into js via react's background machanism then this will be shown in the webPage

function Button(){
  return <button>I am a Button</button>
}

function Title(){
  return <h1>Hello React</h1>
}

function Body(){
  return <p>React is all about JaveScript</p>
}

function App(){
  return (
    <div>
      <Title/>
      <Body/>
      <Button/>
    </div>
  );
}

export default App;