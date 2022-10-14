import Data from '../data'
import SentimentAnalysis from './SentimentAnalysis'
function SentimentList(){
    return(
        <div className='sentiment'>
            <h2>
                Sentiment Analysis
            </h2>
        {Data.map((item,i) =>{
        return <SentimentAnalysis key={i} number={item} />
        })}
        </div>

    )
}
export default SentimentList