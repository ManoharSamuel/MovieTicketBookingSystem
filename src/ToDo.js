import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class ToDo extends React.Component {
	constructor() {
		super()
		this.state = {
			items: [],
		}
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos')
			.then((resp) => {
				this.setState({
					items: resp.data,
				})
			})
			.catch((err) => console.log(err))
	}

	render() {
		const { items } = this.state
		return (
			<div>
				<h2>List of ToDos :</h2>
				<br />
				{items.map((items) => (
					<ul>
						<li>{items.title}</li>
					</ul>
				))}
			</div>
		)
	}
}

export default ToDo
