import React, {useEffect, useRef, useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {createTasklist, readListByID, updateTaskList} from "../ApiRequest/ApiRequest.js";

const Form = () => {
    const navigate=useNavigate()

    const [data,setdata]=useState(null);


    const [formValue,setFormValue]=useState({
        firstName:"",
        lastName:"",
        gender:"",
        dateOfBirth:"",
        nationality:"",
        address:"",
        email:"",
        phone:"",
        admissionDate:"",
        courses:""
    })
    const inputOnChange=(name,value)=>{
        setFormValue((formValue)=>({
            ...formValue,
            [name]:value
        }))

    }


    useEffect(()=>{
        (async () => {
            const urlParams = new URLSearchParams(window.location.search);

            const id = urlParams.get('id');
            setdata(id);
            if(id!==null){
                formfillup(id);
            }
        })()
    },[])

    const formfillup=async (id)=>{

        const res=await readListByID(id);
        setFormValue(
            {
                firstName:res['firstName'],
                lastName:res['lastName'],
                gender:res['gender'],
                dateOfBirth:res['dateOfBirth'],
                nationality:res['nationality'],
                address:res['address'],
                email:res['email'],
                phone:res['phone'],
                admissionDate:'admissionDate',
                courses:res['courses']
            }
        )
    }
    const save=async () => {
        if (formValue.firstName.length === 0) {
            toast.error("Enter your First Name!")
        } else if (formValue.lastName.length === 0) {
            toast.error("Enter your Last Name!")
        } else if (formValue.dateOfBirth.length === 0) {
            toast.error("Enter your dateOfBirth!")
        } else if (formValue.address.length === 0) {
            toast.error("Enter your address!")
        } else if (formValue.email.length === 0) {
            toast.error("Enter your email!")
        } else if (formValue.admissionDate.length === 0) {
            toast.error("Enter your admissionDate!")
        } else if (formValue.nationality.length === 0) {
            toast.error("Enter your admissionDate!")
        } else if (formValue.phone.length === 0) {
            toast.error("Enter your phone!")
        } else if (formValue.courses.length === 0) {
            toast.error("Enter your courses!")
        } else if (!formValue.gender) {
            toast.error("Enter Gender!")
        } else {
            if(data===null){
                let res = await createTasklist(formValue)
                toast.success("Succfully submitted")
                navigate('/');
            }
            else {
                let res=await updateTaskList(formValue,data);
                if(res){
                    toast.success("Successfully form Updated");
                    navigate('/');
                }
                else {
                    toast.error("information is not updated")
                }

            }

        }


    }





    const submit = useRef();
    return (
        <div className="container my-4">
            <div className="row">
                <h3 className="text-center mb-4">Enter your Information</h3>

                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        value={formValue.firstName}
                        onChange={(e)=>{inputOnChange('firstName',e.target.value)}}
                        type="text"
                        className="form-control"
                        placeholder="Enter first name"
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        value={formValue.lastName}
                        onChange={(e)=>{inputOnChange('lastName',e.target.value)}}
                        type="text"
                        className="form-control border-2"
                        placeholder="Enter last name"
                    />
                </div>

                <div className="col-md-12 mb-3">
                    <label htmlFor="gender"  className="p-2">Gender:</label>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formValue.gender==="male"}
                            onChange={(e)=>inputOnChange('gender',e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="gender-male">
                            Male
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            checked={formValue.gender==="female"}
                            value="female"
                            onChange={(e)=>inputOnChange('gender',e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="gender-female">
                            Female
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"

                            value="other"
                            checked={formValue.gender==="other"}
                            onChange={(e)=>inputOnChange('gender',e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="gender-other">
                            Others
                        </label>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="nationality">Nationality:</label>
                    <input
                        value={formValue.nationality}
                        onChange={(e)=>{inputOnChange('nationality',e.target.value)}}
                        type="text"
                        className="form-control"
                        placeholder="Enter nationality"
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        value={formValue.dateOfBirth}
                        onChange={(e)=>{inputOnChange('dateOfBirth',e.target.value)}}
                        type="date"
                        className="form-control"
                        placeholder="Enter date of birth"
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="address">Address:</label>
                    <input
                        value={formValue.address}
                        onChange={(e)=>{inputOnChange('address',e.target.value)}}
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                        value={formValue.email}
                        onChange={(e)=>{inputOnChange('email',e.target.value)}}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        value={formValue.phone}
                        onChange={(e)=>{inputOnChange('phone',e.target.value)}}
                        type="number"
                        className="form-control"
                        placeholder="Enter phone number"
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="admissionDate">Admission Date:</label>
                    <input
                        value={formValue.admissionDate}
                        onChange={(e)=>{inputOnChange('admissionDate',e.target.value)}}
                        type="date"
                        className="form-control"
                        placeholder="Enter admission date"
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="courses">Courses:</label>
                    <input
                        value={formValue.courses}
                        onChange={(e)=>{inputOnChange('courses',e.target.value)}}
                        type="text"
                        className="form-control"
                        placeholder="Enter courses"
                    />
                </div>
                <div>
                    <button onClick={save} className="btn btn-success col-md-6">Submit</button>
                </div>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Form;
