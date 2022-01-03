import React from "react";
export function TableBody(props){
   return(
    <div className ="row">
           
            <div className = "col-lg-1 tb-1 ub-0">{props.srNo}</div>
            <div 
                className = "col-lg-1 tb-1 case-color lb-0 ub-0 cursor"
                onClick={()=> props.setShowModal(true)}
                >{props.caseNo}
        </div>
            <div className = "col-lg-1 tb-1 lb-0 ub-0">{props.petitioner}</div>
            <div className = "col-lg-2 tb-1 lb-0 ub-0">{props.respondent}</div>
            <div className = "col-lg-3 tb-1 lb-0 ub-0">{props.nameofclient}</div>
            <div className = "col-lg-2 tb-1 lb-0 ub-0">{props.remarks}</div>
            <div className = "col-lg-1 tb-1 lb-0 ub-0">{props.nextDate}</div>
            <div className = "col-lg-1 tb-1 lb-0 ub-0">{props.fileno}</div>
    </div>

   ) 
}