import cookie from 'js-cookie';

export const setCookie=(key,value)=>{
        cookie.set(key,value,{expires:1})   
};

export const removeCookie=(key)=>{
cookie.remove(key,{expires:1})
};
export const getCookie=(key)=>{
 return   cookie.get(key)  
};

export const setLocalStorage=(key,value)=>{
 localStorage.setItem(key,JSON.stringify(value))
};


export const removeLocalStorage=(key)=>{
localStorage.removeItem(key)
};

export const authentication=(data)=>{
   console.log(data) 
   setCookie('token',data.token);
   setLocalStorage('user',data);
   
};

export const signout=()=>{
removeCookie('token');
removeLocalStorage('user');

window.location.reload()
}

export const isAuth=()=>{
 
      const cookieChecked=getCookie('token');
      if(cookieChecked){
          if(localStorage.getItem('user')){
             
              return JSON.parse(localStorage.getItem('user'))
          }
          else{
              
              return false;
          }
      }
      else{
          return false;
      }
    
}


export const userAuth= function(props){

    if(!isAuth()){
        props.history.push('/login')
    }
        
}