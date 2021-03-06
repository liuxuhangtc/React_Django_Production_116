import React, { useState } from "react";
import { OverallScore, MyModal } from "./../DashboardComponents";
import { ResumeResult } from "./../../resume/ResumeResult";
import { confirmAlert } from 'react-confirm-alert';

export const ResumePreview = (props) => {
  var reviewed = false;
  const [show, setShow] = useState(false);

  if (props.resume.skills_keywords != null) {
    reviewed = true;
  }

  function reviewToggle() {
    props.getResumes();
    reviewed ? setShow(true) : alert();

  }

  function deleteCV() {
    let id = props.resume.id;
    props.deleteResume({"id": id});
    window.location.reload();
  }

  function deleteAlert() {
    confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to delete this resume?",
        buttons: [
            {
              label: 'Yes',
              onClick: () => deleteCV()
            },
            {
              label: 'No'
            }
        ]
    });

  }

  return (
      <div className="container d-flex justify-content-start" style={{marginTop:"2%"}}>
        <div className="col-2">
          { reviewed ? <OverallScore percent={props.percent} bgColor={"#FAC046"} barColor={"#FF6B00"}/> : null }
        </div>
        <div className="col-10" style={{fontFamily: "Avenir Next" }}>
          <div>
            <h3>{props.jobTitle}</h3>
          </div>
          <div className="row">
            <div className="col-9">
              <p style={{color:"#7D7D7D"}}>{props.jdText.substring(0, 110)+'...'}</p>
            </div>
            <div className="col-3" style={{color:"#7D7D7D", borderLeft:"outset"}}>
              <p>{props.createdAt}</p>
            </div>
          </div>
          <div className="row">
            <div>
              <button onClick={reviewToggle} className="reviewed text-15 resume-btn">
                View Result
              </button>
            </div>
            <div style={{marginLeft: "2rem"}}>
              <button onClick={deleteAlert} className="delete-btn"><i className="bx bx-trash bx-sm" style={{color:'#bbbbbb', paddingTop:'30%'}}></i></button>
            </div>
          </div>
          <MyVerticallyCenteredModal
            show={show}
            onHide={() => setShow(false)}
            resume={props.resume}
          />
        </div>
      </div>
  );
};

function MyVerticallyCenteredModal(props) {
  const { resume, ...rest } = props;
  return (
    <MyModal {...rest} isResume={true}>
      <ResumeResult resume={resume} />
    </MyModal>
  );
};

function alert() {
    confirmAlert({
        title: "Your result is on the way ????",
        message: "It will be ready within 30s",
        buttons: [
            {
              label: 'Ok'
            }
        ]
    });

}