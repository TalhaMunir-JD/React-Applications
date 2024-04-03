import './Modal.css';

function Modal ({ id, header, body, footer, onclose }) {
    return <div id={id || 'Modal'} className="ModalContainer">
        <div className="Modal-content">
            <div className="Header">
                <span onClick={onclose} className="close-modal-icon">&times;</span>
                {header ? header: <h1>Header</h1>}
            </div>
            <div className="Body">
                {body ? body : <p>Sample Body</p>}
            </div>
            <div className="Footer">
                {footer ? footer : <h2>Footer</h2>}
            </div>
        </div>
    </div>
}

export default Modal;