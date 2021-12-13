import React, { Component, useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

class StudentComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            SerialNo:'',
            CaseNumber:'',
            District:'',
            Nameofparties:'',
            Appearingfor:'',
            Addressofourclient:'',
            Feesandexpenses:'',
            Remarks:'',
            Documents:'',
            NextDate:''
        }

        

        this.changeSerialNoHandler=this.changeSerialNoHandler.bind(this);
        this.changeCaseNumberHandler=this.changeCaseNumberHandler.bind(this);
        this.changeDistrictHandler=this.changeDistrictHandler.bind(this);
        this.changeNameofpartiesHandler=this.changeNameofpartiesHandler.bind(this);
        this.changeAppearingforHandler=this.changeAppearingforHandler.bind(this);
        this.changeAddressofourclientHandler=this.changeAddressofourclientHandler.bind(this);
        this.changeFeesandexpensesHandler=this.changeFeesandexpensesHandler.bind(this);
        this.changeRemarksHandler=this.changeRemarksHandler.bind(this);
        this.changeDocumentsHandler=this.changeDocumentsHandler.bind(this);
        this.changeNextDateHandler=this.changeNextDateHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    changeSerialNoHandler=(event)=>{
        this.setState({SerialNo: event.target.value});
    }

    changeCaseNumberHandler=(event)=>{
        this.setState({CaseNumber: event.target.value});
    }

    changeDistrictHandler=(event)=>{
        this.setState({District: event.target.value});
    }

    changeNameofpartiesHandler=(event)=>{
        this.setState({Nameofparties: event.target.value});
    }

    changeAppearingforHandler=(event)=>{
        this.setState({Appearingfor: event.target.value});
    }

    changeAddressofourclientHandler=(event)=>{
        this.setState({Addressofourclient: event.target.value});
    }

    changeFeesandexpensesHandler=(event)=>{
        this.setState({Feesandexpenses: event.target.value});
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

    saveStudent=(e)=>{
        e.preventDefault();
        let student={SerialNo: this.state.SerialNo,CaseNumber: this.state.CaseNumber,District: this.state.District, Nameofparties: this.state.Nameofparties, Appearingfor: this.state.Appearingfor,
            Addressofourclient: this.state.Addressofourclient, Feesandexpenses: this.state.Feesandexpenses, Remarks: this.state.Remarks, Documents: this.state.Documents, NextDate: this.state.NextDate };
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel(){
        this.props.history.push();
    }

    render(){
        return(
            <div>

            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Advocate Register</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Serial No:</label>
                                    <input placeholder="Serial No" name="serial No" className="form-control"
                                    value={this.state.serialNo} onChange={this.changeSerialNoHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Case Number:</label>
                                    <input placeholder="Case Number" name="case Number" className="form-control"
                                    value={this.state.caseNumber} onChange={this.changeCaseNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>District:</label>
                                    <input placeholder="District" name="district" className="form-control"
                                    value={this.state.district} onChange={this.changeDistrictHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input placeholder="Name of parties" name="name of parties" className="form-control"
                                    value={this.state.nameofparties} onChange={this.changeNameofpartiesHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Appearing for:</label>
                                    <input placeholder="Appearing for" name="Appearing for" className="form-control"
                                    value={this.state.appearingfor} onChange={this.changeAppearingforHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Address of our client:</label>
                                    <input placeholder="Address of our client" name="Address of our client" className="form-control"
                                    value={this.state.addressofourclient} onChange={this.changeAddressofourclientHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Fees and expenses (Paid and balance):</label>
                                    <input placeholder="Fees and expenses" name="Fees and expenses" className="form-control"
                                    value={this.state.feesandexpenses} onChange={this.changeFeesandexpensesHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Remarks:</label>
                                    <input placeholder="Remarks" name="Remarks" className="form-control"
                                    value={this.state.remarks} onChange={this.changeRemarksHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Documents:</label>
                                    <input placeholder="Documents" name="Documents" className="form-control"
                                    value={this.state.Documents} onChange={this.changeDocumentsHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Next Date:</label>
                                    <input placeholder="Next Date" name="Next Date" className="form-control"
                                    value={this.state.NextDate} onChange={this.changeNextDateHandler}/>
                                </div>
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default StudentComponent