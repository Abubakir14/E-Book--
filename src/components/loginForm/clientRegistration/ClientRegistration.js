import classes from './ClientRegistration.module.css'
import AuthButton from '../../UI/authButton/AuthButton'
import InputField from '../../UI/inputField/InputField'
import eye from '../../../assets/png/eye.png'
import isEye from '../../../assets/png/isEye.png'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	EMAIL,
	NAME,
	CONFIRMPASSWORD,
	PASSWORD,
} from '../../../utils/constants'
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { clientRegistration } from '../../../store/authReducer/signInSlice'

const ClientRegistration = () => {
	const { status, error } = useSelector((state) => state.authorization)
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm({ mode: 'onTouched' })

	const isPassworIsSame = watch(PASSWORD)

	const onSubmitHadnler = useCallback(
		(data) => {
			dispatch(clientRegistration(data))
		},
		[dispatch],
	)

	const [isPasswordShown, setIsPasswordShown] = useState(false)

	const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(false)

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	const toggleisConfirmPasswordShown = () => {
		setisConfirmPasswordShown(!isConfirmPasswordShown)
	}

	const getErrorMessage = () => {
		const errorMessage =
			(errors.name && 'Введите коррекное имя ') ||
			(errors.email && 'Введите коррекный Email') ||
			(errors.password &&
				'Длина пароля должна быть не менее 5 символов') ||
			(errors.confirmpassword && 'Пороли не совподают') ||
			(error && `An error occured: ${error}`)
		return errorMessage
	}

	return (
		<form onSubmit={handleSubmit(onSubmitHadnler)}>
			<InputField
				type='name'
				placeholder='Напишите ваше имя'
				label='Ваше имя'
				{...register(NAME, {
					required: true,
					validate: (value) => value.trim().length !== 0,
				})}
				hasError={errors.name}
			/>
			<InputField
				type='email'
				placeholder='Напишите ваш email'
				label='Email'
				{...register(EMAIL, {
					required: true,
					pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					disabled: Boolean(errors.name),
				})}
				hasError={errors.email}
			/>
			<div className={classes.forAbsolute}>
				<InputField
					type={isPasswordShown ? 'text' : 'password'}
					placeholder='Напишите пароль'
					label='Пароль'
					autoComplete='off'
					{...register(PASSWORD, {
						required: true,
						minLength: 5,
						disabled: Boolean(errors.email),
					})}
					hasError={errors.password}
				/>
				<img
					className={classes.pngOfPassword}
					src={isPasswordShown ? isEye : eye}
					alt=''
					onClick={togglePassword}
				/>
				<InputField
					type={isConfirmPasswordShown ? 'text' : 'password'}
					placeholder='Подтвердите пароль'
					label='Подтвердите пароль'
					autoComplete='off'
					{...register(CONFIRMPASSWORD, {
						required: true,
						validate: (value) => value === isPassworIsSame,
						disabled: Boolean(errors.password),
					})}
					hasError={errors.confirmpassword}
				/>
				<img
					className={classes.pngOfPassword}
					src={isConfirmPasswordShown ? isEye : eye}
					alt=''
					onClick={toggleisConfirmPasswordShown}
				/>
			</div>
			<div className={classes.subscribe}>
				<input
					type='checkbox'
					className={classes.subscribeInput}
					{...register('subscribe')}
				/>
				<p>Подпишитесь на рассылку, чтобы получать новости от eBook </p>
			</div>
			<p className={classes.message}>{getErrorMessage()}</p>
			{status === 'loading' && <LoadingSpinner />}
			<AuthButton type='submit' disabled={!isValid}>
				Создать аккаунт
			</AuthButton>
		</form>
	)
}

export default ClientRegistration
