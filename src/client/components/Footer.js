import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="sticky-footer">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-5 col-sm-6">
    				<img className="footer-logo" src="images/logo.png" alt=""/>
    				<br/><br/>
    				<p>Nem og gratis måde at Leje/Udleje/Købe/Sælge sin Bolig.</p>
    			</div>

    			<div className="col-md-4 col-sm-6 ">
    				<h4>Oversigt</h4>
    				<ul className="footer-links">
    					<li><a href="#">Om Findeo</a></li>
    					<li><a href="#">Holdet bag</a></li>
    					<li><a href="#">Om Boligsøgning</a></li>
    					<li><a href="#">Opret boligopslag</a></li>
    					<li><a href="#">Vilkår</a></li>
    				</ul>

    				<ul className="footer-links">
    					<li><a href="#">FAQ</a></li>
    					<li><a href="#">Blog</a></li>
    					<li><a href="#">Lejekontrakter</a></li>
    					<li><a href="#">Hvordan det fungerer?</a></li>
    					<li><a href="#">Kontakt</a></li>
    				</ul>
    				<div className="clearfix"></div>
    			</div>

    			<div className="col-md-3  col-sm-12">
    				<h4>Kontakt Os</h4>
    				<div className="text-widget">
    					<span>Yolovej 1337, Mars</span> <br/>
    					Telefon: <span>(123) 123-456 </span><br/>
    					E-Mail:<span> <a href="#">
            </a> </span><br/>
    				</div>

    				<ul className="social-icons margin-top-20">
    					<li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
    					<li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
    					<li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
    					<li><a className="vimeo" href="#"><i className="icon-vimeo"></i></a></li>
    				</ul>

    			</div>

    		</div>


    		<div className="row">
    			<div className="col-md-12">
    				<div className="copyrights">© 2017 Findeo. All Rights Reserved.</div>
    			</div>
    		</div>

    	</div>

    </div>
  );
};


export default Footer;
