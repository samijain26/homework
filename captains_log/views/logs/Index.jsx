const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const { logs } = this.props

    return (
      <Layout title="all logs" group="logs">
        <div className="wrapper">
          <div className="header">
            <h1>All Logs</h1>
            <a href="/logs/new">create new</a>
          </div>

          <div className="items">
            {logs.map(log => {
              const { title, entry, broken, _id } = log

              return (
                
                <a href={`/logs/${_id}`} key={_id} className="item">
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
                </a>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = Index