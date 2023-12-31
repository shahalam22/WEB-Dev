import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialIcons, products } from './data';

const App = () => {
    return(
        <div>
            <h1>App</h1>
            {/* <FontAwesomeIcon icon={['fab', 'facebook']}/> */}
            <div style={{display:'flex', gap:'1rem'}}>
                {socialIcons.map((item)=>(
                    <div key={item.id} style={{backgroundColor:item.color}}>
                        <FontAwesomeIcon icon={['fab', item.icon]}/>
                        <span>{item.tooltip}</span>
                    </div>
                ))}
            </div>
            <div>
                <br />
                <br />
                <h3>BreadCrumbs</h3>
                {products.breadcrumbs.map((item, index)=>(
                    <React.Fragment key={index}>
                        <a href={item.link} style={{display:'inline-block'}}>
                            {item.text}
                        </a>
                        {index < products.breadcrumbs.length - 1 && (<span>  /  </span>)}
                    </React.Fragment>
                ))}
            </div>
            
        </div>
    )
}


export default App;