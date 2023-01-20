import React, { useState, useEffect } from "react";
import './home.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../redux/actions";

const PAGE_NUMBER = 1;
function Home(props) {
  const [page, setPage] = useState(PAGE_NUMBER);
  const [progress, setProgress] = useState(false);
  const [bounce, setBounce] = useState(false);

  let users = useSelector((state) => state?.myFirstReducer?.users);
  const [usersValue, setUsersValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);
  
  useEffect(() => {
    if (users) {
      setUsersValue(users?.data);
    }
  }, [users]);
  const scrollToEnd = () => {
    setProgress(true)
    setPage(page+1);

    let temp = [...usersValue];
    temp.push(...users?.data);
    setUsersValue(temp);

  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
     && page <4) {
      scrollToEnd();
    }
  };
  window.addEventListener("scroll", function(event) {
  
    var scroll_y = this.scrollY;
    var scroll_x = this.scrollX;
    console.log(scroll_x, scroll_y);
    if(scroll_y === 0){
      setBounce(true)
    }
    else{
      setBounce(false)
    }
    // position.innerHTML = " X-axis : " 
    // + scroll_x + "Y-axis : " + scroll_y
});

  return (
    <>
        <nav className="navbar header sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Infinite Scroll</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home </a>
                </li>
              
              </ul>
            </div>
        </nav>

    <div className={`outerContainer ${ bounce?'bounce':''} `}>
    {usersValue &&
        usersValue?.map((value, key) => (
          <div className="container" key={key}>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => props.setPlayer_info(value)}
              >
                <Link to="/info">
                  {" "}
                  {value?.first_name} {value.last_name}
                </Link>
              </button>
            </div>
          </div>
        ))}
    </div>
      
        {progress && page<4?
        <p className="loadingPara">Loading...</p>:<p></p>
        }
    {/* <div className="footer fixed-bottom card-footer bg-dark text-muted">
      Scroll only 5 times.
    </div> */}
    </>
  );
}

export default Home;


