import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

const base_url = `https://image.tmdb.org/t/p/original`;
export default class DetailMovie extends Component {
	constructor(){
		super()
		this.state={
			data:'',
			genres:'',
			similar_data:'',
			trailer_url:''
		}
	}
	renderTrailer=(data)=>{
		const youStyle={
			backgroundColor:'black',
			width:'100%',
			marginTop: '50px',
			height: '75vh'
		}
		if(data.key){
			let vurl = `https://www.youtube.com/embed/${data.key}`
			return(
				<iframe className="px-lg-5" style={youStyle} src={`${vurl}`} frameBorder="0" allowFullScreen></iframe>
			)
		}
		else{
			let iurl = `${base_url}${this.state.data.backdrop_path}`;
			return(
				<img className="px-lg-5" style={youStyle} src={`${iurl}`} />
			)
		}

	}
	renderDetail=(data)=>{
		if(data){
			return(
				<div className="container-fluid px-0 py-4">
					{this.renderTrailer(this.state.trailer_url)}
					<div className="container-fluid px-lg-5 pt-3">
						<h4 className="py-2">{data.title}</h4>
						<h6 className="pb-3 text-muted"><span style={{color:'#007ad1'}}>{this.state.genres}</span> &middot; {data.spoken_languages[0].name} &middot; {data.release_date.split("-")[0]}</h6>
						<p style={{color:'#c4c3c2'}}>{data.overview}</p>
					</div>
				</div>
			)
		}
	}
	renderSimilar=(data)=>{
		if(data){
			return data.results.map((item)=>{
				return(
					<a href={`/movie/${item.id}`}><img key={item.id} className="row-img py-2 px-2" src={`${base_url}${item.poster_path}`} alt={item.backdrop_path}/></a>
				)
			})
		}
	}
	render() {
		return (
			<>
				<Navbar/>
				{this.renderDetail(this.state.data)}
				<div className="container-fluid">
					<hr style={{borderTop: '1px solid #203a4f'}}/>
				</div>
				
				<div className="container-fluid pl-lg-5 pb-4">
					<h4 className="pl-1">More Like This</h4>
					<div className="row-img d-flex">
						{this.renderSimilar(this.state.similar_data)}
					</div>
				</div>
				
				
			</>
		);
	}
	componentDidMount(){
		let movie_id = this.props.match.params.id;
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US`, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({data: data, genres: data.genres.map((item)=>item.name)[0]});
		})

		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&page=1`)
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({similar_data: data})
		})

		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US`, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({trailer_url:data.results[0]})
		});
	}
}


