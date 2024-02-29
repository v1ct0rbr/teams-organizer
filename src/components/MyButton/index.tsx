import { TouchableOpacityProps } from "react-native";

import { Button, ButtonTitle, Container } from "./styles";

interface SubmitButtonProps extends TouchableOpacityProps {
  title: string;
  isPositionBottom?: boolean;
  isDanger?: boolean;
}

export function MyButton({
  title,
  isPositionBottom = false,
  isDanger = false,
  ...rest
}: SubmitButtonProps) {
  return (
    <Container>
      <Button isDanger={isDanger} {...rest}>
        <ButtonTitle>{title}</ButtonTitle>
      </Button>
    </Container>
  );
}
