export default function logOut(){

    if(localStorage.getItem("user") === null){
        window.location.href = "/"
    }

}