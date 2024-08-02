import React from "react";

const localeOptions = {
  style: "currency",
  currency: "NOK",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

<<<<<<< HEAD
export const CalculatorControls = (props) => {
  return (
    <div className="grid__container">
      <div className="grid__item">
        <span className="grid__item--header">
          {props.purchasingHousePrice.toLocaleString("nb-NO", localeOptions)}
        </span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="purchasingHousePrice"
          min="1"
          max="140000"
          step="500"
          defaultValue="40000"
          onChange={() =>
            props.handleHouseloanDataChange(
              parseFloat(document.getElementById("depositAmount").value),
              parseFloat(document.getElementById("purchasingHousePrice").value),
              parseFloat(document.getElementById("houseloanTerm").value),
              parseFloat(document.getElementById("interestRate").value)
            )
          }
        />
        <label className="grid__item--label" htmlFor="purchasingHousePrice">
          Total owed
        </label>
      </div>
      <div className="grid__item">
        <span className="grid__item--header">
          {props.depositAmount.toLocaleString("nb-NO", localeOptions)}
        </span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="depositAmount"
          min="0"
          max="125000"
          step="500"
          defaultValue="100"
          onChange={() =>
            props.handleHouseloanDataChange(
              parseFloat(document.getElementById("depositAmount").value),
              parseFloat(document.getElementById("purchasingHousePrice").value),
              parseFloat(document.getElementById("houseloanTerm").value),
              parseFloat(document.getElementById("interestRate").value)
            )
          }
        />
        <label className="grid__item--label" htmlFor="points">
          Own Capital
        </label>
      </div>
      <div className="grid__item">
        <span className="grid__item--header">
          {props.houseloanTerm} yr/mnt{" "}
        </span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="houseloanTerm"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue="1"
          onChange={() =>
            props.handleHouseloanDataChange(
              parseFloat(document.getElementById("depositAmount").value),
              parseFloat(document.getElementById("purchasingHousePrice").value),
              parseFloat(document.getElementById("houseloanTerm").value),
              parseFloat(document.getElementById("interestRate").value)
            )
          }
        />
        <label className="grid__item--label" htmlFor="houseloanTerm">
          Loan Periode/Term
        </label>
      </div>
      <div className="grid__item">
        <span className="grid__item--header">{props.interestRate}%</span>
        <input
          type="range"
          className="grid__item--range-slider"
          id="interestRate"
          min="0.1"
          max="12"
          step="0.25"
          defaultValue="0.8"
          onChange={() =>
            props.handleHouseloanDataChange(
              parseFloat(document.getElementById("depositAmount").value),
              parseFloat(document.getElementById("purchasingHousePrice").value),
              parseFloat(document.getElementById("houseloanTerm").value),
              parseFloat(document.getElementById("interestRate").value)
            )
          }
        />
        <label className="grid__item--label" htmlFor="interestRate">
          Interest Rate
        </label>
      </div>
    </div>
  );
};
=======
export const CalculatorControls = props => {
	return(
		<div className="grid__container">			
			<div className="grid__item">
				<span className="grid__item--header">{props.purchasingHousePrice.toLocaleString('nb-NO', localeOptions)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="purchasingHousePrice"  
					min="0000" 
					max="140000" 
					step="150" 
					defaultValue="125000" 
					onChange={() => props.handleHouseloanDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houseloanTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="purchasingHousePrice">Total owed</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.depositAmount.toLocaleString('nb-NO', localeOptions)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="depositAmount" 
					min="10" 
					max="1250000" 
					step="500" 
					defaultValue="0" 
					onChange={() => props.handleHouseloanDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houseloanTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="points">Own Capital</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.houseloanTerm} yr/mnt </span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="houseloanTerm"  
					min="1" 
					max="3" 
					step="0.5" 
					defaultValue="2" 
					onChange={() => props.handleHouseloanDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houseloanTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="houseloanTerm">Loan Periode/Term</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.interestRate}%</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="interestRate"  
					min="0.1" 
					max="12" 
					step="0.25" 
					defaultValue="0.8" 
					onChange={() => props.handleHouseloanDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('houseloanTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="interestRate">Interest Rate</label>
			</div>
		</div>
	);
}
>>>>>>> b8c8e32fc29aa8c54617b7fc834cce95c8dfe498
