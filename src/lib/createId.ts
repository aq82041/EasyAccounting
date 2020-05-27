let id=JSON.parse(localStorage.getItem("_id") || '0')
function createId(){
    id+=1
    localStorage.setItem("_id",JSON.stringify(id))
    return id
}

export default createId