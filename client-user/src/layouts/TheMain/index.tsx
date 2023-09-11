import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
const TheMain = ({children}: Props)=>{
    return <main>
        {children}
    </main>
}
export default TheMain