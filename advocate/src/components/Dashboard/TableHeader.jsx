import React from "react";
import './Table.css';

export function TableHeader(){
    return(
        <div className ="row tb-header">
            <div className = "col-lg-1 tb-1 font-weight">Sr.No</div>
            <div className = "col-lg-1 tb-1 lb-0 font-weight">Case No</div>
            <div className = "col-lg-1 tb-1 lb-0 font-weight">Petitioner</div>
            <div className = "col-lg-2 tb-1 lb-0 font-weight">Respondent</div>
            <div className = "col-lg-3 tb-1 lb-0 font-weight">Name Of Client</div>
            <div className = "col-lg-2 tb-1 lb-0 font-weight">Remarks</div>
            <div className = "col-lg-1 tb-1 lb-0 font-weight">Next date</div>
            <div className = "col-lg-1 tb-1 lb-0 font-weight">File No</div>


        </div>
    )

}