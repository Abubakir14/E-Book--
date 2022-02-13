import classes from './TopPartInVendorCard.module.css'
import { useState } from 'react';
import { ReactComponent as HeartIcon } from '../../../../assets/icons/heart.svg'
import { ReactComponent as Icon } from '../../../../assets/icons/Controls Icon.svg'

const TopPartInVendorCard = (props) => {
    const {
        numberOfFavorites,
        numberOfBasket,
        popUpChangeHandler
    } = props
    
    const [heartIsActive,setHeartIsActive] = useState(false)

    const activateHeartHundler=()=> {
        setHeartIsActive((prevState) => !prevState)
    }

    return <div className={classes.containerForTopPartCardBook}>
        {
        numberOfFavorites 
        && <div className={classes.heartBox}>
            <HeartIcon
            onClick={activateHeartHundler}
            className={
            heartIsActive?
            classes.HeartRed : 
            classes.heartGrey}
            />
            <p className={classes.heartBoxText}>
                ({numberOfFavorites})
            </p>
        </div>
        }
        {
        numberOfBasket 
        && <p
        className={classes.basket}
        >в корзине({numberOfBasket})
        </p>
        }
        <Icon
            className={classes.vector}
            onClick={popUpChangeHandler}
        />
    </div>
};

export default TopPartInVendorCard;
