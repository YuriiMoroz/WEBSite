

function ColorAct(props){
  return( 
    <div className={props.act[0]}>
      <div className="flex">
        <div className={props.act[1]}>
        </div>
        <div className="activities_text">
          {props.act[2]}
        </div>
      </div>
      <div className="main_text">
        {props.act[3]}
      </div>
    </div>
  )
};



class App extends React.Component{
  state = {
    act: [
      ['blue_activities','blue','2 mins ago','Template Builder Access(Video tutorial inside documentation)'],
      ['red_activities','red','1 hour ago','Designed the wordpress Lily created her account'],
      ['green_activities','green','4:30 pm','Your domain will expired in 13 days'],
  ]
  }
  renderActiv(){
    return this.state.act.map(act=>{
      return(
        <ColorAct act={act}/>
      )
    })
  }


  render(){
    return(
      <div className="activities">
        <div className="title">ACTIVITIES</div>
        {this.renderActiv()}
      </div>
    )
  }
}



ReactDOM.render( <App />,document.getElementById("activities"))


