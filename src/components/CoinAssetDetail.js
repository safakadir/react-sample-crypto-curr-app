import { useLocation } from "react-router"

const CoinAssetDetail = () => {
    const location = useLocation()

    return (
        <div>
            <h1>CoinAssetDetail</h1>
            <p>{location.pathname}</p>
        </div>
    )
}

export default CoinAssetDetail
