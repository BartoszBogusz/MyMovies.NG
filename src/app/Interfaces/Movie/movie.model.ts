import { Disk } from "../Disk/disk.model";

export interface Movie {
    id: number,
    title: string,
    lastModified: Date,
    isWatched: boolean,
    disk: Disk
}