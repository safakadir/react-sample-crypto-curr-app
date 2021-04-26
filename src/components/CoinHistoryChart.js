import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Line } from 'react-chartjs-2';
import utils from '../utils';

const CoinHistoryChart = ({ asset, title }) => {

    const [history, setHistory] = useState([])

    const selectedCurrency = useSelector(state => state.currency.selectedCurrency)
    const currentRate = useSelector(state => state.currency.currentRate)

    const evaluateLabels = () => {
        const day = moment().startOf('day')
        let labels = []
        for(let i = 0; i < 7; i++) {
            day.subtract(1, 'days')
            labels = [day.format('D MMM.'), ...labels]
        }
        return labels
    }

    const fetchHistory = async () => {
        try {
            const end = moment().startOf('day')
            const start = end.clone().subtract(7, 'days')
            const { data } = await axios.get('/assets/'+asset.id+'/history'
                                            +'?interval=d1&start='+start.valueOf()+'&end='+end.valueOf())
            setHistory(data.data)
        }
        catch(error) {
            setHistory([])
        }
    }

    useEffect(() => {
        fetchHistory()
    }, [asset])

    const data = {
        labels: evaluateLabels(),
        datasets: [
          {
            data: history.map(h => h.priceUsd/currentRate.rateUsd),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
    };
      
    const options = {
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return selectedCurrency.cSymbol + utils.formatNumber(value);
                    }
                }
            }
        }
    };


    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mt-3 mt-md-5">
                <h3>{title}</h3>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default CoinHistoryChart
