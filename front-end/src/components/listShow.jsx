import React, {useEffect, useState} from 'react';
import {deleteTaskList, readTaskList} from "../ApiRequest/ApiRequest.js";
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";



const ListShow = () => {
    const navigate=useNavigate()

    let [change,setChange]=useState(0);
    let [data,setData]=useState([])
    useEffect(()=>{

        (async () => {
            let res = await readTaskList();
            setData(res);
        })()
    },[change])
    const del=async (id) => {
        let result = await deleteTaskList(id);
        if(result){
            setChange(new Date().getTime());
            toast.success("Successfully Deleted")

        }else {
            toast.error("Deletion Failed")
        }

    }

    const onUpdate=(id)=>{
        navigate('/save?id='+id)
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    <div className="card col-12">
                        <div className="card-header bg-secondary">
                            <h1 className="text-white text-center">My Information</h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>firstName</th>
                                        <th>LastName</th>
                                        <th>gender</th>
                                        <th>dateOfBirth</th>
                                        <th>nationality</th>
                                        <th>address</th>
                                        <th>email</th>
                                        <th>phone</th>
                                        <th>admissionDate</th>
                                        <th>courses</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((item,i)=>{
                                         return(
                                             <tr key={i}>
                                             <td>{item['firstName']}</td>
                                             <td>{item['lastName']}</td>
                                             <td>{item['gender']}</td>
                                             <td>{item['dateOfBirth']}</td>
                                             <td>{item['nationality']}</td>
                                             <td>{item['address']}</td>
                                             <td>{item['email']}</td>
                                             <td>{item['phone']}</td>
                                             <td>{item['admissionDate']}</td>
                                             <td>{item['courses']}</td>
                                                 <td>
                                                     <button onClick={()=>{onUpdate(item['_id'])}} className="btn btn-success">Edit</button>
                                                     <button onClick={()=>{del(item['_id'])}} className="btn mx-2 btn-danger">Remove</button>
                                                 </td>

                                         </tr>
                                         )

                                    })
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />

        </div>
    );
};

export default ListShow;