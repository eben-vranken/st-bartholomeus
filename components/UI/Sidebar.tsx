import React from "react";
import { FunctionComponent } from "react";

interface SidebarProps {
    children: React.ReactNode;
    styles?: string;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ children, styles }) => {
    const childArray = React.Children.toArray(children);

    return (
        <aside className={`flex bg-text/10 rounded py-4 px-3 h-fit ${styles}`}>
            <section className="flex flex-col gap-y-2">
                {childArray.map((child, index) => (
                    <section key={index}>{child}</section>
                ))}
            </section>
        </aside>
    )
}

export default Sidebar;
