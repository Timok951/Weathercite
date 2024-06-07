import React from 'react';

class seacweather extends React.Component {
    render(){
        return(
<div className="searchbox">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mx-auto align-items-center">
                  <form onSubmit={this.props.gettingWeather} className="form-inline"> 
                    <input className="form-control mr-sm-2" type="text" name="cityname" placeholder="Input city"/>
                  </form>
                </div>
              </div>
            </div>
        </div>


          
        )
    }
}
export default seacweather;