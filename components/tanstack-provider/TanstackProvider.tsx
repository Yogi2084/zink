"use client";

import { tanstackQueryClinet } from "@/lib/integration/tanstack";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";


const TanstackProvider = (props: PropsWithChildren) => {
    return (
        <QueryClientProvider client={tanstackQueryClinet}>
        {props.children}
        </QueryClientProvider>
    );

}

export default TanstackProvider;