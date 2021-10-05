import React from "react";




class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isOpen: !prevState.isOpen
            }
        })
    }

    render(){
        const iconStyle = {
            borderRadius: '50%',
            backgroundColor: '#ebecf0',
            padding: 10
        }
        
        const menu = ['companies', 'institutions', 'students', 'blog', 'bridges'];
        let itemsDesktop = menu.map(list => <li key={list + '-desktop'}><a href="/">{list}</a></li>);
        let itemsMobile = menu.map(list => <li key={list + '-mobile'}><a href="/">{list}</a></li>);

        
        return (
            <header>
                <nav>
                    <img className="logo" src="/img/Paragon_One_Logo.png" alt="logo" />
                    <ul className="desktop">{itemsDesktop}</ul>
                    <img 
                        className="hamburger" 
                        style={this.state.isOpen ? iconStyle : null} 
                        onClick={this.handleClick} 
                        src="/img/icon.svg" alt="hamburger" 
                    />
                </nav>  
                {this.state.isOpen && <ul className="mobile">{itemsMobile}</ul>}
            </header>
            
        )
    }
}

export default Nav;