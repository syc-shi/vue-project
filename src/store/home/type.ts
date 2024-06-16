export interface TableInter {
    date: string;
    name: string;
    address: string;
}

export interface Tree {
    id: string;
    label: string;
    children?: Tree[];
}

export interface HomeState {
    treeId: string,
    tableData: TableInter[],
    treeData: Tree[]
}