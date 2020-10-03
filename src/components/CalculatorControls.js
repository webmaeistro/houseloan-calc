import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'NOK',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const CalculatorControls = props => {
	return(
		<div className="grid__container">			
			<div className="grid__item">
				<span className="grid__item--header">{props.purchasingHousePrice.toLocaleString('nb-NO', localeOptions)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="purchasingHousePrice"  
					min="50000" 
					max="750000" 
					step="1000" 
					defaultValue="285000" 
					onChange={() => props.handleHouslonDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houslonTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="purchasingHousePrice">Purchasing House Price</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.depositAmount.toLocaleString('nb-NO', localeOptions)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="depositAmount" 
					min="1000" 
					max="150000" 
					step="1000" 
					defaultValue="72000" 
					onChange={() => props.handleHouslonDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houslonTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="points">Deposit</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.houslonTerm} Years</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="houslonTerm"  
					min="5" 
					max="35" 
					step="1" 
					defaultValue="25" 
					onChange={() => props.handleHouslonDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houslonTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="houslonTerm">Houslon Term</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.interestRate}%</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="interestRate"  
					min="0.1" 
					max="8" 
					step="0.1" 
					defaultValue="1.8" 
					onChange={() => props.handleHouslonDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houslonTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="interestRate">Interest Rate</label>
			</div>
		</div>
	);
}