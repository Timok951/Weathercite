import React from 'react';
const cloudy_day = "/img/cloudy-day.png";
const rain = "/img/rain.png";
const sun = "/img/sun.png";
const wind = "/img/wind.png";
const sky = "/img/sunny.png";


class Card extends React.Component {
    state = {
        imagesource: undefined,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.description !== this.props.description) {
            if (this.props.description.includes("clouds")) {
                this.setState({ imagesource: cloudy_day });
            } else if (this.props.description.includes("rain")) {
                this.setState({ imagesource: rain });
            } else if (this.props.description.includes("sun")) {
                this.setState({ imagesource: sun });
            }
            else if (this.props.description.includes("clear")) {
                    this.setState({ imagesource: sky }); 
            }
            } else if (this.props.description.includes("wind")) {
                this.setState({ imagesource: wind });
            }
        
    }

    render() {
        const { city, temp, description, humidity } = this.props;

        return (
            <div className='this_day'>
                <p>City: {city}</p>
                <div className='top_block'>
                    <p>City Temperature: {temp}</p>
                </div>
                <p>Description: {description}</p>
                <p>Humidity: {humidity}</p>
                <img className="iconwather" src={this.state.imagesource} alt='not found' />
            </div>
        );
    }
}

export default Card;
