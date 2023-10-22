import './style.css'
import { FC } from "react";
import Pizza from "../../models/Pizza";
import { SinglePizza } from "../SinglePizza/SinglePizza";

interface DisplayPizzasProps {
	pizzasList: Pizza[];
}

export const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList }) => {
	return (
		<div className="container">
			{pizzasList.map((pizza) => {
				return <SinglePizza pizza={pizza} key={pizza.id} />
			})}
		</div>
	)
}
