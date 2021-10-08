import styles from './toll-modal.module.scss'


export default function TollModal( {children, closeAction} ) {
    

    const closer = function() {
        console.log("close function inside TollModal that is going to call it's parent's closeAction");
        closeAction();
    }

    return (
        <div className={styles.modal}>
            <div onClick={closeAction}>CLOSE ME</div>
            {children}
        </div>

    )
}