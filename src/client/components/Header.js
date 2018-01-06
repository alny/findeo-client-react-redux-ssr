import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

render() {
  return (
    <div id="wrapper">
    <header id="header-container" className="header-style-2">

    	<div id="header">
    		<div className="container">

    			<div className="left-side">

    				<div id="logo" className="margin-top-10">
    					<a href="/"><img src="images/logo.png" alt=""/></a>

    					<a href="/" className="sticky-logo"><img src="images/logo2.png" alt=""/></a>
    				</div>

    				<div className="mmenu-trigger">
    					<button className="hamburger hamburger--collapse" type="button">
    						<span className="hamburger-box">
    							<span className="hamburger-inner"></span>
    						</span>
    					</button>
    				</div>

    			</div>

    			<div className="right-side">
    				<ul className="header-widget">
    					<li>
    						<i className="sl sl-icon-location"></i>
    						<a href="#"><div className="widget-content">
    							<span className="title">Find/Lej/Udlej</span>
    							<span className="data">Helt gratis!</span>
    						</div></a>
    					</li>

    					<li>
    						<i className="sl sl-icon-home"></i>
    						<a href="#"><div className="widget-content">
    							<span className="title">Køb/Sælg</span>
    							<span className="data">Din bolig i dag</span>
    						</div></a>
    					</li>

             {(this.props.auth != null) ? ( <li className="with-btn"><a href="/opret" className="button border">Opret nyt Boligopslag</a></li>) :
             (<li className="with-btn"><a href="/api/auth/facebook" className="button border">Log Ind via Facebook</a></li>
                )}
    				</ul>
    			</div>

    		</div>

    		<nav id="navigation" className="style-2">
    			<div className="container">
    					<ul id="responsive">

    						<li><a href="/find-bolig" className="current">Søg Bolig</a></li>
    						<li><a href="#">Udlej Bolig</a></li>

    						<li><a href="#">Find Lejer</a></li>

    						<li><a href="#">Boligråd</a></li>

            {(this.props.auth != null) ? null : (
                <li className="right-side-menu-item"><a href="#" className="sign-in"><i className="fa fa-instagram"></i><i className="fa fa-twitter-square"></i><i className="fa fa-facebook-square"></i></a></li>
            )}
    					</ul>
    			</div>
    		</nav>

        {(this.props.auth == null) ? null : (
          <div className="container">
            <div className="row">
              <div className="user-menu-container">
                <div className="user-menu">
                  <div className="user-name"><span><img src={this.props.auth.image} alt=""/></span>{this.props.auth.name}</div>
                  <ul>
                    <li><Link to="/min-profil"><i className="sl sl-icon-user"></i> Min Profil</Link></li>
                    <li><a href="#"><i className="sl sl-icon-star"></i> Favoriter</a></li>
                    <li><a href="#"><i className="sl sl-icon-home"></i> Mine Boliger</a></li>
                    <li><a href="/api/logout"><i className="sl sl-icon-power"></i> Log Af</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

    		<div className="clearfix"></div>

    	</div>

    </header>
    </div>
  );
  }
};

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
