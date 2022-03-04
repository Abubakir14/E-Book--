import classes from './SuccessfulMessage.module.css'
import { ReactComponent as ErrorIcon } from '../../../assets/icons/error-icon.svg'
import { ReactComponent as Successful } from '../../../assets/icons/successful-icon.svg'

const SuccessfulMessage = (props) => {
   console.log(props)
   const { apiAnswer, onClose } = props
   const message = apiAnswer.error || apiAnswer.bookName

   const successMessage = apiAnswer.error ? '' : 'успешно добавлен!'

   const isSuccessIcon = apiAnswer.error ? (
      <ErrorIcon onClick={onClose} className={classes.successBoxIcon} />
   ) : (
      <Successful />
   )

   return (
      <div className={classes.successBox}>
         {isSuccessIcon}
         <div>
            <p className={classes.bookNameText}>{message}</p>
            <p className={classes.successBoxText}>{successMessage}</p>
         </div>
      </div>
   )
}

export default SuccessfulMessage
