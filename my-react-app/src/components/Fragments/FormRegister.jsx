import InputForm from "../Elements/input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
          <InputForm label="Fullname" type="text" name="fullname" placeholder="Insert your name here..." />
          <InputForm label="Email" type="email" name="email" placeholder="example@mail.com"></InputForm>
          <InputForm label="Password" type="password" name="password" placeholder="******"></InputForm>
          <InputForm label="Confirm Password" type="password" name="confirmPassword" placeholder="******"></InputForm>
          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister