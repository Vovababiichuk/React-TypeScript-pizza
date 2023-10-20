import React, { FC } from "react";
import { Fragment } from "react";
import Pizza from "../../models/Pizza";
import './style.css'

interface DisplayPizzasProps {
	pizzasList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList }) => {
	return (
		<div className="container">
			{pizzasList.map((pizza) => {
				return (

					<Fragment key={pizza.id}>
						<div>{pizza.title}</div>
						<div>{pizza.price}</div>
					</Fragment>
			)
			})}
		</div>
	)
}

export default DisplayPizzas