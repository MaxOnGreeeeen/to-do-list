import React, {useEffect} from 'react';
import classes from './ModalWIndow.module.css'
const ModalWindow = ({active, setActive}) => {

    useEffect(() =>{
        console.log(active)
    })
    return (
        <div className= {active ? `${classes.modalWindow} ${classes.active}` : classes.modalWindow}
             onClick={()=> setActive(false)}>
            <div className={classes.modalContent}
                onClick={e => e.stopPropagation()}/>
        </div>
    );
};
export default ModalWindow;