import { ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode
}

const GlobalLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            { children }
        </div>
    )
}

export default GlobalLayout