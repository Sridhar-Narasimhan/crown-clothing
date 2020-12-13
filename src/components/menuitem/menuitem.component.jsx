import React from 'react';
import  "./menuitem.styles.scss";
import {withRouter} from "react-router-dom";
// eslint-disable-next-line no-restricted-globals
const MenuItem = ({ key, title,imageUrl,size,match,linkUrl,history}) =>(
    // eslint-disable-next-line no-restricted-globals
    <div className={`${size} menu-item`} onClick={(props)=> { history.push(`${match.url}${linkUrl}`);}} >
     <div className="backgroundimage" style={{
         backgroundImage:`url(${imageUrl})`     
         }} ></div>   
    <div className="content">
        <div className="title">
            {title.toUpperCase()}
        </div>
        <span className="sub-title">Shop Now</span>
    </div>
</div>
)

export default withRouter(MenuItem);