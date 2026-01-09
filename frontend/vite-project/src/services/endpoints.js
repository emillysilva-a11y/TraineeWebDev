import api from "./api";

export async function GetUser(){
    const {data} = api.get(`/usuario`);
    return data;
}
export async function CreateUser(body){
    const {data} = api.post(`/usuario`, body);
    return data;
}
export async function UpdateUser(id, body){
    const {data} = api.put(`/usuario:${id}`, body);
    return data;
}
export async function DeleteUser(id){
    const {data} = api.delete(`/usuario:${id}`);
    return data;
}