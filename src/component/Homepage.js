// import { LuTimerReset } from 'react-icons/ai';
// import { AiOutlineTimer } from 'react-icons/ai';
// import { BiAlarmExclamation } from "react-icons/bi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Karan from "./Karan";
import Third3 from "../Third3";
import Forth4 from "../Forth4";
import Fifth from "../Fifth";

function Homepage() {
  function myfunk() {
    // alert("the button is working");
    toast("The button is working!");
  }
  return (
    <>
      <div className="firstbox">
        <div className="secc">
          <p>Find my institue</p>
        </div>

        <div className="thirdd">
          <div className="thirdd1">
            <button className="btn" onClick={myfunk}>
              free counsellings
            </button>
            <p>Student Login</p>
          </div>
        </div>
      </div>
      <div className="secondbox1">
        <div className="ka">
          <ul>
            <li>Courses</li>
            <li>Study Material</li>
            <li>News & Notification</li>
            <li>List Institue</li>
            <li>
              <button className="btn2" onClick={myfunk}>
                free
              </button>{" "}
            </li>
          </ul>
        </div>
        <div className="kar">
          <div className="navbar2box">Institue Login</div>
        </div>
      </div>

      {/* ========================================= */}
      {/* now the main part start */}
      <div className="thirdboxx">
        {
          <div className="thirdboxx1">
            <h3>it's esay to search best education</h3>
            <h1>india's No.1 platefrom </h1>
            <div className="para">
              <p>
                India's largest platform for institutes, courses, books, notes,
                institute reviews and more. We provide genuine review of courses
                to help students choose their course wisely
              </p>

              <p className="pa">
                Current Month trending institue (October 2022)
              </p>
            </div>

            <div className="bt">
              <button className="btn3" onClick={myfunk}>
                The Study By Manikant Singh
              </button>
              <button className="btn4" onClick={myfunk}>
                ravinder IAS
              </button>
              <button className="btn4" onClick={myfunk}>
                Sihanta IAS
              </button>
              <button className="btn4" onClick={myfunk}>
                Keynote IAS
              </button>
              <button className="btn3" onClick={myfunk}>
                The Study By Manikant Singh
              </button>
              <button className="btn3" onClick={myfunk}>
                The Study By Manikant Singh
              </button>
            </div>
          </div>
        }

        {
          <div className="thirdboxx2">
            <div className="sanju">
              <h3 className="sanjuhead">Find Institue, Courses and Books</h3>

              <button className="btn5" onClick={myfunk}>
                Courses
              </button>
              <button className="btn5" onClick={myfunk}>
                Institue
              </button>
              <button className="btn5" onClick={myfunk}>
                Books
              </button>

              <div className="sanju1">
                <h3>Course Name</h3>
                <h1>UPSE History Optinal 2022 </h1>
              </div>

              <div className="shubham">
                <div className="shubham1">
                  <h3>Course Mode</h3>
                  <h1>Online </h1>
                </div>
                <div className="shubham1">
                  <h3>Location</h3>
                  <h1>Faridabad </h1>
                </div>
              </div>

              <div className="hitesh">
                <button className="btn66" onClick={myfunk}>
                  Search Course
                </button>
              </div>

              <div className="lastdiv">
                <h4>Recently searched courses by you...</h4>
                <button className="btn67" onClick={myfunk}>
                  History option
                </button>
                <button className="btn67" onClick={myfunk}>
                  Python
                </button>
                <button className="btn67" onClick={myfunk}>
                  Data science
                </button>
              </div>
            </div>
          </div>
        }
      </div>
      {/* <div className="box4">
        <h3>Newly Released Courses</h3>
      </div>
      */}
      <Karan />
      <Third3 />
      <Forth4 />
      <Fifth />
      <ToastContainer />
    </>
  );
}
export default Homepage;
