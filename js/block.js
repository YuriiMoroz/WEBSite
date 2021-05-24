

function Welcome(props){
  return( 
    <div className ="mdc-layout-grid__cell--span-6">
    <div className="welcome">
      <div>
        <div className="text">{props.w[0]}</div>
        <div className="under-text">{props.w[1]}</div>
      </div>
      <div className="number">{props.w[2]}</div>
    </div>
    </div>
  )
};

function Change(props){
  return(
    <div className="mdc-layout-grid__cell--span-3">
          <div className="stat">
            <div>
              <div className={props.dataChan[0]}>{props.dataChan[1]}
              </div>
              <div className="under-text">{props.dataChan[2]}
              </div>
            </div>
            <div className="number">
              <i className="material-icons">
              {props.dataChan[3]}
              </i>
            </div>
          </div>
          <div className={props.dataChan[4]}>
            <div className="change">{props.dataChan[5]}
            </div>
            <div className="graf">
              <embed src={props.dataChan[6]} width="25" height="10" />
            </div>
          </div>
        </div>
  )
};


class App extends React.Component{
  state = {
    ws: [
      ['Welcome to infinity','Number of Views','120'],
      ['Active','Leads/Contacts','325']
    ],
    dataChan: [['blue_namber','66,163k','Total Leads','attach_file','bottom1','%change','images/leads.svg'],
    ['red_namber','3.490K','Total Pending','block','bottom2','%change','images/pending.svg'],
    ['green_namber','8.372K','Case Closed','lock_open','bottom3','%change','images/closed.svg'],
    ['yellow_namber','5.355K','Task Completed','description','bottom4','%change','images/completed.svg']]
  }
  renderWelc(){
    return this.state.ws.map(w=>{
      return(
        <Welcome w={w}/>
      )
    })
  }

  renderChange(){
    return this.state.dataChan.map(data=>{
      return(
        <Change dataChan={data} />
      )
    })
  }

  render(){
    return(
      <div className="topbl">
      <div className="mdc-layout-grid__inner">
        { this.renderWelc() }
      </div>
      <div className="mdc-layout-grid__inner">
        { this.renderChange() }
      </div>
      </div>
    )
  }
}



ReactDOM.render( <App />,document.getElementById("topblocks"))