import css from '../ratingPopup/ratingPopup.module.css'

const ConfirmPopup = ({setActivePopup, remove, movieForRemove}) => {
    return (
        <div className={css.modal}>
            <div className={css.modalContent}>
                <h3>Remove movie?</h3>
                <div className={css.buttonsDiv}>
                    <button onClick={()=>{
                        setActivePopup(false)
                        remove(movieForRemove)
                    }}>Yes</button>
                    <button onClick={()=>setActivePopup(false)}>No</button>
                </div>
            </div>
        </div>
    );
};

export {ConfirmPopup};