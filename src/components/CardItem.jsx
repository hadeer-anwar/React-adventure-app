import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
export default function CardItem({src,text,path,label})
{

    return (
        <li className='card-item'>
        <Link className='card-item-link' to={path}>
            <figure className='card-item-pic-wrap' data-category={label}>
               <img src={src} alt="travel image" className='card-item-img' />
            </figure>
            <div className="card-item-info">
                <h5 className="card-item-text">
                    {text}
                </h5>
            </div>
        </Link>

        </li>
    )
}
