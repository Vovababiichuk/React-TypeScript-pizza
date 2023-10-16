import { FC, useState, ChangeEvent, FormEvent } from 'react'
import './styles.css'
import { HiPlusCircle } from 'react-icons/hi'


//NOTE - пропишем початкове значення полей для початкового стану (newPizza)
const initState = {
	title: '',
	price: '',
	img: '',
}

export const AddPizzaForm: FC = () => {
	const [newPizza, setNewPizza] =
		useState<{ title: string; price: string; img: string }>(initState)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setNewPizza({
			...newPizza,
			[name]: value,
		})
	}

	console.log('new pizza, newPizza')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('handle submit >>', e.target)
	}

	console.log(newPizza)

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				placeholder='Name'
				onChange={handleChange}
				value={newPizza.title}
			/>
			<input
				type='number'
				name='price'
				placeholder='Price'
				onChange={handleChange}
				value={newPizza.price}
			/>
			<input
				type='text'
				name='img'
				placeholder='Images'
				onChange={handleChange}
				value={newPizza.img}
			/>
			<button type='submit' className='add'>
				<span>Add in menu</span>
				<span className='icon'><HiPlusCircle /></span>
			</button>
		</form>
	)
}
