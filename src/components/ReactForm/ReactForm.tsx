import { useForm, SubmitHandler } from 'react-hook-form';
import './ReactForm.css'

interface MyForm {
	name: string;
	age: number;
}

export const ReactForm = () => {
	const {register, handleSubmit} = useForm<MyForm>({
		defaultValues: {
			name: '',
			age: 0,
		},
	});

	const submit: SubmitHandler<MyForm> = (data) => {
		console.log(data);
	}

	return (
			<>
				<form onSubmit={handleSubmit(submit)}>
					<input type='text' {...register('name')} />
					<input type='number' {...register('age')} />
					<button type='submit'>Send</button>
				</form>
			</>
		)
}
