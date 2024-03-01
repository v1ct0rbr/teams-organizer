import { Highlight } from "@components/Highlight";
import { InputField } from "@components/InputFiled";
import { MainContainer } from "@components/MainContainer";
import { MyButton } from "@components/MyButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppError } from "@utils/AppError";
import { useContext } from "react";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useToast } from "react-native-toast-notifications";
import z from "zod";

import { Container, IconGroups } from "./styles";
import { RootStackParamList } from "../../@types/rootstack";
import { GroupContext } from "../../contexts/GroupContext";

const FIELD_REQUIRED_STR = "This field is required";

export const signUpFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Valor precisa ser uma string",
      required_error: FIELD_REQUIRED_STR,
    })
    .min(3, "Mínimo de 3 caracteres")
    .max(20, "Máximo de 20 caracteres")
    .trim(),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

type NewGroupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "NewGroup"
>;

export const NewGroup: React.FC<NewGroupScreenProps> = ({ navigation }) => {
  const toast = useToast();

  const { createGroup } = useContext(GroupContext);

  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
    },
    mode: "onBlur",
  });
  function clearFieds() {
    methods.reset({ name: "" });
  }

  const onSubmit: SubmitHandler<SignUpFormSchema> = (data) => {
    try {
      createGroup(data.name);
      toast.show("Cadastrado com sucesso", {
        type: "success",
        placement: "top",
        duration: 4000,
        animationType: "slide-in",
      });
      clearFieds();
      navigation.navigate("EditGroup");
    } catch (error) {
      if (error instanceof AppError)
        toast.show(error.message, {
          type: "danger",
          placement: "top",
          duration: 4000,
          animationType: "slide-in",
        });
    }
  };

  const onError: SubmitErrorHandler<SignUpFormSchema> = (errors, e) => {
    //console.log(JSON.stringify(errors));
  };

  return (
    <MainContainer>
      <Container>
        <IconGroups />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma turma para adcionar pessoas"
        />

        <Controller
          control={methods.control}
          name="name"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => {
            return (
              <InputField
                id="group_name"
                maxLength={20}
                value={value}
                onBlur={onBlur}
                errorMessage={error?.message}
                onChangeText={onChange}
                placeholder="Escreva o nome da turma"
              />
            );
          }}
        />
        <MyButton
          title="Criar"
          isPositionBottom={false}
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </Container>
    </MainContainer>
  );
};
