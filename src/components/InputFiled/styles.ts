import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
`

export const FormInputGroup = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor:  theme.COLORS.GRAY_300
  }))`
      width: 100%;
      border-radius: 5px;
      padding: 10px;
      color: ${({theme}) => theme.COLORS.WHITE};
      background-color: ${({theme}) => theme.COLORS.GRAY_700};
  `