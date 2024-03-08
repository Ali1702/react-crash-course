import styles from './Modal.module.css';

function Modal(prop) {
    return (
        <>
            <div className={ styles.backdrop } onClick={ prop.onClose } />
            <dialog open className={ styles.modal }>
                { prop.children }
            </dialog>
        </>
    );
}

export default Modal;