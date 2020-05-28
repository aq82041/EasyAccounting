type RecordItem={
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    date?: Date;
}

type Tag={
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
    save: () => void;
    create: (name: string) => 'success' | 'duplicated'; //联合类型
    update: (id: string,newName: string) => 'success' | 'duplicated' | 'not found';
    remove: (id: string) => void;
}

interface Window  {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => void;
    updateTag: (id: string,newName: string) => 'success' | 'duplicated' | 'not found';
    findTag: (id: string) => Tag | undefined;

    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
}