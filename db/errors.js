export const handleErrors = (code) => {
  switch (code){
      case "22P02":
      return{
          status: 400,
          message: "Formato no valido en el parametro"
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
      default:
      return{
          status: 500,
          message: "Error de servidor"
      }
  }
}