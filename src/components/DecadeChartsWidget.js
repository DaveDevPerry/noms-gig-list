import React from 'react';
import styled from 'styled-components';
// import ChartWidget from './ChartWidget';
import DecadeSelectButtons from './DecadeSelectButtons';
import DynamicDecadesChartWidget from './DynamicDecadesChartWidget';

const DecadeChartsWidget = ({
	handleDecadeClick,
	filteredDecadeChartData,
	setFilteredDecadeChartData,
	theme,
}) => {
	return (
		<StyledDecadeChartsWidget>
			{/* <p>total gigs each year per decade</p> */}
			<DynamicDecadesChartWidget theme={theme} gigs={filteredDecadeChartData} />
			<DecadeSelectButtons handleDecadeClick={handleDecadeClick} />
		</StyledDecadeChartsWidget>
	);
};
const StyledDecadeChartsWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	padding: 1rem;
	padding-top: 0;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	/* flex: 1; */
`;

export default DecadeChartsWidget;
