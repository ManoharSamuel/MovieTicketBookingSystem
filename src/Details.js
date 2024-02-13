/* eslint-disable eqeqeq */
import logo from './logo.svg'
import './App.css'
import ReactDOM from 'react-dom'
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

class Details extends React.Component {
	constructor() {
		super()
		this.state = {
			id: '',
			items: [],
		}
	}

	componentDidMount() {
		const nm = this.props.match.params.name
		this.setState({
			id: nm,
		})
		if (nm == 1) {
			axios
				.get('http://localhost:4000/movies/1')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		} else if (nm == 2) {
			axios
				.get('http://localhost:4000/movies/2')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		} else if (nm == 3) {
			axios
				.get('http://localhost:4000/movies/3')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		} else if (nm == 4) {
			axios
				.get('http://localhost:4000/movies/4')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		} else if (nm == 5) {
			axios
				.get('http://localhost:4000/movies/5')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		} else if (nm == 6) {
			axios
				.get('http://localhost:4000/movies/6')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		} else if (nm == 7) {
			axios
				.get('http://localhost:4000/movies/7')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		} else if (nm == 8) {
			axios
				.get('http://localhost:4000/movies/8')
				.then((resp) => {
					this.setState({
						items: resp.data,
					})
				})
				.catch((err) => console.log(err))
		}
	}

	change = (path) => {
		this.props.history.push(path)
	}

	changeb = (path) => {
		this.props.history.push(`/Booking/${path}`)
	}

	render() {
		const { items, id } = this.state
		if (id == 1) {
			items.image = 'https://flxt.tmsimg.com/assets/p28630_p_v8_at.jpg'
			items.title = items.title1
			items.date = items.date1
			items.duration = items.duration1
			items.ratings = items.ratings1
		} else if (id == 2) {
			items.image = 'https://images2.vudu.com/poster2/10323-338'
			items.title = items.title2
			items.date = items.date2
			items.duration = items.duration2
			items.ratings = items.ratings2
		} else if (id == 3) {
			items.image =
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiD7e5cKr_ahaEtcry1227SylBn5b3ARfg2g&usqp=CAU'
			items.title = items.title3
			items.date = items.date3
			items.duration = items.duration3
			items.ratings = items.ratings3
		} else if (id == 4) {
			items.image =
				'https://www.themoviedb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg'
			items.title = items.title4
			items.date = items.date4
			items.duration = items.duration4
			items.ratings = items.ratings4
		} else if (id == 5) {
			items.title = items.title5
			items.date = items.date5
			items.duration = items.duration5
			items.ratings = items.ratings5
		} else if (id == 6) {
			items.title = items.title6
			items.date = items.date6
			items.duration = items.duration6
			items.ratings = items.ratings6
		} else if (id == 7) {
			items.title = items.title7
			items.date = items.date7
			items.duration = items.duration7
			items.ratings = items.ratings7
		} else if (id == 8) {
			items.title = items.title8
			items.date = items.date8
			items.duration = items.duration8
			items.ratings = items.ratings8
		}

		return (
			<div>
				<h2>
					{' '}
					<center>
						{' '}
						Welcome to the {items.title}
						details page{' '}
					</center>
				</h2>
				<center>
					<div class='row'>
						<div class='column4'>
							<img width='250px' src={items.image} />{' '}
						</div>{' '}
						<div class='column4'>
							<table>
								<tr>
									{' '}
									<td>
										{' '}
										<b>
											{' '}
											<p> Movie Name </p>
										</b>{' '}
									</td>
									<td>{items.title}</td>{' '}
								</tr>{' '}
								<tr>
									{' '}
									<td>
										{' '}
										<b>
											{' '}
											<p> Release Date </p>
										</b>{' '}
									</td>
									<td>{items.date}</td>{' '}
								</tr>{' '}
								<tr>
									{' '}
									<td>
										{' '}
										<b>
											{' '}
											<p> Duration </p>
										</b>{' '}
									</td>
									<td>{items.duration}</td>{' '}
								</tr>{' '}
								<tr>
									{' '}
									<td>
										{' '}
										<b>
											{' '}
											<p> Ratings </p>
										</b>{' '}
									</td>
									<td>{items.ratings}</td>{' '}
								</tr>{' '}
							</table>{' '}
						</div>
					</div>{' '}
					<button onClick={() => this.changeb(`${items.id}`)}>
						{' '}
						Book Now{' '}
					</button>{' '}
				</center>{' '}
				<br /> <br />
				<div>
					<center>
						{' '}
						<button onClick={() => this.change('/Home')}> Go Home </button>
					</center>
				</div>{' '}
				<br /> <br />
			</div>
		)
	}
}

export default withRouter(Details)
