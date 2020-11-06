import React, { Component } from 'react';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar'

const api = {
	"movie": `https://api.themoviedb.org/3/discover/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
	"top_rated_movie": `https://api.themoviedb.org/3/movie/top_rated?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&page=1`,
	"now_playing_movie":`https://api.themoviedb.org/3/movie/now_playing?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&page=1`,
	"upcoming_movie":`https://api.themoviedb.org/3/movie/upcoming?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&page=1`,
	"tv": `https://api.themoviedb.org/3/discover/movie?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`,
	"tv_top_rated":`https://api.themoviedb.org/3/movie/top_rated?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&page=3`,
	"tv_popular":`https://api.themoviedb.org/3/movie/now_playing?api_key=304ca56b1b7b57ca7a47d9b59946be94&language=en-US&page=2`
};

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar/>
				<div className="container-fluid pl-3 py-4">
					<Banner url={api.movie}/>
					<Row title={'Now Playing'} url={api.now_playing_movie} isLarge/>
					<Row title={'Top Rated Movie'} url={api.top_rated_movie}/>
					<Row title={'Popular Movie'} url={api.movie}/>
					<Row title={'Popular Shows'} url={api.tv}/>
					<Row title={'Top Rated Shows'} url={api.tv_top_rated}/>
					<Row title={'Trending Shows'} url={api.tv_popular}/>
					<Row title={'Upcoming Movies'} url={api.upcoming_movie}/>
				</div>
			</>
		);
	}
}
