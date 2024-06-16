import { getTableData, getTreeData } from './getApi';
import type { TableInter, Tree, HomeState } from './type';
import type { Module } from 'vuex';
import type { State } from '../index';


const moduleHome: Module<HomeState, State> = {
    state: {
        treeId: "",
        tableData: [],
        treeData: []
    },
    mutations: {
        changeTreeId(state: HomeState, payload: { treeId: string }) {
            state.treeId = payload.treeId
        },
        setTableData(state: HomeState, payload: { tableData: TableInter[] }) {
            state.tableData = payload.tableData;
        },
        setTreeData(state: HomeState, payload: { treeData: Tree[] }) {
            state.treeData = payload.treeData;
        },
    },
    actions: {
        async actionGetTableData({ commit }, payload = {}) {
            let res = await getTableData(payload.treeId);
            commit('setTableData', { tableData: res.data.tableData })
        },
        async actionGetTreeData({ commit }) {
            let res = await getTreeData();
            commit('setTreeData', { treeData: res.data.treeData })
        }
    }
}

export default moduleHome;