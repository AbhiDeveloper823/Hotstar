import React, { Component } from 'react';
import './Banner.css';
import {Link} from 'react-router-dom';

const base_url = `https://image.tmdb.org/t/p/original`;
export default class Banner extends Component {
	constructor(){
		super()
		this.state={
			list:'',
			sliceList:''
		}
	}
	renderBanner=(data)=>{

		const myStyle={
			backgroundImage: `linear-gradient(to right, #030B17 5px, rgba(0, 0, 0, 0)) ,url(${base_url}${data.backdrop_path})`,
			backgroundRepeat : 'no-repeat',
	      	backgroundSize: 'cover',
	  		backgroundPosition : 'center center',
	  		borderTopRightRadius:"20px",
			borderBottomRightRadius:"20px"
		}
		const bannerContent={
			backgroundColor: "#030B17",
			borderTopLeftRadius:"20px",
			borderBottomLeftRadius:"20px"
		}

		if(data){
			return(
				<>
				<div className="container-fluid pt-5">
					<div className="row">
						<div className="d-none d-md-block col-lg-5" style={bannerContent}>
							<div className="d-flex banner-content flex-column pt-5">
								<h3>{data.title}</h3>
								<p className="release py-2">{data.release_date} | {data.vote_average}</p>
								<p className="overview">{data.overview}</p>
								<Link to={`/movie/${data.id}`}><h5 className="pt-3"><i className="fa fa-play pr-2"></i>  Watch Now</h5></Link>
							</div>
						</div>
						<div className="banner-img col-12 col-lg-7" style={myStyle}>
						</div>
					</div>
				</div>
				
				</>
			)
		}
	}
	renderUnactiveBanner=(data)=>{
		if(data){
			return data.map((item)=>{
				const myStyle={
					backgroundImage: `linear-gradient(to right, #030B17 5px, rgba(0, 0, 0, 0)) ,url(${base_url}${item.backdrop_path})`,
					backgroundRepeat : 'no-repeat',
			      	backgroundSize: 'cover',
			  		backgroundPosition : 'center center',
			  		borderTopRightRadius:"20px",
					borderBottomRightRadius:"20px"
				}
				const bannerContent={
					backgroundColor: "#030B17",
					borderTopLeftRadius:"20px",
					borderBottomLeftRadius:"20px"
				}
				return(
					<>
					<div className="carousel-item" key={item.id}>
						<div className="container-fluid pt-5">
							<div className="row">
								<div className="d-none d-lg-block col-lg-5" style={bannerContent}>
									<div className="d-flex banner-content flex-column pt-5">
										<h3>{item.title}</h3>
										<p className="release py-2">{item.release_date} | {item.vote_average}</p>
										<p className="overview">{item.overview}</p>
										<Link to={`/movie/${item.id}`}><h5 className="pt-3"><i className="fa fa-play pr-2"></i>  Watch Now</h5></Link>
									</div>
								</div>
								<div className="banner-img col-12 col-lg-7" style={myStyle}>
								</div>
							</div>
						</div>
					</div>
					</>
				)
			})
		}
	}
	render() {
		return (
			<>
			<div id="demo" class="carousel slide px-0 px-lg-3" data-ride="carousel">
			 <div class="carousel-inner">
			    <div class="carousel-item active">
			    	{this.renderBanner(this.state.list)}
			    </div>
			    	{this.renderUnactiveBanner(this.state.sliceList)}
			  </div>
			  </div>
			</>
		);
	}
	componentDidMount(){
		fetch(this.props.url, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			console.log()
			this.setState({list:data.results[Math.floor(Math.random() * data.results.length)], sliceList:data.results.slice(10 ,15)})
		})
	}
}
