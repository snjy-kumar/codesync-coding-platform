import { useFileSystem } from "@/context/FileContext"
import useResponsive from "@/hooks/useResponsive"
import cn from "classnames"
import Editor from "./Editor"
import FileTab from "./FileTab"
import VideoCall from "../sidebar/sidebar-views/VideoCall"
import Draggable from "react-draggable"

function EditorComponent() {
    const { openFiles } = useFileSystem()
    const { minHeightReached } = useResponsive()

    if (openFiles.length <= 0) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <h1 className="text-xl text-white">
                    No file is currently open.
                </h1>
            </div>
        )
    }

    return (
        <main
            className={cn("flex w-full flex-col overflow-x-auto md:h-screen", {
                "h-[calc(100vh-50px)]": !minHeightReached,
                "h-full": minHeightReached,
            })}
        >
            <FileTab />
            <Editor />
            <Draggable>
                <div className="absolute bg-dark border-t border-darkHover text-white w-[200px] h-[200px]">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <VideoCall />
                    </div>
                </div>
            </Draggable>
        </main>
    )
}

export default EditorComponent
