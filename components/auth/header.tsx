import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";


const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});


interface HeaderProps {
    labelBox: string;
    label: string;
};


export const Header = ({labelBox,label}: HeaderProps) => {

    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-2xl font-semibold", font.className)}>
              🔐 {labelBox}
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )

}