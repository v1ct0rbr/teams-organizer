import { ReactNode, createContext, useReducer } from "react"
import { Group, groupReducer, GroupState } from "../reducers/GroupReducer"

interface GroupContextType {
    createNewCycle: (data: string) => void
    removeCycle: (cycleId: string) => void
    stateCycle: GroupState
}

export const CyclesContext = createContext({} as GroupContextType)

interface GroupContextProviderProps {
    children: ReactNode
}

export function GroupContextProvider({
    children,
}: GroupContextProviderProps) {

    function loadGroupState(): GroupState {
        /* const savedSate = localStorage.getItem('@pomodo-timer:state-cycles-1.0.0')
    
        if (savedSate) {
          return JSON.parse(savedSate) as StateCycle
        } */
        return {
            groups: [] as Array<Group>,
            activeGroup: {} as Group,
            activeGroupId: null,
        } as GroupState
    }

    const [groupState, dispatch] = useReducer(groupReducer, loadGroupState(), {} as any);

    function newGroup(name: string) {
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


}