import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SweetAlert2 from "react-sweetalert2";

interface IFormRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required().min(8),
    confirmPassword: yup.string().required(),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormRegister) => console.log(data);

  return (
    <Box>
      <Stack spacing={1} alignItems="center">
        <Typography variant="h2">Cadastro de usuario</Typography>
        <TextField name="firstName" label="primeiro nome" />
        <TextField name="lastName" label="ultimo nome" />
        <TextField name="email" type="email" label="email" />
        <TextField name="password" type="password" label="senha" />
        <TextField
          name="confirmPassword"
          type="password"
          label=" confirmação de senha"
        />
        <Button variant="contained"> Cadastrar </Button>
      </Stack>
    </Box>
  );
}

export default App;
