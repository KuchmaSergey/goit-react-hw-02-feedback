import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
	<>
		{Object.keys(options).map(opt => (
			<button
				key={opt}
				name={opt}
				onClick={onLeaveFeedback}
				className="capitalize"
			>
				{opt}
			</button>
		))}
	</>
);

FeedbackOptions.propTypes = {
	options: PropTypes.object.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};
