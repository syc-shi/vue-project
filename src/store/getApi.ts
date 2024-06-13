import axios from "axios";
export async function getTableData(treeId: string = "") {
    return await axios.get("/getTableData", { params: { treeId } });
}


export async function getTreeData() {
    return await axios.get("/getTreeData");
}
