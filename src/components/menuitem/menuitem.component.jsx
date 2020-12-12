import React from 'react';
import  "./menuitem.styles.scss";
const MenuItem = ({title,imageUrl,id,size}) =>(
    <div key={id} className={`${size} menu-item`}>
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

export default MenuItem;