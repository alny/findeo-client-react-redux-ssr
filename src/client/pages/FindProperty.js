import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../actions';
import { Helmet } from 'react-helmet';
import {Typeahead} from 'react-bootstrap-typeahead';

const options = [
  {name: 'København', value: "copenhagen"},
  {name: 'Aalborg', value: "aalborg"},
  {name: 'Århus', value: "aarhus"},
  {name: 'Odense', value: "odense"}]


class FindProperty extends Component {
  constructor(){
     super()
     this.state = {
         index: 0,
         page: 1,
         selectedCity: null,
         rerender: false,
         filters: {
           city: null,
           status: null,
           type: null
         }
     }
   }

   increase(event){
     event.preventDefault();
       this.setState({
         page: this.state.page+=1,
         rerender: true
       })
   }

   decrease(event){
     event.preventDefault();
     if(this.state.page > 1){
       this.setState({
         page: this.state.page-=1,
         rerender: true
       })
     }
   }

   fetchWithFilters(){
     let params = {}
     params.page = this.state.page
     if(this.state.selectedCity != null){
       let obj = this.state.selectedCity.reduce(function(acc, cur, i) {
         acc[i] = cur;
         return acc;
       }, {});
       let setCity = obj[0].value.toLowerCase();

        params.city = setCity
     }
     if(this.state.filters.status != null){
        params.status = this.state.filters.status
     }
     if(this.state.filters.type != null){
        params.status = this.state.filters.type
     }
     this.props.fetchProperties({params:params})
   }

  componentDidMount() {
    this.fetchWithFilters()
  }

  componentDidUpdate(){
    if(this.state.rerender == true){

    this.fetchWithFilters()
    this.setState({
        rerender: false
      })
    }
  }
  cityValue(event){
    event.preventDefault()
    let obj = this.state.selectedCity.reduce(function(acc, cur, i) {
      acc[i] = cur;
      return acc;
    }, {});
    let setCity = obj[0].name.toLowerCase();
    this.setState({
      selectedCity: setCity,
      rerender: true
    })
  }

  updateFilters(event){
      let updated = Object.assign({}, this.state.filters)
      event.preventDefault()
      updated[event.target.id] = event.target.value
      this.setState({
        filters: updated,
        rerender: true
      })
      console.log('updateFilters: ' + event.target.id + ' == ' + event.target.value)
  }


  head() {
    return (
      <Helmet>
        <title>Findeo | Søg Bolig</title>
        <meta property="og:title" content="Søg Bolig" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <div style={{marginTop: '3%'}} className="container">
        	<div className="row sticky-wrapper">

        		<div style={{float: 'right'}} className="col-md-9">

        			<div className="row margin-bottom-15">

        				<div className="col-md-6">
        					<div className="sort-by">
        						<label>Sorter:</label>

        						<div className="sort-by-select">
        							<select data-placeholder="Normal" onChange={this.updateFilters.bind(this)} id="sorter" className="chosen-select-no-single">
        								<option>Normal</option>
        								<option value="desc">Pris Lav til Høj</option>
        								<option>Pris Høj til Lav</option>
        								<option>Nyeste Opslag</option>
        								<option>Ældeste Opslag</option>
        							</select>
        						</div>
        					</div>
        				</div>

        				<div className="col-md-6">
        					<div className="layout-switcher">
        						<a href="#" className="grid"><i className="fa fa-th-large"></i></a>
        						<a href="#" className="list"><i className="fa fa-th-list"></i></a>
        					</div>
        				</div>
        			</div>

        			<div className="listings-container grid-layout">
              <div className="clearfix"></div>

              {(this.props.property == null) ? null : (
                this.props.property.map((prop, i) => {
                  return (
                    <div key={i} className="listing-item">
                      <a href="#" className="listing-img-container">
                        <div className="listing-badges">
                          <span>Til Leje</span>
                        </div>

                        <div className="listing-img-content">
                          <span className="listing-price">4000,- kr / Måned<i>520,- kr / m2</i></span>
                          <span className="like-icon with-tip" data-tip-content="Tilføj til Favoriter"></span>
                        </div>

                        <div className="listing-carousel">
                          <div><img src="https://images.boligportal.dk/propertyImage/5211396/2/768x1024.jpg?cacheKey=65c01266bc9282c3ea6d6b6d57a3528c&allowMap=false" alt=""/>
                          </div>
                          <div><img src="https://images.boligportal.dk/propertyImage/5211396/3/768x1024.jpg?cacheKey=f812fc91b8e71255944e4cd31d5f26cd&allowMap=false" alt=""/>
                          </div>
                        </div>
                      </a>

                      <div className="listing-content">

                        <div className="listing-title">
                          <h4><a href="#">{prop.title}</a></h4>
                          <a href="../../../www.google.com/maps/search/221B%2bBaker%2bStreet%2c%2bLondon%2c%2bUnited%2bKingdom/data%3d%214m2%212m1%214b1acc9.html?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" className="listing-address popup-gmaps">
                            <i className="fa fa-map-marker"></i>
                            9364 School St. Lynchburg, NY
                          </a>

                          <a href="#" className="details button border">Detaljer</a>
                        </div>

                        <ul className="listing-details">
                          <li>530 sq ft</li>
                          <li>1 Bedroom</li>
                          <li>3 Rooms</li>
                          <li>1 Bathroom</li>
                        </ul>

                        <div className="listing-footer">
                          <a href="#"><i className="fa fa-user"></i> David Strozier</a>
                          <span><i className="fa fa-calendar-o"></i> 1 day ago</span>
                        </div>

                      </div>
                      <div className="clearfix"></div>

                    </div>

                  )

                })
              )
              }


        			</div>

              <div className="clearfix"></div>

        			<div className="pagination-container margin-top-20">
        				<nav className="pagination">
        					<ul>
        						<li><a href="#" className="current-page">1</a></li>
        						<li><a href="#">2</a></li>
        						<li><a href="#">3</a></li>
        						<li className="blank">...</li>
        						<li><a href="#">22</a></li>
        					</ul>
        				</nav>

        				<nav className="pagination-next-prev">
        					<ul>
        						<li><a href="#" onClick={this.decrease.bind(this)} className="prev">Forrige</a></li>
        						<li><a href="#" onClick={this.increase.bind(this)} className="next">Næste</a></li>
        					</ul>
        				</nav>
        			</div>

        		</div>


        		<div style={{paddingLeft: '0'}} className="col-md-3">
        			<div className="sidebar sticky right">

        				<div className="widget margin-bottom-40">
        					<h3 className="margin-top-0 margin-bottom-35">Find dit nye Hjem</h3>

                  <div className="row with-forms">
                  <div className="col-md-12">
                    <h5>Område </h5>
                    <Typeahead
                    labelKey="name"
                    options={options}
                    onChange={(selectedCity) => {
                      this.setState({selectedCity,
                        rerender:true
                      });
                    }}
                    placeholder="Hvor vil du gerne bo?"
                    />
                  </div>
                  </div>

        					<div className="row with-forms">
        						<div className="col-md-12">
        							<select data-placeholder="Any Status" onChange={this.updateFilters.bind(this)} id="status">
        								<option disabled>Bolig Status</option>
                        <option value="rent">Til Leje</option>
        								<option value="sale">Til Salg</option>
        							</select>
        						</div>
        					</div>

        					<div className="row with-forms">

        						<div className="col-md-12">
        							<select data-placeholder="Any Type" onChange={this.updateFilters.bind(this)} id="type">
        								<option>Bolig Type</option>
        								<option value="apartment">Lejlighed</option>
        								<option value="house">Hus</option>
        								<option value="room">Værelse</option>
        								<option value="garage">Garage</option>
        								<option value="lot">Grund</option>
        							</select>
        						</div>
        					</div>

                <br/>

        					<div className="range-slider">
        						<label>Areal Størrelse</label>
        						<div id="area-range" data-min="0" data-max="500" data-unit="m2 "></div>
        						<div className="clearfix"></div>
        					</div>

                <br/>

        					<div className="range-slider">
        						<label>Månedelig Leje</label>
        						<div id="price-range" data-min="0" data-max="20000" data-unit="DKK "></div>
        						<div className="clearfix"></div>
        					</div>


        					<button onClick={this.cityValue.bind(this)} className="button fullwidth margin-top-30">Søg</button>


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
  return { auth: state.auth, property: state.property };
}

function loadData(store) {
  return store.dispatch(fetchProperties());
}


export default {
  loadData,
  component: connect(mapStateToProps, { fetchProperties })(FindProperty)
};
