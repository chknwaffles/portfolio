import React from "react"

import { ThemeProvider } from "./src/components/theme-context"

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>
        {element}
    </ThemeProvider>
)