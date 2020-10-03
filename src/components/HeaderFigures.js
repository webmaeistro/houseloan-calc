import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'NOK',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const HeaderFigures = props => {
	return(
		<div className="grid__container">
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.amountToBorrow).toLocaleString('nb-NO', localeOptions)}
				</span>
				<div className="grid__item--label">Amount To Borrow</div>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.monthlyPayment).toLocaleString('nb-NO', localeOptions)}
				</span>
				<div className="grid__item--label">Monthly Payment</div>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.totalRepaid).toLocaleString('nb-NO', localeOptions)}
				</span>
				<div className="grid__item--label">Total Repaid</div>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.totalInterestPaid).toLocaleString('nb-NO', localeOptions)}
				</span>
				<div className="grid__item--label">Total Interest Paid</div>
			</div>
		</div>
	)
}