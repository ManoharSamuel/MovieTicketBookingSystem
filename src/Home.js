import logo from './logo.svg'
import './App.css'
import ReactDOM from 'react-dom'
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import AwesomeSlider from 'react-awesome-slider'
import { slider } from './slider'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

class Home extends React.Component {
	constructor() {
		super()
		this.state = {
			items1: [],
			items2: [],
			items3: [],
			items4: [],
			items5: [],
			items6: [],
			items7: [],
			items8: [],
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/movies/1')
			.then((resp) => {
				this.setState({
					items1: resp.data,
				})
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/movies/2')
			.then((resp) => {
				this.setState({
					items2: resp.data,
				})
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/movies/3')
			.then((resp) => {
				this.setState({
					items3: resp.data,
				})
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/movies/4')
			.then((resp) => {
				this.setState({
					items4: resp.data,
				})
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/movies/5')
			.then((resp) => {
				this.setState({
					items5: resp.data,
				})
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/movies/6')
			.then((resp) => {
				this.setState({
					items6: resp.data,
				})
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/movies/7')
			.then((resp) => {
				this.setState({
					items7: resp.data,
				})
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/movies/8')
			.then((resp) => {
				this.setState({
					items8: resp.data,
				})
			})
			.catch((err) => console.log(err))
	}

	changed = (path) => {
		this.props.history.push(`/Details/${path}`)
	}

	changeb = (path) => {
		this.props.history.push(`/Booking/${path}`)
	}

	changedn = (path) => {
		this.props.history.push(`/upComingDetails/${path}`)
	}

	render() {
		const { items1, items2, items3, items4, items5, items6, items7, items8 } =
			this.state

		return (
			<div>
				<link
					rel='stylesheet'
					href='<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css'
				/>
				<div class='row'>
					<div class='column'>
						<table>
							<tr>
								<th></th>
								<th colSpan='3' align='center'>
									Latest Movies
								</th>
								<th></th>
							</tr>
							<tr>
								<td>{items1.title1}</td>
								<td>{items2.title2}</td>
								<td>{items3.title3}</td>
							</tr>
							<tr>
								<td>
									<button onClick={() => this.changed(`${items1.id}`)}>
										Details
									</button>
								</td>
								<td>
									<button onClick={() => this.changed(`${items2.id}`)}>
										Details
									</button>
								</td>
								<td>
									<button onClick={() => this.changed(`${items3.id}`)}>
										Details
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button onClick={() => this.changeb(`${items1.id}`)}>
										Book
									</button>
								</td>
								<td>
									<button onClick={() => this.changeb(`${items2.id}`)}>
										Book
									</button>
								</td>
								<td>
									<button onClick={() => this.changeb(`${items3.id}`)}>
										Book
									</button>
								</td>
							</tr>
						</table>
					</div>
					<div class='column'>
						<table>
							<tr>
								<th></th>
								<th colSpan='3' align='center'>
									Upcoming Movies
								</th>
								<th></th>
							</tr>
							<tr>
								<td>{items6.title6}</td>
								<td>{items7.title7}</td>
								<td>{items8.title8}</td>
							</tr>
							<tr>
								<td>
									<button onClick={() => this.changedn(`${items6.id}`)}>
										Details
									</button>
								</td>
								<td>
									<button onClick={() => this.changedn(`${items7.id}`)}>
										Details
									</button>
								</td>
								<td>
									<button onClick={() => this.changedn(`${items8.id}`)}>
										Details
									</button>
								</td>
							</tr>
						</table>
					</div>
					<div class='column'>
						<table>
							<tr>
								<th></th>
								<th colSpan='3' align='center'>
									Nearby Events{' '}
								</th>
								<th></th>
							</tr>
							<tr>
								<td>
									<strong>Event1</strong>
								</td>
								<td>
									<strong>Event2</strong>
								</td>
								<td>
									<strong>Event3</strong>
								</td>
							</tr>
							<tr>
								<td>Today 6.30 PM</td>
								<td>Tomorrow 10 AM</td>
								<td>Saturday 6.30 PM</td>
							</tr>
							<tr>
								<td>@Clg Ground, Secunderabad</td>
								<td>@Auditorium, Vijayawada</td>
								<td>@Twitch/Youtube Live Stream</td>
							</tr>
						</table>
					</div>
				</div>
				<div class='carousel-wrapper' align='justified'>
					<center>
						<Carousel width={400} showArrows={true} infiniteLoop={true}>
							<div>
								<img src='https://www.themoviedb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg' />
							</div>
							<div>
								<img src='https://images2.vudu.com/poster2/10323-338' />
							</div>
							<div>
								<img src='https://flxt.tmsimg.com/assets/p28630_p_v8_at.jpg' />
							</div>
							<div>
								<img src='https://cdn11.bigcommerce.com/s-twbzkv97cv/images/stencil/1280x1280/products/3983/6478/HarryPotterAndTheDeathlyHallowsPart2__55018.1578185960.jpg?c=2' />
							</div>
							<div>
								<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiD7e5cKr_ahaEtcry1227SylBn5b3ARfg2g&usqp=CAU' />
							</div>
							<div>
								<img src='https://images-na.ssl-images-amazon.com/images/I/91oZqUjhv8L._RI_.jpg' />
							</div>
							<div>
								<img src='https://mk0movieguide99l7786.kinstacdn.com/wp-content/uploads/2012/08/harry_potter_and_the_half_blood_prince_ver22.jpg' />
							</div>
						</Carousel>
					</center>
				</div>
				<div class='row'>
					<div class='column3'>
						<table>
							<tr>
								<th></th>
								<th class='App'>Recommended Movies</th>
								<th></th>
							</tr>
							<tr>
								<td>{items2.title2}</td>
								<td>{items3.title3}</td>
								<td>{items1.title1}</td>
								<td>{items4.title4}</td>
							</tr>
							<tr>
								<td>
									<button onClick={() => this.changed(`${items2.id}`)}>
										Details
									</button>
								</td>
								<td>
									<button onClick={() => this.changed(`${items3.id}`)}>
										Details
									</button>
								</td>
								<td>
									<button onClick={() => this.changed(`${items1.id}`)}>
										Details
									</button>
								</td>
								<td>
									<button onClick={() => this.changed(`${items4.id}`)}>
										Details
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button onClick={() => this.changeb(`${items2.id}`)}>
										Book
									</button>
								</td>
								<td>
									<button onClick={() => this.changeb(`${items3.id}`)}>
										Book
									</button>
								</td>
								<td>
									<button onClick={() => this.changeb(`${items1.id}`)}>
										Book
									</button>
								</td>
								<td>
									<button onClick={() => this.changeb(`${items4.id}`)}>
										Book
									</button>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Home)
