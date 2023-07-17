export const handleErrors = (code) => {
  switch (code){
      case "22P02":
      return{
          status: 400,
          message: "Formato no valido en el parametro"
      }
      case "23505":
      return{
          status: 400,
          message: "Email ya registrado"
      }
      case "23503":
        return{
            status: 400,
            message: "no se encuentra registro relacionado"
        }
      case "400":
      return{
          status: 400,
          message: "Faltan datos en la peticion"
      }
      case "404":
      return{
          status: 404,
          message: "no existe ese registro"
      }
      case "1111":
      return{
          status: 404,
          message: "registro no le pertenece al usuario"
      }
      default:
      return{
          status: 500,
          message: "Error de servidor"
      }
  }
}