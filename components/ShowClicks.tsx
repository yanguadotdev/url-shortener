import { BarChartIcon } from "lucide-react";

export default function ShowClicks({ visits }: { visits: number }) {
    return (
        <p className="flex items-end gap-1">
            <BarChartIcon width={14} />
            <span>{visits} clicks</span>
        </p>
    )
}