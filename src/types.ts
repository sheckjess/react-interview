export type DealType = {
    id?: number;
    institution: string;
    dealSize: string;
    dealType: string;
    isValidated: boolean;
    isPublished: boolean
}

export type DealsListType = {
    deals: DealType[]
}
