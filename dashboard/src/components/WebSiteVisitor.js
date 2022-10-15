//import WebSiteBox from './WebSiteBox'
function WebSiteVisitor(props){
    return(
        <div className='website'>
            <div className='left'>
            <h3>Website Visitors</h3><br></br>
            <h3>{props.list}</h3>
            </div>
            <div className='empty'></div>
        </div>
    )
}
export default WebSiteVisitor