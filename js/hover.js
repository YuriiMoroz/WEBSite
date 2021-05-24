


class App extends React.Component{

  render(){
    return(
      <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell--span-12">
        <div className="hover">
          <div className="flex">
            <div className="copy">
              Copuring M7amadsa3ed 2015. All rights reserved
            </div>
            <div className="careers">
              Careers
            </div>
            <div className="careers">
              Privacy Policy
            </div>
          </div>
          <div className="flex">
            <div className="careers">
              Feedback
            </div>
            <div className="pt">
              ^
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}



ReactDOM.render( <App />,document.getElementById("hover"))