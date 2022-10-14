const React = require('react')
const Layout = require('../layout/layout')

class Edit extends React.Component {
  render() {

    const { title,entry,broken,_id} =this.props.log
    return (
      <Layout title='Edit log' group ="logs">
        <div className="wrapper">
          <h1>Edit a  Log</h1>
          <form action={`/logs/${_id}?_method=PUT`} method="POST">
            <div className="form-control">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="enter title.."
                defaultValue={title}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="entry">Entry:</label>
              <textarea name="entry" id="entry" cols="30" rows="10" placeholder="enter entry.."
              defaultValue={entry}
                required></textarea>
             
            </div>
            <div className="form-control broken" >
              <label htmlFor="broken" >Broken:</label>
              <input type="checkbox" id="broken" name="broken" 
              defaultChecked={broken}/>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Edit
