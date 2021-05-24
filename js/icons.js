

class App extends React.Component{
  render(){
    return(
      <div className="icons">
        <div className="icon">
          <div className="alarm">
            <i className="material-icons">
              notifications
              <span className="circle">3</span>
            </i>
          </div>
        </div>
        <div className="icon">
          <div className="alarm">
            <i className="material-icons">
            local_post_office
              <span className="circle">4</span>
            </i>
          </div>
        </div>
        <div className="icon">
            <i className="material-icons">
            search
            </i>
        </div>
        <div className="icon">
            <i className="material-icons">
            apps
            </i>
        </div>
      </div>
    )
  }
}



ReactDOM.render( <App />,document.getElementById("icons"))