
export interface Group {
    id: string;
    name: string
    teams?: Team[]
}

export interface Team {
    id: string
    name: string
    participants?: Participant[]
}

export interface Participant {
    id: string
    name: string
}

export interface GroupState {
    groups: Group[]
    activeGroup: Group
    activeGroupId: string | null
}

type ActionTypes =
    | { type: 'ADD_NEW_GROUP'; payload: { name: string } }
    | { type: 'REMOVE_GROUP'; payload: { id: string | null } }

/*  export function newGroup(group: Group): Group {
   return { id: crypto.randomUUID(), name: group.name, teams : [] } as Group
 }
*/
export function newGroupName(dataName: string): Group {
    return { id: crypto.randomUUID(), name: dataName, teams: [] } as Group
}

export function groupReducer(
    groupState: GroupState,
    action: ActionTypes
) {
    switch (action.type) {
        case "ADD_NEW_GROUP":
            const newGroup = newGroupName(action.payload.name)
            const grupoExistente = groupState.groups.findIndex(g => g.name == action.payload.name);
            if (grupoExistente)
                return {
                    ...groupState,
                    groups: [...groupState.groups, newGroup],
                    activeGroup: newGroup,
                    activeGroupId: newGroup.id
                } as GroupState
            else
                return groupState
        case "REMOVE_GROUP":
            const newGroupList = groupState.groups.filter(g => g.id !== action.payload.id)
            return newGroupList;

        default: groupState
    }

}