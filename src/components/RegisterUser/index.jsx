import { InputHandler } from "../LoginForm/InputHandler"

const RegisterUser = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h2 className="tex-2xl font-bold mb-6 text-center">Criar Usuário</h2>
        <form action="">
            <fieldset>
            <InputHandler
                label={"Email:"}
                type={"email"}
                id={"email"}
                required
                className={"w-full p-2 border rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"}
                />
            </fieldset>
            <fieldset>
            <InputHandler
                label={"Senha:"}
                type={"password"}
                id={"password"}
                required
                min={8}
                className={"w-full p-2 border rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"}
            />
            </fieldset>
            <fieldset>
            <InputHandler
                label={"Confirmar Senha:"}
                type={"confirmPassword"}
                id={"confirmPassword"}
                required
                min={8}
                className={"w-full p-2 border rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"}
            />
            </fieldset>

            <div>
                <button
                type="submit"
                className="w-full p-2 rounded-lg text-white"
                >
                    {/* {isSaving ? "Salvando..." : "Criar Usuário"} */}
                    Criar Usuário
                </button>
            </div>
        </form>
    </div>
  )
}

export default RegisterUser