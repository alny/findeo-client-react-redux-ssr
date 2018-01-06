import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postProperty } from '../actions';
import { Helmet } from 'react-helmet';

class SubmitProperty extends Component {
    constructor(){
      super()
      this.state = {
        property: {
          title: '',
          type: '',
          status: '',
          floor: '',
          size: '',
          rooms: '',
          montlyRent: '',
          aconto: '',
          deposit: '',
          prePaidRental: '',
          totalPrice: '',
          rentalPeriod: '',
          moveDate: '',
          address: '',
          city: '',
          zipcode: '',
          description: '',
          bedrooms: '',
          bathrooms: '',
          year: '',
          name: '',
          email: '',
          phone: '',
          shareable: false,
          furnished: false,
          animals: false
        }
      }
    }
  componentDidMount() {

  }

  head() {
    return (
      <Helmet>
        <title>Findeo | Opret boligopslag</title>
        <meta property="og:title" content="Findeo | Opret boligopslag" />
      </Helmet>
    );
  }

  submitProperty(event){
    event.preventDefault();
    this.props.postProperty({title: this.state.property.title,
                             type: this.state.property.type,
                             status: this.state.property.status,
                             floor: this.state.property.floor,
                             size: this.state.property.size,
                             rooms: this.state.property.rooms,
                             montlyRent: this.state.property.montlyRent,
                             aconto: this.state.property.aconto,
                             deposit: this.state.property.deposit,
                             prePaidRental: this.state.property.prePaidRental,
                             totalPrice: this.state.property.totalPrice,
                             rentalPeriod: this.state.property.rentalPeriod,
                             moveDate: this.state.property.moveDate,
                             address: this.state.property.totalPrice,
                             city: this.state.property.city,
                             zipcode: this.state.property.zipcode,
                             description: this.state.property.description,
                             furnished: this.state.property.furnished,
                             shareable: this.state.property.shareable,
                             animals: this.state.property.animals,
                             propertyBy: this.props.auth._id });
    console.log(JSON.stringify(this.state.property))
    console.log(JSON.stringify(this.props.auth._id))

  }

  updateCheckbox(event){
    console.log(this.state.property.furnished)
  }

  updateProperty(event){
      let updated = Object.assign({}, this.state.property)
      event.preventDefault()
      updated[event.target.id] = event.target.value
      this.setState({
        property: updated
      })
      console.log('updateProperty: ' + event.target.id + ' == ' + event.target.value)
  }

  render() {
    return (
      <div style={{marginBottom: '50px'}}>
        {this.head()}
        <div id="titlebar" className="submit-page">
        	<div className="container">
        		<div className="row">
        			<div className="col-md-12">
        				<h2> Tilføj Bolig</h2>
        			</div>
        		</div>
        	</div>
        </div>


        <div className="container">
        <div className="row">

        	<div className="col-md-12">
        		<div className="submit-page">

        		<h3>Grundlæggende oplysninger</h3>
        		<div className="submit-section">

        			<div className="form">
        				<h5>Bolig overskrift <i className="tip" data-tip-content="Type title that will also contains an unique feature of your property (e.g. renovated, air contidioned)"></i></h5>
        				<input onChange={this.updateProperty.bind(this)} id="title" className="search-field" type="text" defaultValue=""/>
        			</div>


        			<div className="row with-forms">


        				<div className="col-md-6">
        					<h5>Bolig Status</h5>
        					<select onChange={this.updateProperty.bind(this)} id="status">
                    <option label="blank">Vælg</option>
        						<option value="rent">Til Leje</option>
        						<option value="sale">Til Salg</option>
        					</select>
        				</div>


        				<div className="col-md-6">
        					<h5>Bolig Type</h5>
        					<select onChange={this.updateProperty.bind(this)} id="type">
                    <option label="blank">Vælg</option>
        						<option value="apartment">Lejlighed</option>
        						<option value="house">Hus</option>
        						<option value="room">Værelse</option>
        						<option value="garage">Garage</option>
        						<option value="lot">Grund</option>
        					</select>
        				</div>

        			</div>

        			<div className="row with-forms">

                <div className="col-md-4">
        					<h5>Etage</h5>
        					<select onChange={this.updateProperty.bind(this)} id="floor">
                    <option label="blank">Hvilken Etage</option>
                    <option value="ground">Stuen</option>
        						<option>1</option>
        						<option>2</option>
        						<option>3</option>
        						<option>4</option>
        						<option>5</option>
        						<option>6</option>
                    <option>7</option>
                    <option>8</option>
        					</select>
        				</div>

        				<div className="col-md-4">
        					<h5>Areal</h5>
        					<div className="select-input disabled-first-option">
        						<input onChange={this.updateProperty.bind(this)} id="size" type="text" data-unit="m2"/>
        					</div>
        				</div>

        				<div className="col-md-4">
        					<h5>Værelser</h5>
        					<select onChange={this.updateProperty.bind(this)} id="rooms">
                    <option label="blank">Antal Vælelser</option>
        						<option>1</option>
        						<option>2</option>
        						<option>3</option>
        						<option>4</option>
        						<option>5</option>
        						<option value="6">Mere end 5</option>
        					</select>
        				</div>

        			</div>

              <h3>Økonomi</h3>

              <div className="row with-forms">
                <div className="submit-section">
                <div className="col-md-4">
                  <h5>Månedlig husleje</h5>
                  <div className="select-input disabled-first-option">
                    <input type="text" onChange={this.updateProperty.bind(this)} id="montlyRent" data-unit="DKK"/>
                  </div>
                </div>

                <div className="col-md-4">
                  <h5>Aconto <i className="tip" data-tip-content="Type overall or monthly price if property is for rent"></i></h5>
                  <div className="select-input disabled-first-option">
                    <input type="text" onChange={this.updateProperty.bind(this)} id="aconto" data-unit="DKK"/>
                  </div>
                </div>

                <div className="col-md-4">
                  <h5>Depositum <i className="tip" data-tip-content="Type overall or monthly price if property is for rent"></i></h5>
                  <div className="select-input disabled-first-option">
                    <input onChange={this.updateProperty.bind(this)} id="deposit" type="text" data-unit="DKK"/>
                  </div>
                </div>

              </div>


                <div className="col-md-6">
                  <h5>Forudbetalt husleje <i className="tip" data-tip-content="Type overall or monthly price if property is for rent"></i></h5>
                  <div className="select-input disabled-first-option">
                    <input type="text" onChange={this.updateProperty.bind(this)} id="prePaidRental" data-unit="DKK"/>
                  </div>
                </div>

                <div className="col-md-6">
                  <h5>Samlet pris for indflytning <i className="tip" data-tip-content="Type overall or monthly price if property is for rent"></i></h5>
                  <div className="select-input disabled-first-option">
                    <input type="text" onChange={this.updateProperty.bind(this)} id="totalPrice" data-unit="DKK"/>
                  </div>
                </div>
              </div>
              <h3>Indflytning</h3>

              <div className="row with-forms">
                <div className="submit-section">
                  <div className="col-md-6">
                    <h5>Lejeperiode</h5>
                    <select onChange={this.updateProperty.bind(this)} id="rentalPeriod">
                      <option label="blank">Vælg lejeperiode</option>
                      <option value="unlimited">Ubegrænset</option>
                      <option value="month">2-12 måneder</option>
                      <option value="year">1-2 År</option>
                      <option value="years">2+ År</option>
                      </select>
                  </div>

                <div className="col-md-6">
                  <h5>Indflytningsdato <i className="tip" data-tip-content="Type overall or monthly price if property is for rent"></i></h5>
                  <div className="select-input disabled-first-option">
                    <input type="text" onChange={this.updateProperty.bind(this)} id="moveDate" placeholder="01/01/20XX" data-unit="Dato"/>
                  </div>
                </div>

              </div>

              </div>
        		</div>

        		<h3>Billeder</h3>
        		<div className="submit-section">
        			<form action="#" className="dropzone"></form>
        		</div>

        		<h3>Lokation</h3>
        		<div className="submit-section">

        			<div className="row with-forms">

        				<div className="col-md-6">
        					<h5>Adresse</h5>
        					<input onChange={this.updateProperty.bind(this)} id="address" type="text"/>
        				</div>

        				<div className="col-md-6">
        					<h5>By</h5>
        					<input onChange={this.updateProperty.bind(this)} id="city" type="text"/>
        				</div>

        				<div className="col-md-12">
        					<h5>Post Nr</h5>
        					<input type="text" onChange={this.updateProperty.bind(this)} id="zipcode"/>
        				</div>

        			</div>

        		</div>

        		<h3>Detaljeret beskrivelse</h3>
        		<div className="submit-section">

        			<div className="form">
        				<h5>Beskrivelse</h5>
        				<textarea onChange={this.updateProperty.bind(this)} id="moveDate" className="WYSIWYG" name="summary" cols="40" rows="3" id="description" spellCheck="true"></textarea>
        			</div>


        			<h5 className="margin-top-30">Andet <span>(valgfri)</span></h5>
        			<div className="checkboxes in-row margin-bottom-20">

        				<input defaultChecked={this.state.property.furnished} id="check-2" type="checkbox" />
        				<label htmlFor="check-2">Møbleret</label>

        				<input onChange={this.updateProperty.bind(this)} id="shareable" type="checkbox" name="check"/>
        				<label htmlFor="check-3">Delevenlig</label>

        				<input onChange={this.updateProperty.bind(this)} id="animals" type="checkbox" name="check"/>
        				<label htmlFor="check-4">Husdyr tilladt  </label>
        			</div>

        		</div>
        		<div className="divider"></div>
        		<a href="#" onClick={this.submitProperty.bind(this)} className="button preview margin-top-5">Opret <i className="fa fa-arrow-circle-right"></i></a>

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
  component: connect(mapStateToProps, { postProperty })(SubmitProperty)
};
