/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useEffect, useReducer } from "react";

import {
  Group,
  GroupState,
  Team,
  groupReducer,
} from "../reducers/GroupReducer";
import { AppError } from "../utils/AppError";

interface GroupContextType {
  createGroup: (data: string) => void;
  removeGroup: (cycleId: string) => void;
  selectGroup: (id: string) => void;
  updateTeam: (activeGroupId: string, team: Team) => void;
  groupState: GroupState;
}

export const GroupContext = createContext({} as GroupContextType);

interface GroupContextProviderProps {
  children: ReactNode;
}

export const initialState = {
  groups: [] as Group[],
  activeGroup: {} as Group,
  activeGroupId: null,
} as GroupState;

export function GroupContextProvider({ children }: GroupContextProviderProps) {
  const [groupState, dispatch] = useReducer(groupReducer, initialState);

  useEffect(() => {
    loadGroupState();
  }, []);

  useEffect(() => {
    saveGroupState();
  }, [groupState]);

  const saveGroupState = async () => {
    try {
      await AsyncStorage.setItem(
        "@teams-organizer:group-state-1.0.0",
        JSON.stringify(groupState),
      );
    } catch (error) {
      //console.error("Erro ao salvar dados no AsyncStorage:", error);
    }
  };

  const loadGroupState = async () => {
    AsyncStorage.getItem("@teams-organizer:group-state-1.0.0").then(
      (savedDate) => {
        if (savedDate !== null) {
          const result = JSON.parse(savedDate) as GroupState;
          //console.log(result.groups);
          dispatch({
            type: "LOAD_STORAGE",
            payload: {
              loadedData: result,
            },
          });
        } else
          dispatch({
            type: "LOAD_STORAGE",
            payload: {
              loadedData: initialState,
            },
          });
      },
    );
  };

  function createGroup(name: string) {
    const existingGroup = groupState.groups.find((g) => g.name === name);
    if (existingGroup) {
      throw new AppError("Já existe grupo com mesmo nome");
    }
    dispatch({
      type: "ADD_NEW_GROUP",
      payload: {
        name,
      },
    });
  }

  function selectGroup(id: string) {
    dispatch({
      type: "SELECT_ACTIVE_GROUP",
      payload: {
        id,
      },
    });
  }

  function removeGroup(id: string) {
    dispatch({
      type: "REMOVE_GROUP",
      payload: {
        id,
      },
    });
  }

  function updateTeam(activeGroupId: string, team: Team) {
    dispatch({
      type: "UPDATE_TEAM",
      payload: {
        activeGroupId,
        team,
      },
    });
  }

  return (
    <GroupContext.Provider
      value={{
        createGroup,
        removeGroup,
        selectGroup,
        updateTeam,
        groupState,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
}
