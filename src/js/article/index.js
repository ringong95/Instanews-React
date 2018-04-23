import React from 'react';

const Articles = ({key, abstract, image}) =>{
    console.log(image)
    return (
            <li>
                <a >
                <div className="article" style={{backgroundImage: `url(${image})`}}>
                    <div className="abstractpart"> 
                        <div className="gradient"> 
                        <p> {abstract}</p>
                        </div>
                    </div>
                </div>
            
                </a>
            </li>
    )
};
export default Articles;