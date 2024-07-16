import create from 'zustand'

export interface AllTypeAllToken {
    item_Token: any[]
    update_Token: (e: any) => void
}
export const useAllTokenState = create<AllTypeAllToken>((set) => ({
    item_Token: [],
    update_Token: (newValue) => set((state) => ({ item_Token: [...state.item_Token, newValue] })),

}));

export interface OpenTypeModal {
    open: boolean
    updateModalOpen: (e: any) => void
}
export const useOpenModalState = create<OpenTypeModal>((set) => ({
    open: false,
    updateModalOpen: () => set((state) => {
        state.open = !state.open
        return { ...state }
    }
    )
}))

