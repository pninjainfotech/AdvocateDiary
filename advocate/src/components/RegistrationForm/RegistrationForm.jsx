import React, { Component } from 'react';

export class RegistrationForm extends Component{

    constructor(props){
        super(props)
        this.state={
            CaseNumber:'',
            District:'',
            CourtName:'',
            CaseType:'',
            Respondent:'',
            Petitioner:'',
            NameOfClient:'',
            AddressOfClient:'',
            PhoneNoOfClient:'',
            EmailIdOfClient:'',
            Fees:'',
            Remarks:'',
            Documents:'',
            NextDate:''
        }

        this.changeCaseNumberHandler=this.changeCaseNumberHandler.bind(this);
        this.changeDistrictHandler=this.changeDistrictHandler.bind(this);
        this.changeCourtNameHandler=this.changeCourtNameHandler.bind(this);
        this.changeCaseTypeHandler=this.changeCaseTypeHandler.bind(this);
        this.changeRespondentHandler=this.changeRespondentHandler.bind(this);
        this.changePetitionerHandler=this.changePetitionerHandler.bind(this);
        this.changeNameOfClientHandler=this.changeNameOfClientHandler.bind(this);
        this.changeAddressOfClientHandler=this.changeAddressOfClientHandler.bind(this);
        this.changePhoneNoOfClientHandler=this.changePhoneNoOfClientHandler.bind(this);
        this.changeEmailIdOfClientHandler=this.changeEmailIdOfClientHandler.bind(this);
        this.changeFeesHandler=this.changeFeesHandler.bind(this);
        this.changeRemarksHandler=this.changeRemarksHandler.bind(this);
        this.changeDocumentsHandler=this.changeDocumentsHandler.bind(this);
        this.changeNextDateHandler=this.changeNextDateHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    changeCaseNumberHandler=(event)=>{
        this.setState({CaseNumber: event.target.value});
    }

    changeDistrictHandler=(event)=>{
        this.setState({District: event.target.value});
    }

    changeCourtNameHandler=(event)=>{
        this.setState({CourtName: event.target.value});
    }

    changeCaseTypeHandler=(event)=>{
        this.setState({CaseType: event.target.value});
    }

    changeRespondentHandler=(event)=>{
        this.setState({Respondent: event.target.value});
    }

    changePetitionerHandler=(event)=>{
        this.setState({Petitioner: event.target.value});
    }

    changeNameOfClientHandler=(event)=>{
        this.setState({NameOfClient: event.target.value});
    }

    changeAddressOfClientHandler=(event)=>{
        this.setState({AddressOfClient: event.target.value});
    }

    changePhoneNoOfClientHandler=(event)=>{
        this.setState({PhoneNoOfClient: event.target.value});
    }

    changeEmailIdOfClientHandler=(event)=>{
        this.setState({EmailIdOfClient: event.target.value});
    }

    changeFeesHandler=(event)=>{
        this.setState({Fees: event.target.value});
    }

    changeRemarksHandler=(event)=>{
        this.setState({Remarks: event.target.value});
    }

    changeDocumentsHandler=(event)=>{
        this.setState({Documents: event.target.value});
    }

    changeNextDateHandler=(event)=>{
        this.setState({NextDate: event.target.value});
    }

    saveStudent=()=>{
        let student={CaseNumber: this.state.CaseNumber,
            District: this.state.District,
            CourtName: this.state.CourtName,
            CaseType: this.state.CaseType,
            Respondent: this.state.Respondent,
            Petitioner: this.state.Petitioner,
            NameOfClient: this.state.NameOfClient,
            AddressOfClient: this.state.AddressOfClient,
            PhoneNoOfClient: this.state.PhoneNoOfClient,
            EmailIdOfClient: this.state.EmailIdOfClient,
            Fees: this.state.Fees, 
            Remarks: this.state.Remarks, 
            Documents: this.state.Documents, 
            NextDate: this.state.NextDate };
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel(){
        //  this.props.history.push('/home');
    }

    upload(e){
        console.warn(e.target.files)
        const files = e.target.files
        const formData = new FormData();
        formData.append('img', files[0]);
        fetch('  ',{
            method: "POST",
            body: formData
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn("result",result)
            })
        })
    }
    
    render(){
        return(
            <div>
                <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Case Registration</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Case Number:</label>
                                    <input placeholder="Case Number" name="case Number" className="form-control"
                                    value={this.state.CaseNumber} onChange={this.changeCaseNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>District:</label>
                                    <input placeholder="District" name="district" className="form-control"
                                    value={this.state.District} onChange={this.changeDistrictHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Court Name:</label>
                                    <input placeholder="Court Name" name="court name" className="form-control"
                                    value={this.state.CourtName} onChange={this.changeCourtNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Case Type:</label>
                                    <input placeholder="Case Type" name="case type" className="form-control"
                                    value={this.state.CaseType} onChange={this.changeCaseTypeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Respondent:</label>
                                    <input placeholder="Respondent" name="Respondent" className="form-control"
                                    value={this.state.Respondent} onChange={this.changeAddressofourclientHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Petitioner:</label>
                                    <input placeholder="Petitioner" name="Petitioner" className="form-control"
                                    value={this.state.Petitioner} onChange={this.changePetitionerHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Name Of Client:</label>
                                    <input placeholder="Name Of Client" name="NameOfClient" className="form-control"
                                    value={this.state.NameOfClient} onChange={this.changeNameOfClientHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Address Of Client:</label>
                                    <input placeholder="Address Of Client" name="AddressOfClient" className="form-control"
                                    value={this.state.AddressOfClient} onChange={this.changeAddressOfClientHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone No Of Client:</label>
                                    <input placeholder="Phone No Of Client" name="PhoneNoOfClient" className="form-control"
                                    value={this.state.PhoneNoOfClient} onChange={this.changePhoneNoOfClientHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Email-Id Of Client:</label>
                                    <input placeholder="Email-Id Of Client" name="EmailIdOfClient" className="form-control"
                                    value={this.state.EmailIdOfClient} onChange={this.changeEmailIdOfClientHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Fees:</label>
                                    <input placeholder="Fees" name="Fees" className="form-control"
                                    value={this.state.Fees} onChange={this.changeFeesHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Remarks:</label>
                                    <input placeholder="Remarks" name="Remarks" className="form-control"
                                    value={this.state.remarks} onChange={this.changeRemarksHandler}/>
                                </div>
                                <div className="form-group" >
                                    <label>Documents:</label>
                                    <input type = "file" onChange={(e)=>this.upload(e)} name="img" placeholder="Documents"  className="form-control"
                                    value={this.state.Documents}/>
                                    
                                </div>
                                {/* <div className="form-group">
                                    <label>Next Date:</label>
                                    <input placeholder="Next Date" name="Next Date" 
                                    className="form-control"
                                    value={this.state.NextDate}
                                    onChange={this.changeNextDateHandler}/>
                                </div> */}
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" 
                                onClick={(e)=> {
                                    e.preventDefault();
                                    e.stopPropagation();
                                     this.saveStudent();
                                    }}
                                     >Save</button>
                                <button className="btn btn-danger" onClick={(e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.cancel()
                                    }} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        )
    }
}
  