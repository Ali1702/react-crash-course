import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal(prop) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..'); // Go up one level in the route hierarchy
    }

    return (
        <>
            <div className={ styles.backdrop } onClick={ closeHandler } />
            <dialog open className={ styles.modal }>
                { prop.children }
            </dialog>
        </>
    );
}

export default Modal;