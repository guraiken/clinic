

const LoginForm = () => {
  return (
    <>
    <section className="w-full flex justify-center items-center">
        <form className="flex flex-col justify-center items-center bg-white px-10 py-14 rounded-md shadow-md">
            <h2 className="font-bold text-2xl mb-4">Login</h2>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Email:</label>
                <input type="email" className="px-2 border-1"/>
            </div>

            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="">Senha:</label>
                <input type="password" className="px-2 border-1"/>
            </div>
            <button className="text-lg text-white py-2 w-full rounded-md bg-sky-700 cursor-pointer hover:bg-sky-600">Entrar</button>
        </form>
    </section>
    </>
  )
}

export default LoginForm
