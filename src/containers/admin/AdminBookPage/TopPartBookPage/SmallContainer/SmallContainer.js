import classes from './SmallContainer.module.css'
// import AudioPlayer from '../../../../../components/UI/AudioPlayer/AudioPlayer'
// import { TYPEOFBOOK } from '../../../../../utils/constants/constants'

const SmallContainer = ({ book }) => {
   console.log(book)
   return (
      <div className={classes.smallContainer}>
         {/* <p className={classes.price}>{book.price} c</p>
         {book.typeOfBook === TYPEOFBOOK.AUDIOBOOK && (
            <AudioPlayer url={book.audio_url} time={book.player_time} />
         )} */}
         text
      </div>
   )
}

export default SmallContainer
