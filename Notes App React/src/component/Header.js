import React from 'react';

const Header = ({onSearch})=>{
    return (
        <header>
         <a href="./index.html" className="title"><h1>My Note React</h1></a>
         <div className="note-search">
             <input type="text" 
             placeholder="Search here ..." 
             onChange={(event) => onSearch(event.target.value)} 
             />
         </div>
        </header>
    );
}

export default Header;