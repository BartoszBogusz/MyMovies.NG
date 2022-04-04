import { Disk } from "./disk.model";

export interface PaginedDisks {
    items: Disk[],
    itemsFrom: number,
    itemsTo: number,
    totalItemsCount: number,
    totalPages: number
}