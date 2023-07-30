import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/inventario.css';

const Cuentas = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const GetData=async()=>{
          try {
                const respuesta = await axios.get(`http://localhost:8000/api/users`);
                setUsers(respuesta.data);
            } catch (error){
              console.log(error)
          }
        }
        GetData();
      }, [])
  return (
    <div className="w-100 detalles">
    <div className="cardHeader">
        <h2>Cuentas</h2>
    </div>
    <table>
            <thead>
                <tr>
                    <td>Usuarios</td>
                    <td>Correo</td>
                    <td>Ultimo inicio</td>
                   

                </tr>
            </thead>
            <tbody>
                {
                    users.map((productos,idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{productos.nombre}</td>
                                <td>{productos.email}</td>
                                <td>{productos.ultimaVez}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
</div>
  )
}

export default Cuentas