import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";

export default function ImageModal({url}: { url: string }) {

    return (
        <>
            <DialogContent>
                <img src={url} alt="Image" className="rounded-md object-cover"/>
            </DialogContent>
        </>
    )
}
