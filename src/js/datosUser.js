export const datosUser = () => {

    const user = localStorage.getItem("user")
    const ArrayUser = JSON.parse(user)

    return ArrayUser;
}