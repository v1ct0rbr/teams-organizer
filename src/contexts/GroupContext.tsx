import { ReactNode, createContext, useEffect, useReducer } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Group, groupReducer, GroupState } from "../reducers/GroupReducer"
import { Alert } from "react-native"


interface GroupContextType {
    createGroup: (data: string) => void
    removeGroup: (cycleId: string) => void
    selectGroup: (id: string) => void
    groupState: GroupState
}

export const GroupContext = createContext({} as GroupContextType)

interface GroupContextProviderProps {
    children: ReactNode
}

export const initialState = {
    groups: [] as Array<Group>,
    activeGroup: {} as Group,
    activeGroupId: null,
} as GroupState

export function GroupContextProvider({
    children,
}: GroupContextProviderProps) {




    const [groupState, dispatch] = useReducer(groupReducer, initialState);


    useEffect(() => {
        loadGroupState()
    }, [])

    useEffect(() => {
        saveGroupState()

    }, [groupState])


    const saveGroupState = async () => {
        try {
            await AsyncStorage.setItem(
                '@teams-organizer:group-state-1.0.0',
                JSON.stringify(groupState),
            );
        } catch (error) {
            console.error('Erro ao salvar dados no AsyncStorage:', error);
        }
    }

    const loadGroupState = async () => {


        AsyncStorage.getItem('@teams-organizer:group-state-1.0.0').then(savedDate => {
            if (savedDate !== null) {
                let result = JSON.parse(savedDate) as GroupState;
                console.log(result.groups)
                dispatch({
                    type: "LOAD_STORAGE",
                    payload: {
                        loadedData: result
                    }
                })
            } else
                dispatch({
                    type: "LOAD_STORAGE",
                    payload: {
                        loadedData: initialState
                    }
                })
        })
     

    }

    function createGroup(name: string) {
        dispatch({
            type: "ADD_NEW_GROUP",
            payload: {
                name: name
            }
        })
    }

    function selectGroup(id: string) {
        dispatch({
            type: "SELECT_ACTIVE_GROUP",
            payload: {
                id: id
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
            selectGroup,
            groupState
        }}
    >
        {children}
    </GroupContext.Provider>


}