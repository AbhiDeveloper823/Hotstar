import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import './Search.css';

const base_url = `https://image.tmdb.org/t/p/original`;
export default class Search extends Component {
	constructor(){
		super()
		this.state={
			search_data:''
		}
	}
	renderSearch=(data)=>{
		if(data){
			return data.map((item)=>{
				return(
					<>
						<div className="col-6 col-lg-3 mx-auto py-4 search">
							<Link to={`/movie/${item.id}`}><img className="img-fluid" src={`${base_url}${item.poster_path}`}  alt=""/></Link>
						</div>
					</>
				)
			})
		}
	}
	render() {
		return (
			<>
				<Navbar/>
				<div className="container-fluid px-3 my-5">
					<div className="row">
						{this.renderSearch(this.state.search_data)}
					</div>
				</div>
			</>
		);
	}
	componentDidMount(){
		let movie = this.props.match.params.name;
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&query=${movie}&page=1&include_adult=false`, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({search_data: data.results});
		})
	}
}
