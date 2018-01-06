import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  componentDidMount() {
  }


  head() {
    return (
      <Helmet>
        <title>Findeo | Lejligheder, værelser, huse og huse til salg/køb/leje/udleje</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }



  render() {
    return (
      <div>
        {this.head()}
        <div className="parallax" data-background="images/home-parallax-2.jpg" data-color="#36383e" data-color-opacity="0.5" data-img-width="100%" data-img-height="100%">

        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">

        				<div className="search-container">

        					<h2>Find dit nye Hjem</h2>

        					<div className="row with-forms">


        						<div className="col-md-3">
        							<select data-placeholder="Any Type" className="chosen-select-no-single" >
        								<option>Lejligheder</option>
        								<option>Huse</option>
        								<option>Værelser</option>
        								<option>Garager</option>
        								<option>Grunde</option>
        							</select>
        						</div>


        						<div className="col-md-3">
        							<select data-placeholder="Any Status" className="chosen-select-no-single" >
        								<option>Til Leje</option>
                        <option>Til Salg</option>
        							</select>
        						</div>

        						<div className="col-md-6">
        							<div className="main-search-input">
        								<input type="text" placeholder="Hvor vil du gerne bo?" value=""/>
        								<button className="button"><i className="fa fa-search"></i></button>
        							</div>
        						</div>

        					</div>

        					<div className="adv-search-btn">
        						Mangler du mere advanceret søgning? <a href="#">Tryk her</a>
        					</div>

        					<div className="announce">
        						Vi hare mere end 1000 opslag til dig!
        					</div>

        				</div>

        			</div>
        		</div>
        	</div>

        </div>


        <div className="container">
        	<div className="row">

        		<div style={{marginTop: '3%'}} className="col-md-12">
        			<h3 className="headline centered margin-bottom-35 margin-top-10">Mest populære byer <span>Boliger i de mest populære områder</span></h3>
        		</div>

        		<div className="col-md-4">


        			<a href="listings-list-with-sidebar.html" className="img-box" data-background-image="images/popular-location-01.jpg">


        				<div className="listing-badges">
        					<span className="featured">Featured</span>
        				</div>

        				<div className="img-box-content visible">
        					<h4>New York </h4>
        					<span>14 Properties</span>
        				</div>
        			</a>

        		</div>

        		<div className="col-md-8">

        			<a href="listings-list-with-sidebar.html" className="img-box" data-background-image="images/popular-location-02.jpg">
        				<div className="img-box-content visible">
        					<h4>Los Angeles</h4>
        					<span>24 Properties</span>
        				</div>
        			</a>

        		</div>

        		<div className="col-md-8">

        			<a href="listings-list-with-sidebar.html" className="img-box" data-background-image="images/popular-location-03.jpg">
        				<div className="img-box-content visible">
        					<h4>San Francisco </h4>
        					<span>12 Properties</span>
        				</div>
        			</a>

        		</div>

        		<div className="col-md-4">

        			<a href="listings-list-with-sidebar.html" className="img-box" data-background-image="images/popular-location-04.jpg">
        				<div className="img-box-content visible">
        					<h4>Miami</h4>
        					<span>9 Properties</span>
        				</div>
        			</a>

        		</div>

        	</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}


export default {
  component: connect(mapStateToProps)(HomePage)
};
