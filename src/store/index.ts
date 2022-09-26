import { NavigationKeys } from '@components/common'
import create from 'zustand'


type StoreProps = {
    activeSection: NavigationKeys | 'Home',
    setActiveSection: (section:  NavigationKeys | 'Home') => void 
}
export const useStore = create<StoreProps>((set) => ({
    activeSection: 'Home',
    setActiveSection: (activeSection) => set({activeSection: activeSection})
}))