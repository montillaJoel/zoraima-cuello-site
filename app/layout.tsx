import {FC, PropsWithChildren}  from "react";
import "@/app/ui/globals.css"

const RootLayout: FC<PropsWithChildren> = ({children}) =>{
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
