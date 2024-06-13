import { createStore } from "vuex";
import { getTableData, getTreeData } from './getApi';
import type { TableInter, Tree, State } from './type';

export default createStore({
  state: {
    currentNav: "home",
    treeId: "",
    tableData: [],
    treeData: []
  },
  mutations: {
    changeNav(state: State, payload: { currentNav: string }) {
      state.currentNav = payload.currentNav;
    },
    changeTreeId(state: State, payload: { treeId: string }) {
      state.treeId = payload.treeId
    },
    setTableData(state: State, payload: { tableData: TableInter[] }) {
      state.tableData = payload.tableData;
    },
    setTreeData(state: State, payload: { treeData: Tree[] }) {
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
});


