import { Participant } from "../../../reducers/GroupReducer"
import { IconUserGroup, ParticipanteTitle, RemoveParticipantButton, RemoveParticipantButtonIcon, UserContainer, UserInfo } from "./styles"


interface ParticipantCardProps {
    participant: Participant
    removeAction: (idParticipant: string) => void    
}

export function ParticipanteCard({ participant, removeAction }: ParticipantCardProps) {
    function handleRemoveGroup() {
        removeAction(participant.id);
    }
    return (
        <UserContainer >
            <UserInfo>
                <IconUserGroup />
                <ParticipanteTitle>{participant.name}</ParticipanteTitle>
            </UserInfo>
            <RemoveParticipantButton onPress={handleRemoveGroup}>
                <RemoveParticipantButtonIcon />
            </RemoveParticipantButton>
        </UserContainer>
    )
}

