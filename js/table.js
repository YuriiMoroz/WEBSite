
function Rows(props){
  return( 
    <tr>
      <th className={props.r[0]}>{props.r[1]}</th>
      <th className="common_text">Denise Ann</th>
      <th className="common_text">153</th>
      <th className="common_text">0</th>
      <th className="common_text">9:23 AM</th>
      <th className="common_text"><embed src={props.r[2]} height="7px" weight="7px"/>8/27/2019</th>
    </tr>
  )
};

function CheckBox(props){
  return(
  <div className="check_text">
    <div className="mdc-form-field">
      <div className="mdc-checkbox">
        <input type="checkbox" className="mdc-checkbox__native-control" id="checkbox-1" id=" checkbox-2" />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path className="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
          </svg>
          <div className="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      <div className="check_text">{props.text[0]}</div>

    </div>
  </div>
  )
};

class App extends React.Component{
  state = {
    rt:[
      ['blue_text','Buyer','images/internet.svg'],
      ['green_text','Landlord','images/mas.svg'],
      ['blue_text','Buyer','images/mas.svg'],
      ['red_text','Seller','images/internet.svg'],
      ['blue_text','Buyer','images/internet.svg'],
      ['blue_text','Buyer','images/mas.svg'],
      ['blue_text','Buyer','images/internet.svg'],
    ],
    td: [['Collaboratively administrate'],
      ['Another todo on the list. Add as many you want.'],
      ['Dramatically maintain clicks-and-mortal'],
      ['administrate empowered markets']
  ]
    }
    
    renderBoxes(){
      return this.state.td.map(r=>{
        return(
          <CheckBox text={r} />
        )
      })
    }

    renderRows(){
      return this.state.rt.map(r=>{
        return(
          <Rows r={r} />
        )
      })
    }

  render(){
    return(
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell--span-7">
      <div className="table">
        <div class="table_header">
              ACTIVE LEADS
            </div>
        <table className="tb">
        <tr>
                <th>
                  <div className="standart_tex">
                    Type
                  </div>
                </th>
                <th>
                  <div className="standart_tex">
                    Lead Name
                  </div>
                </th>
                <th>
                  <div className="standart_tex">
                    Views
                  </div>
                </th>
                <th>
                  <div className="standart_tex">
                    Favorites
                  </div>
                </th>
                <th>
                  <div className="standart_tex">
                    Last Visit
                  </div>
                </th>
                <th>
                  <div className="standart_tex">
                    Last Action
                  </div>
                </th>
              </tr>
          {this.renderRows()}
      </table>
      </div>
      </div>
      <div className="mdc-layout-grid__cell--span-5">
        <div className="todo_list">
            <div className="todo">
              <div className="todo_text">TODO LIST</div>
              <div className="todo_button">
                Togglle All
              </div>
            </div>
            <div className="check">
              {this.renderBoxes()}
              <div className="under_table">
                Writr some todo task here
              </div>
              <div className="All_act">
                <div className="All">All</div>
                <div className="active">Active</div>
                <div className="clear">Clear Completed(1)</div>
              </div>
            </div>
          </div>
      </div>
      </div>
    )
  }
}



ReactDOM.render( <App />,document.getElementById("table"))