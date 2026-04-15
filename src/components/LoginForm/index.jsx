import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { InputHandler } from "./InputHandler"
import { toast } from "react-toastify"

import { Link, useNavigate } from "react-router" 
import axios, { Axios } from "axios"


const LoginForm = () => {
    
    const {login, logout, user} = useAuth()
    const navigate = useNavigate()
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get("http://localhost:3000/users", {
                params: {email, password}
            })    
            console.log(response)
            
            if(response.data.length === 0){
                toast.error("Usuário não encontrado. Verifique email e senha", {
                    autoClose: 3000,
                    pauseOnHover: false
                });
                return
            }
            

            toast.success("Login realizado com sucesso!", {
                autoClose: 2000
            })
        } catch (error) {
            console.error("Erro ao verificar usuário:", error)
        }
    }

    return (
        <>
            <section className="w-full flex justify-center items-center" onSubmit={handleLogin}>
                <form className="flex flex-col justify-center items-center bg-white px-12 h-[400px] rounded-md shadow-md">
                    <h2 className="font-bold text-2xl mb-4">Login</h2>
                    <InputHandler label={"Email"} type={"email"} required id={"email"}  
                    value={email} setValue={setEmail}
                    />
                    <InputHandler label={"Senha"} type={"password"} required id={"senha"}
                    value={password} setValue={setPassword} min={8}
                    />
                    <button className="text-lg text-white mt-2 py-2 w-full rounded-md bg-cyan-700 cursor-pointer hover:bg-cyan-800 transition-colors" type="submit">Entrar</button>
                    <p className="mt-3">Não possui login? <Link href="" className="text-cyan-500"> Cadastre-se! </Link></p>
                </form>
            </section>
        </>
    )
}

export default LoginForm
