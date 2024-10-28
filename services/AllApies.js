import base_url from "./base_url";
import commonApi from "./commenApi";


export const  addEmployeApi=async(data)=>{
    return await commonApi(`${base_url}/addemp`,"POST","",data)

}

export const getEmployeApi=async()=>{
    return await commonApi(`${base_url}/employees`,"GET","","")
}

export const deleteEmployeApi=async(id)=>{
    return await commonApi(`${base_url}/deleteemp/${id}`,"DELETE","",{})
}
export const editEmployeeApi=async(id,data)=>{
    return await commonApi(`${base_url}/updateemp/${id}`,"PUT","",data)
}