import axios from "axios";
//获取table数据
export async function getTableData(treeId: string = "") {
    return await axios.get("/getTableData", { params: { treeId } });
}
//获取左边树数据
export async function getTreeData() {
    return await axios.get("/getTreeData");
}
