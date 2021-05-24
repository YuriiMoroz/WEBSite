

class App extends React.Component{

  render(){
    return(
      <div>
            <div class="items">
      <div class="UI">
        UI Kits
      </div>
    </div>
    <div id="menu"></div>
    <div class="items">
      <div>
      <i class="material-icons">
        home
      </i>
      Dashboard
      </div>
    </div>
    <div class="items">
      <div>
      <i class="material-icons">
        flash_on
      </i>
      Apps
    </div>
      <div class="color_red">
        3
      </div>
    </div>
    <div class="items">
      <div>
      <i class="material-icons">
        lock
      </i>
      Components
    </div>
    <div class="green_color">
      9
    </div>
    </div>
    <div class="items">
      <div>
      <i class="material-icons">
        local_post_office
      </i>
      EMAIL
      </div>
      <div class="blue_color">
        4
      </div>
    </div>
    <div class="items">
      <div>
      <i class="material-icons">
        whatshot
      </i>
      Form
    </div>
    </div>
    <div class="items">
      <div>
      <i class="material-icons">
        map
      </i>
      Maps
      </div>
    </div>
    <div class="items">
      <div>
      <i class="material-icons">
        library_books
      </i>
      Pages
      </div>
    </div>
    <div class="last-items">
      <div class="items">
        <div>
        <i class="material-icons">
          format_align_left
        </i>
        Menu
      </div>
      </div>
    </div>
    <div class="subitems">
      <i class="material-icons">
        settings
      </i>
      Settings
    </div>
    <div class="subitems">
      <i class="material-icons">
        assignment
      </i>
      Document
    </div>
    <div class="last-subitems">
      <div class="subitems">
        <i class="material-icons">
          verified_user
        </i>
        HTLM Version
      </div>
    </div>
      </div>
    )
  }
}



ReactDOM.render( <App />,document.getElementById("menu"))