import { useState, useEffect } from "react"
import axios from "axios"
import {FaCalendarDays} from "react-icons/fa6"

export const ConsultsCounter = () => {

    const [consultsCounter, setConsultsCounter] = useState(0)

    useEffect(()=> {
    
        const fetchConsults = async () => {
            try {
                const response = await axios.get("http://localhost:3000/consults")
                setConsultsCounter(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados das consultas", error)
            }
        }
        fetchConsults()
    }, [])
  
    return (
    <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center w-60">
        <h2 className="text-xl font-bold flex items-center gap-2">
            <FaCalendarDays size={20} className="text-blue-600"/>{consultsCounter}
        </h2>
            {consultsCounter && <p className="text-gray-600 mt-2">Consultas</p>}
    </div>
  )
}
