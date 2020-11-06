import React from 'react';
import './Navbar.css';
import {Link, withRouter} from 'react-router-dom';

const Navbar = (props) => {
  const handleSearch=(e)=>{
    let movie = e.target.previousElementSibling.value;
    props.history.push(`/movie/search/${movie}`);
  }
  return (
    <>
    	<nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top" style={{backgroundColor:'#0c111b'}}>
    		<div className="container">
    			<Link to="/" className="navbar-brand mb-2"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=""/></Link>
    			<div className="collapse navbar-collapse" id="nav">
    				<ul className="navbar-nav"> 
    					<li className="nav-item"> 
    						<a href="" className="nav-link pr-2">TV</a>
    					</li>
    					<li className="nav-item"> 
    						<a href="" className="nav-link pr-2">Movies</a>
    					</li>
    					<li className="nav-item"> 
    						<a href="" className="nav-link pr-2">Sports</a>
    					</li>
    					<li className="nav-item"> 
    						<a href="" className="nav-link pr-2">News</a>
    					</li>
    					<li className="nav-item"> 
    						<a href="" className="nav-link pr-2">Premium</a>
    					</li>
    				</ul>
    			</div>
                <ul className="navbar-nav ml-auto">
                    <input class="nav_input" type="text" placeholder="Search"/>
                    <i onClick={handleSearch}  className="fa fa-search"></i>
                </ul>
    		</div>
    	</nav>
    </>
  )
}

export default withRouter(Navbar);