'use client'

import { useState, useContext, createContext,ReactNode, Dispatch, SetStateAction } from "react"

type SectionName = "Home" | "About" | "Projects" | "Skills" | "Experiences"

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: Dispatch<SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: Dispatch<SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export function ActiveSectionContextProvider({ children }: { children: ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)
    if (!context) {
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider")
    }
    return context
}

