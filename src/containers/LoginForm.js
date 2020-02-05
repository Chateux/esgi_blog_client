import React from "react";


export default class LoginForm extends React.Component {

	state = {
		email: "",
		password: ""
	};

	handleKeyUp = (event, field) => {
		const input = event.currentTarget;

		this.setState({
			[field]: input.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Email </label>
				<input onKeyUp={(event) => this.handleKeyUp(event, "email")}/>
				<label>Password</label>
				<input onKeyUp={(event) => this.handleKeyUp(event, "password")}/>
				<button type="submit">test</button>
			</form>


		)
	}
}