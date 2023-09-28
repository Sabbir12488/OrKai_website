"use client"

import { BillboardColumn } from "./columns";

interface cellActionProps{
    data: BillboardColumn;
};

export const CellAction: React.FC<cellActionProps> = ({
    data
}) => {
    return (
        <div>
            buttons
        </div>
    );
};