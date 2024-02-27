import { useContext } from "react"
import { Group, Participant } from "../../../reducers/GroupReducer"
import { UserContainer, ParticipanteTitle, IconUserGroup, UserInfo, RemoveParticipantButton } from "./styles"
import { GroupContext } from "../../../contexts/GroupContext"


interface ParticipantCardProps{
    participant: Participant
}

export function ParticipanteCard({participant} : ParticipantCardProps) {

        const {removeGroup} = useContext(GroupContext);

    function handleRemoveGroup(){
        removeGroup(participant.id);
    }

    return (
        <UserContainer >
            <UserInfo>
            <IconUserGroup />
            <ParticipanteTitle>{participant.name}</ParticipanteTitle>
            </UserInfo>
            <RemoveParticipantButton></RemoveParticipantButton>
        </UserContainer>
    )
}

