import './ProgressBar.css'

const ProgressBar = () => {
    return (
        <div className="pb-container">
            <div className="slider">
                <div className="line"></div>
                <div className="subline inc"></div>
                <div className="subline dec"></div>
            </div>
        </div>
    )
}

export default ProgressBar
