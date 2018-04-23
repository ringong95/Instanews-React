import React from 'react';

const Articles = ({url, abstract, image}) =>{
    return (
            <li>
                <a href={url} target="_blank" >
                <div className="article" style={{backgroundImage: `url(${image[4].url})`}}>
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