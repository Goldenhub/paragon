import React from "react";

class Cardtop extends React.Component {
    
  render() {
    const filtered = this.props.data.filter(e => e.id < 4);
    const mapped = filtered.map((data, index) => {
      return (
        <div className="cardTop" keys={index}>
          <img 
            className="topImage" 
            src={this.props.fetching ? "/img/loader.png" : "/img/"+data.img} 
            alt={data.alt} 
          />
          <div className="label">{data.label}</div>
          <h2 className="title">{data.title}</h2>
          <p className="text">{data.text}</p>
          <a className="more" href="/">read more</a>
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


export default Cardtop;
