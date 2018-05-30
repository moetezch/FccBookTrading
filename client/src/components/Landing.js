import React from 'react'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Book trading club
    </h1>

      <div className="row">

        <div className="col s4">
          <div className="card blue-grey darken-1" style={{height:'200px'}}>
            <div className="card-content white-text">
              <span className="card-title">book1</span>
              <p> Praesent vitae arcu tempor neque lacinia pretium. In dapibus augue non sapien. Praesent in mauris eu tortor </p>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card blue-grey darken-1" style={{height:'200px'}}>
            <div className="card-content white-text">
              <span className="card-title">Book2</span>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>
          </div>

        </div>
        <div className="col s4" >
          <div className="card blue-grey darken-1" style={{height:'200px'}}>
            <div className="card-content white-text">
              <span className="card-title">book3</span>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est lab</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer">
      <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h6 className="white-text">A FreeCodeCamp Challenge written by Moetez Chaabene</h6>
        </div>
      </div>
    </div>
        <div className="footer-copyright">
          <div className="container">
          © 2018
      <a className="grey-text text-lighten-4 right" href="https://github.com/moetezch/FccBookTrading">Github</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing