import { createStore, Store, useStore as baseUseStore } from "vuex";
import moduleHome from './home';
import type { HomeState } from "./home/type";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { markRaw } from "vue";
import type { InjectionKey } from 'vue';



type NavObj = {
  title: string,
  id: string,
  icon: any
}

export interface State {
  currentNav: string,
  navData: NavObj[]
}

interface StateAll extends State {
  home: HomeState
}

export const key: InjectionKey<Store<StateAll>> = Symbol()


export const store: Store<State> = createStore({
  state: {
    currentNav: "home",
    navData: [
      { title: "demo1", id: "1", icon: markRaw(Document) },
      { title: "demo2", id: "2", icon: markRaw(IconMenu) }
    ]
  },
  mutations: {
    changeNav(state: State, payload: { currentNav: string }) {
      state.currentNav = payload.currentNav;
    },
  },
  modules: {
    home: moduleHome
  }
});

export function useStore() {
  return baseUseStore(key)
}

