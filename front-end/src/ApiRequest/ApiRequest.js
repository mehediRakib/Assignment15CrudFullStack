import axios from "axios";

export async function createTasklist(postbody){
    try{
        const res=await axios.post("http://localhost:5020/api/v1/createForm",postbody)

        if(res.status===200){
            return true;
        }
        else {
            return false;
        }
    }catch (e) {
        return false;

    }
}

export async function updateTaskList(postBody,id){
 try{
     const res=await axios.post("http://localhost:5020/api/v1/updateform/"+id,postBody)

     if(res.data.status==='success'){
         return true;
     }
     else {
         return false;
     }


 }catch (e) {
     return false;
     
 }
}

export async function deleteTaskList(id){
    try{
        const res=await axios.get("http://localhost:5020/api/v1/deleteForm/"+id);
        if(res.status===200){
            return true;
        }
        else {
            return false;
        }
    }catch (e) {
        return false;
    }
}

export async function readTaskList() {
    try {
        const res = await axios.get("http://localhost:5020/api/v1/listForm");
        return res.data['data'];
    } catch (e) {
        return [];
    }
}

export async  function readListByID(id){
    try{
        const res=await fetch("http://localhost:5020/api/v1/listById/"+id);
        const JsonData=await res.json();
        return JsonData['data'][0];
    }catch (e) {
       return [];
    }
}


