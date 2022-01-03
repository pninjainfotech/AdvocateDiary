import React, {useState} from 'react';
import { CASE_DATA } from './CasesData';
import './Dashboard.css';
import { CustomModal } from './CustomModal';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

export function Dashboard(){

    const [activeCaseList, changeActiveCaseList] = useState(CASE_DATA.caseAll.caseList) ;
    const caseTypes = Object.keys(CASE_DATA);
    const [ showModal, setShowModal] = useState(false);
    const [activeRow, setActiveRow] = useState({ });
    return (
        <div className ="container-xxl">
             {showModal && <CustomModal 
                showModal={showModal} 
                setShowModal={(val)=>setShowModal(val)}
                        caseNo={activeRow.Case_no}
                        petitioner={activeRow.petitioner}
                        respondent={activeRow.respondent}
                        nameofclient={activeRow.nameofclient}
                        remarks={activeRow.Remark}
                        nextDate={activeRow.Next_date}
                />}
            <div className = "row m-5 flex-nowrap">
                {
                    caseTypes.map((item, index)=> { 
                        return (
                            <div 
                                className={`col-lg-2 card${index+1} me-5`} 
                                onClick={()=>{
                                    changeActiveCaseList(CASE_DATA[item].caseList)
                                }}
                            >
                                <div>
                                    {CASE_DATA[item].label}
                                </div>
                                <div>{CASE_DATA[item].value}</div>
                            </div>
                        )
                     })
                }
               
            </div>
            <div className ="table-parent m-1">
           
                <TableHeader/>
                {activeCaseList.map((item, index)=>{
                    return (
                        <TableBody 
                        srNo={index+1} 
                        caseNo={item.Case_no}
                        petitioner={item.petitioner}
                        respondent={item.respondent}
                        nameofclient={item.nameofclient}
                        remarks={item.Remark}
                        nextDate={item.Next_date}
                        setShowModal={(val)=> {

                            setShowModal(val);
                            setActiveRow(item); 
                        }
                        }
                       
                        fileno={""}
                        />
                    )
                })}
               
            </div>

        </div>


    )
}

{/* <div className = "col-lg-3 card2 me-2">
<div 
    onClick={()=>{
        changeActiveCaseList(CASE_DATA.caseToday.caseList)
    }}>
        Total Cases Today
</div>
<div>0</div>
</div>
<div className = "col-lg-3 card3 me-2">
<div
onClick={()=>{
    changeActiveCaseList(CASE_DATA.caseWeekly.caseList)
}}>Total Cases Week</div>
<div>0</div>
</div>
<div className = "col-lg-3 card4">
<div onClick={()=>{
    changeActiveCaseList(CASE_DATA.caseMonthly.caseList)
}}>Total Cases Month</div>
<div>0</div>
</div>
<div className = "col-lg-3 card5 me-2">
<div
onClick={()=>{
    changeActiveCaseList(CASE_DATA.caseWeekly.caseList)
}}>Total Cases year</div>
<div>0</div>
</div> */}