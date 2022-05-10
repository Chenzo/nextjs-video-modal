import styles from './toll-modal.module.scss'

export default function TollModal({children, closeAction}) {


    const closer = function() {
        closeAction();
    }

    return (
        <div className={styles.modal}>
            {children}
            <div className={styles.closeBut} onClick={closer}>CLOSE BUTTON</div>
        </div>
    )
}