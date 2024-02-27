import uuid from 'react-native-uuid';
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
    activeGroup: Group | null
    activeGroupId: string | null
}

type ActionTypes =
    | { type: 'LOAD_STORAGE'; payload: { loadedData: GroupState} }
    | { type: 'ADD_NEW_GROUP'; payload: { name: string } }
    | { type: 'REMOVE_GROUP'; payload: { id: string | null } }

/*  export function newGroup(group: Group): Group {
   return { id: crypto.randomUUID(), name: group.name, teams : [] } as Group
 }
*/
export function newGroupName(dataName: string): Group {
    return { id: uuid.v4(), name: dataName, teams: [] } as Group
}

const initialState = {
    groups: [] as Array<Group>,
    activeGroup: {} as Group,
    activeGroupId: null,
} as GroupState



export function groupReducer(
    state: GroupState,
    action: ActionTypes
) {
    switch (action.type) {
        case "LOAD_STORAGE":
            const savedState = action.payload.loadedData;
            
            if(savedState){
                return savedState
            }
            return state
        case "ADD_NEW_GROUP":
            const newGroup = newGroupName(action.payload.name)
            const grupoExistente = state.groups && state.groups.findIndex(g => g.name == action.payload.name);
            if (grupoExistente)
                return {
                    ...state,
                    groups: [...state.groups, newGroup],
                    activeGroup: newGroup,
                    activeGroupId: newGroup.id
                } as GroupState
            else
                return state
        case "REMOVE_GROUP":
            const newGroupList = state.groups.filter(g => g.id !== action.payload.id)
            return { ...state, groups: newGroupList };

        default: 
            return state
    }

}