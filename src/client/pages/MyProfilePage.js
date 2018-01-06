import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class MyProfilePage extends Component {
  componentDidMount() {

  }


  head() {
    return (
      <Helmet>
        <title>{`Findeo | ${this.props.auth.name}`}</title>
        <meta property="og:title" content={`Findeo: ${this.props.auth.name}`} />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <div id="titlebar">
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">

        				<h2>Min Profil</h2>


        				<nav id="breadcrumbs">
        					<ul>
        						<li><a href="/">Hjem</a></li>
        						<li>Min Profil</li>
        					</ul>
        				</nav>

        			</div>
        		</div>
        	</div>
        </div>

        <div className="container">
        	<div className="row">

        		<div className="col-md-4">
        			<div className="sidebar left">

        				<div className="my-account-nav-container">

        					<ul className="my-account-nav">
        						<li className="sub-nav-title">Administre konto</li>
        						<li><a href="#" className="current"><i className="sl sl-icon-user"></i> Min Profil</a></li>
        						<li><a href="#"><i className="sl sl-icon-star"></i> Favorit Liste</a></li>
        					</ul>

        					<ul className="my-account-nav">
        						<li className="sub-nav-title">Administre Opslag</li>
        						<li><a href="#"><i className="sl sl-icon-docs"></i> Mine Opslag</a></li>
        						<li><a href="#"><i className="sl sl-icon-home"></i> Opret nyt boligopslag</a></li>
        					</ul>

        					<ul className="my-account-nav">
        						<li><a href="/api/logout"><i className="sl sl-icon-power"></i> Log Af</a></li>
        					</ul>

        				</div>

        			</div>
        		</div>

        		<div className="col-md-8">
        			<div className="row">


        				<div className="col-md-8 my-profile">
        					<h4 className="margin-top-0 margin-bottom-30">Min Bruger</h4>

        					<label>Navn:</label>
        					<input defaultValue={this.props.auth.name} type="text"/>

        					<label>Beskæftigelse: </label>
        					<input defaultValue="Studerende" type="text"/>

        					<label>Telefon/Mobil: </label>
        					<input defaultValue="70809010" type="text"/>

        					<label>Email:</label>
        					<input defaultValue="alexander@example.com" type="text"/>


        					<h4 className="margin-top-50 margin-bottom-25">Om mig: </h4>
        					<textarea name="about" id="about" cols="30" rows="10">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>


        					<h4 className="margin-top-50 margin-bottom-0">Sociale Medier</h4>

        					<label><i className="fa fa-twitter"></i> Twitter</label>
        					<input defaultValue="https://www.twitter.com/" type="text"/>

        					<label><i className="fa fa-facebook-square"></i> Facebook</label>
        					<input defaultValue="https://www.facebook.com/" type="text"/>

        					<label><i className="fa fa-google-plus"></i> Google+</label>
        					<input defaultValue="https://www.google.com/" type="text"/>

        					<label><i className="fa fa-linkedin"></i> Linkedin</label>
        					<input defaultValue="https://www.linkedin.com/" type="text"/>


        					<button className="button margin-top-20 margin-bottom-20">Gem Ændringer</button>
        				</div>

        				<div className="col-md-4">

        					<div className="edit-profile-photo">
        						<img src={this.props.auth.image} alt=""/>
        					</div>

        				</div>


        			</div>
        		</div>

        	</div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {auth: state.auth};
}


export default {
  component: connect(mapStateToProps)(MyProfilePage)
};
