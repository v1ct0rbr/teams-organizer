import logoImage from "@assets/logo.png";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { BackButton, BackIcon, Container, Logo } from "./styles";

interface HeaderProps extends NativeStackHeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false, navigation }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImage} />
    </Container>
  );
}
