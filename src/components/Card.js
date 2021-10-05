import React from "react";

class Card extends React.Component {
    
  render() {
    const filtered = this.props.data.filter(e => e.id > 3);
    const mapped = filtered.map((data, index) => {
        return (
            <div className="card" key={index}>
                <img 
                  className="cardImg" 
                  src={this.props.fetching ? "/img/loader.png" : "/img/"+data.img} 
                  alt={data.alt} 
                />
                <div className="innerDiv">
                    <div className="label">{data.label}</div>
                    <h4 className="title">{data.title}</h4>
                    <p className="text">{data.text}</p>
                    <a className="more" href="/">read more</a>
                </div>
            </div>
        )
    })
    return (
      <div>
          {mapped}
      </div>
    );
  }
}


export default Card;
