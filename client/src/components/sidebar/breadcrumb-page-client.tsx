"use client";
//to handle the correct navigation of the breadcrumb page, we need to use the useRouter hook from next/navigation to get the current path and then we can use that path to determine which breadcrumb item is active and which one is not. We can also use the Link component from next/link to navigate to the correct page when the user clicks on a breadcrumb item.

//In this file, we will create a breadcrumb page that will be used in the sidebar. The breadcrumb page will display the current path of the user and will allow the user to navigate to different pages by clicking on the breadcrumb items.

import { usePathname } from "next/navigation";
import { BreadcrumbPage } from "../ui/breadcrumb";
import { get } from "http";

export default function BreadcrumbPageClient() {
    const path = usePathname();
    const getPageTitle = (path:string)=>{
        switch (path){
            case "/dashboard":
                return "Dashboard";
            case "/dashboard/create":
                return "Create";
            case "/dashboard/projects":
                return "Projects";  
            case "/dashboard/settings":
                return "Settings";
            default:
                return "Dashboard";
        };

    }
    return (
        <BreadcrumbPage className="text-foreground text-sm font-medium">
        {getPageTitle(path)}
        </BreadcrumbPage>

    )
}