const setAlert = (msg,type='danger')=>{
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg}<button class="btn-close" data-bs-dismiss = "alert"></button> </p>`
}



const Marriage = (age) =>{
  if(age>=18){
    return ( `Yor are available for marriage`);
  }else{
    return ( `Yor are not available for marriage`);
  }
}

