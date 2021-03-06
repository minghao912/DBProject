export interface Source {
    "id": number,
    "name": string,
    "organization": string,
    "phone": string,
    "email": string,
    "remarks": string
}

export enum PagesToLoad {
    NONE = 0,
    ALL_SOURCES = 1, 
    ADD_SOURCE = 2, 
    EDIT_SOURCE = 3
}

export interface MainProps {
    "toLoad": PagesToLoad
}