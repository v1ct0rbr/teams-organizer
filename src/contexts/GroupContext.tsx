import { ReactNode, createContext, useReducer } from "react"

import { Group, groupReducer, GroupState } from "../reducers/GroupReducer"

interface GroupContextType {
    createGroup: (data: string) => void
    removeGroup: (cycleId: string) => void
    groupState: GroupState
}

export const GroupContext = createContext({} as GroupContextType)

interface GroupContextProviderProps {
    children: ReactNode
}

export function GroupContextProvider({
    children,
}: GroupContextProviderProps) {

    const initialState = {
        groups: [] as Array<Group>,
        activeGroup: {} as Group,
        activeGroupId: null,
    } as GroupState

    function loadGroupState(arr: Array<Group>) {
        /* const savedSate = localStorage.getItem('@pomodo-timer:state-cycles-1.0.0')
    
        if (savedSate) {
          return JSON.parse(savedSate) as StateCycle
        } */
        return {
            ...initialState,
            groups: arr as Array<Group>,
            
        } 
    }
   
   
    
    const [groupState, dispatch] = useReducer(groupReducer, [] as Array<Group>, loadGroupState);

    function createGroup(name: string) {
        dispatch({
            type: "ADD_NEW_GROUP",
            payload: {
                name: name
            }
        })
    }

    function removeGroup(id: string) {
        dispatch({
            type: "REMOVE_GROUP",
            payload: {
                id: id
            }
        })
    }

    return <GroupContext.Provider
        value={{
            createGroup,
            removeGroup,
            groupState
        }}
    >
        {children}
    </GroupContext.Provider>


}