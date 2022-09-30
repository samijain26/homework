const React = require('react')
const Layout = require('../layout/layout')

class New extends React.Component {
  render() {
    return (
      <Layout title='new form' group ="logs">
        <div className="wrapper">
          <h1>Create A new Log</h1>
          <form action="/logs" method="POST">
            <div className="form-control">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="enter title.."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="entry">Entry:</label>
              <textarea name="entry" id="entry" cols="30" rows="10" placeholder="enter entry.."
                required></textarea>
              {/* <textarea
                type="text"
                id="entry"
                name="entry"
                placeholder="enter entry.."
                required
              /> */}
            </div>
            <div className="form-control broken" >
              <label htmlFor="broken" >Broken:</label>
              <input type="checkbox" id="broken" name="broken" />
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

module.exports = New
