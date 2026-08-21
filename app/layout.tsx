import {FC, PropsWithChildren}  from "react";
import "@/app/ui/globals.css"
import { Analytics } from "@vercel/analytics/next";
const RootLayout: FC<PropsWithChildren> = ({children}) =>{
    return (
        <html>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
};

export default RootLayout;
