import { createStore } from "redux";

const initialState = {
  classLists: [
    {
        text: "すべて",
        choiceFlag: true
    },
    {
        text: "初級",
        choiceFlag: false
    },
    {
        text: "中級",
        choiceFlag: false
    },
    {
        text: "上級",
        choiceFlag: false
    },
    {
        text: "フィードバック",
        choiceFlag: false
    },

  ],
  categoryLists : [
    {
        text: "すべて",
        choiceFlag: true
    },
    {
        text: "原画マン",
        choiceFlag: false
    },
    {
        text: "動画マン",
        choiceFlag: false
    },
    {
        text: "CG",
        choiceFlag: false
    },
    {
        text: "色彩",
        choiceFlag: false
    },
    {
        text: "背景",
        choiceFlag: false
    },
    {
        text: "キャラクター",
        choiceFlag: false
    },

]
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
