type RecordItem={
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    date?: string;
}

type Tag={
    id: string;
    name: string;
}
type myState={
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}
