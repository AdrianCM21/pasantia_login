import React from 'react'
import Formulario from '../../components/Formulario'
import axios from 'axios';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const valorInicial={
    nombre:'',
    email:'',
    password:'',
    passwordConfirm:''
}
const envio= async (values,actions)=>{
  try {
      const user = await axios.post(` http://localhost:8000/api/user`,values)
      console.log(user.status)
      if (user.status === 200){
        Swal.fire({
            icon: 'success',
            title: 'GENIAL!!!',
            text: `Cuenta creada prefectamente`,
        });

        navigate('/');
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ops que mal!!!',
        text: `Error: ${user.errors?.response?.data?.message || user.errors.message}`,
    })
    }
      
  } catch (error) {
      console.log(error);
      Swal.fire({
          icon: 'error',
          title: 'Ops que mal!!!',
          text: `Error: ${error?.response?.data?.message || error.message}`,
      })
  }
}
const titulos = {
  titulo:'Crear una nueva cuenta',
  url:'/login',
  nombre:true,
  confirPassword:true,
  pregunta:'¿Ya tienes una cuenta?'
}
  return (
    <Formulario valorInicial={valorInicial} envio={envio}  titulos={titulos}/>
  )
}

export default Register