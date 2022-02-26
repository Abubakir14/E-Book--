import classes from './AdminBookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import { oneElectronicBook } from '../../../utils/constants/books'

const BookPage = () => {
   return (
      <div className={classes.ContainerForBook}>
         <TopPartBookPage booklist={oneElectronicBook} />
         <BottomPartBookPage booklist={oneElectronicBook} />
      </div>
   )
}

export default BookPage
