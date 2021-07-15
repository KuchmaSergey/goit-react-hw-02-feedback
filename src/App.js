import React, { Component } from 'react';
import './App.css';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Notification } from './components/Notification';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	onLeaveFeedback = ({ target }) => {
		const { name } = target;
		this.setState(prevState => ({
			[name]: prevState[name] + 1,
		}));
	};

	countTotalFeedback() {
		return Object.values(this.state).reduce((acc, val) => (acc += val), 0);
	}

	countPositiveFeedbackPercentage() {
		return (this.state.good / this.countTotalFeedback()) * 100;
	}

	render() {
		const total = this.countTotalFeedback();

		return (
			<React.StrictMode>
				<h1>Please leave feedback</h1>
				<FeedbackOptions
					options={this.state}
					onLeaveFeedback={this.onLeaveFeedback}
				/>
				{total ? (
					<Statistics
						total={total}
						positivePercentage={this.countPositiveFeedbackPercentage()}
						options={this.state}
					/>
				) : (
					<Notification message="No feedback given" />
				)}
			</React.StrictMode>
		);
	}
}

export default App;
