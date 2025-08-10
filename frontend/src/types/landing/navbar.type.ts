

type SubcontentType = {
    title: string;
    url: string;
    description: string;
}

type ContentType = {
    title: string;
    type: "single_image_column" | "double_column";
    subcontents: SubcontentType[];
}


export type{
    SubcontentType,
    ContentType
}