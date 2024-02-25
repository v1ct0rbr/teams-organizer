import { ArrowLeft } from "lucide-react-native"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"




export function BackNavigation({...rest}: TouchableOpacityProps) {
    return(
    <TouchableOpacity {...rest}>
        <BackNavigation />
    </TouchableOpacity>
    )
}