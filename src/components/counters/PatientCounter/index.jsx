import { useState, useEffect } from "react"
import axios from "axios"
import {FaHospitalUser} from "react-icons/fa"

export const PatientCounter = () => {

    const [patientCounter, setPatientCounter] = useState(0)

    useEffect(()=> {
    
        const fetchPatients = async () => {
            try {
                const response = await axios.get("http://localhost:3000/patients")
                setPatientCounter(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados dos pacientes", error)
            }
        }
        fetchPatients()
    }, [])
  
    return (
    <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center w-60">
        <h2 className="text-xl font-bold flex items-center gap-2">
            <FaHospitalUser size={20} className="text-blue-600"/>{patientCounter}
        </h2>
        {patientCounter && <p className="text-gray-600 mt-2">Pacientes</p>}
    </div>
  )
}
