import React, { Component } from 'react';
import './Row.css';
import {Link} from 'react-router-dom'

const base_url = `https://image.tmdb.org/t/p/original`;
export default class Row extends Component {
	constructor(){
		super()
		this.state={
			list:''
		}
	}
	renderList=(data)=>{
		if(data){
			return data.map((item)=>{
				return(
					<>
						<Link to={`/movie/${item.id}`}>
							<img key={item.id} className=" py-2 px-2" src={`${base_url}${item.poster_path}`} alt={item.backdrop_path}/>
						</Link>
					</>
				)
				
			})
		}
	}
	render() {
		return (
			<>
				<div className="container-fluid py-3">
					<h5>{this.props.title}</h5>
					<div className="row">
						<div className="row-img d-flex">
							{this.renderList(this.state.list)}
						</div>
					</div>
				</div>
				
			</>
		);
	}
	componentDidMount(){
		let url = this.props.url;
		fetch(url, {mthod:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({list: data.results})
		})
	}
}
