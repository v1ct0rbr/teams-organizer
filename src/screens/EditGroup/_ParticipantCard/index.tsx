import { useContext } from "react"
import { Group, Participant } from "../../../reducers/GroupReducer"
import { UserContainer, ParticipanteTitle, IconUserGroup, UserInfo, RemoveParticipantButton, RemoveParticipantButtonIcon } from "./styles"
import { GroupContext } from "../../../contexts/GroupContext"
import { TouchableOpacityProps } from "react-native"


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

