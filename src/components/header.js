import React from 'react';
class header extends React.Component {
    render(){
        return(
            <header>
                <div className='startinghead'>
                    <img src='/img/logo.png' className='logo'></img>
                    <h1>Weather website</h1>
                </div>

            </header>
        )
    }
}
export default header;