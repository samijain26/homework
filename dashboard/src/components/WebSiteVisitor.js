//import WebSiteBox from './WebSiteBox'
function WebSiteVisitor(props){
    return(
        <div className='website'>
            <h3>Website Visitors</h3><br></br>
            <h3>{props.list}</h3>
            <div className='empty'></div>
        </div>
    )
}
export default WebSiteVisitor