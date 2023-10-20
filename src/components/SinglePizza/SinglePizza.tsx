import './style.css'
import { FC } from "react";
import Pizza from "../../models/Pizza";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

interface SinglePizzaProps {
	pizza: Pizza;
}

export const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
	return (
		<div className="pizza">

			<img src={`./img/${pizza.img}`} alt={pizza.title} />
			<h2>{pizza.title}</h2>
			<span>{pizza.price}₴</span>

			<div className="pizza-controls">
				<AiFillEdit />
				<MdDelete />
			</div>
		</div>
	)
}
