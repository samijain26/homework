const React = require('react')
const Layout = require('../layout/layout')

class Show extends React.Component {
  render() {
    const { title,entry,broken, _id} = this.props.log
    return (
      <Layout title= {title} group ="logs">
        <div className='show'>
            <h1>Show Single Log</h1>
       <ul className='item' >
         <li>
                    <span className="bold">Title: </span> {title}
                  </li>
                  <li>
                    <span className="bold">Entry: </span> {entry}
                  </li>
                  <li>
                    <span className="bold">Broken: </span>
                    {broken ? 'Yes' : 'No'}
                  </li>
                  <form action={`/logs/${_id}?_method=DELETE`} method ='POST'>
                   <a href={`/logs/${_id}/edit`}>Edit</a>
                   <button typr = "submit" className = "delete">Delete</button>
                  </form>
       </ul>
    </div>
      </Layout>

    )
    }
}
module.exports = Show