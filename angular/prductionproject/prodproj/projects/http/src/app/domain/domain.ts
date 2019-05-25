export interface Data {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface OneDto {
    data: Data,
}
 

export interface ManyDto {
    data: Array<Data>,
    page: number,
    per_page: number
    total: number,
    total_pages: number
}