import { useCurrentLesson, useStore } from "../zustand-store"

export function Header() {
    const { currentModule, currentLesson } = useCurrentLesson()

    const isLoading  = useStore(store => store.isLoading)

    if (isLoading) {
        return (
            <div role="status" className="max-w-sm animate-pulse">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
            <span className="text=sm text-zinc-400">Módulo "{currentModule?.title}"</span>
        </div>
    )
}