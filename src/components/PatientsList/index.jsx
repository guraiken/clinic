import {useState, useEffect} from "react"
import axios from "axios"
import {FaUserAlt} from "react-icons/fa"
import Link from "react-router"

export const PatientsList = () => {
    const [patients, setPatients] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [ages, setAges] = useState({}) 

    const calculateAge = (birthdate) => {
        if (!birthdate) "-"
        const today = new Date()
        const birthdateDate = new Date(birthdate)
        let age = today.getFullYear() - birthdateDate.getFullYear()
        const monthDiff = today.getMonth() - birthdateDate.getMonth()

        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) age--
        return age
    }

    useEffect(()=>{
        const fetchPatients = (async ()=> {
            try {
                const response = await axios.get("http://localhost:3000/patients")
                if(!response) return

                const patientsData = response.data

                // calcula a idade de cada paciente e entrega para o estado

                const calculatedAges = {}
                patientsData.forEach((patient) => {
                    calculatedAges[patient.id] = calculateAge(patient.birthdate)
                })
                setAges(calculatedAges)
                setPatients(patientsData)

            } catch (error) {
                console.error()
            }
        })
        fetchPatients()
    },[])

    const filteredPatients = patients.filter((patient)=>
    [patient.fullName, patient.email, patient.phone]
    .join(" ")
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
    )

  return (
    <div>

    </div>
  )
}
