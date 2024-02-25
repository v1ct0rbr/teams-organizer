import { ArrowLeft } from 'lucide-react-native'
import { styled} from 'styled-components/native'


export const BackNavigation = styled(ArrowLeft).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.WHITE,
    fontWeight: theme.FONT_SIZE.MD

}))`` 