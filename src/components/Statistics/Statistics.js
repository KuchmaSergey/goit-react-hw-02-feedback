import PropTypes from 'prop-types';

export const Statistics = ({ options, total, positivePercentage }) => (
	<>
		{Object.keys(options).map(key => (
			<p key={key} className="capitalize">
				{key}: <strong>{options[key]}</strong>
			</p>
		))}
		<p>
			Total: <strong>{total}</strong>
		</p>
		<p>
			Positive feedback: <strong>{positivePercentage.toFixed(0)}%</strong>
		</p>
	</>
);

Statistics.propTypes = {
	options: PropTypes.object.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};
