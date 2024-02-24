import { Container, GroupTitle, IconUserGroup } from "./styles"


interface GroupcardProps{
    nameGroup: string
}

export function Groupcard({nameGroup} : GroupcardProps) {
    return (
        <Container>
            <IconUserGroup />
            <GroupTitle>{nameGroup}</GroupTitle>
        </Container>
    )
}

