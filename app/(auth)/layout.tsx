import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return <div className="flex justify-center pt-40">{children} </div>
}

export default Layout