const Toast = ({ title, message, variant, onClose }) => {
    return (
        <div className="card" style={{position: 'absolute', bottom: 15, right: 15}}>
            <div className={'card-header text-white bg-'+variant}>
                <div className="d-flex justify-content-between">
                <span className="fw-bold">{title}</span>
                <div className="flex-grow-1 px-3" />
                <button type="button" className="btn-close btn-close-white m-auto" onClick={ () => onClose() } />
                </div>
            </div>
            <div className="card-body"><p>{message}</p></div>
        </div>
        // <div className={'toast align-items-center text-white border-0 bg-'+variant}>
        //     <div className="d-flex">
        //         <div className="toast-body">
        //             {message}
        //         </div>
        //         
        //     </div>
        // </div>
    )
}

Toast.defaultProps = {
    variant: 'danger'
}

export default Toast
