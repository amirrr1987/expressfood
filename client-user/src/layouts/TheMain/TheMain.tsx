import { useThemeContext } from "@/stores/app.context"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
const TheMain = ({children}: Props)=>{

    const theme = useThemeContext()
    return <main className={theme.darkMode ? 'bg-light': 'bg-dark'}>
        {children}
    </main>
}
export default TheMain