import { CalcAction, CalcActionTypes, CalcState } from "../../types/calc";

const initialState: CalcState = {
  tips: [],
  step: 1,
  calcTopmenu: [],
  calcBottommenu: [],
  posts: [
    {
      id: 1,
      check: true,
      caption: "1 пост",
      img: "1-post.png",
      img_left: "1-post-console-left.png",
      img_right: "1-post-console-right.png",
      img_all: "1-post-console-left-right.png",
      price: 150000,
    },
    {
      id: 2,
      check: false,
      caption: "2 поста",
      img: "2-post.png",
      img_left: "2-post-console-left.png",
      img_right: "2-post-console-right.png",
      img_all: "2-post-console-left-right.png",
      price: 300000,
    },
    {
      id: 3,
      check: false,
      caption: "3 поста",
      img: "3-post.png",
      img_left: "3-post-console-left.png",
      img_right: "3-post-console-right.png",
      img_all: "3-post-console-left-right.png",
      price: 450000,
    },
    {
      id: 4,
      check: false,
      caption: "4 поста",
      img: "4-post.png",
      img_left: "4-post-console-left.png",
      img_right: "4-post-console-right.png",
      img_all: "4-post-console-left-right.png",
      price: 600000,
    },
    {
      id: 5,
      check: false,
      caption: "5 постов",
      img: "5-post.png",
      img_left: "5-post-console-left.png",
      img_right: "5-post-console-right.png",
      img_all: "5-post-console-left-right.png",
      price: 750000,
    },
    {
      id: 6,
      check: false,
      caption: "6 постов",
      img: "6-post.png",
      img_left: "6-post-console-left.png",
      img_right: "6-post-console-right.png",
      img_all: "6-post-console-left-right.png",
      price: 900000,
    },
    {
      id: 7,
      check: false,
      caption: "7 постов",
      img: "7-post.png",
      img_left: "7-post-console-left.png",
      img_right: "7-post-console-right.png",
      img_all: "7-post-console-left-right.png",
      price: 1050000,
    },
    {
      id: 8,
      check: false,
      caption: "8 постов",
      img: "8-post.png",
      img_left: "8-post-console-left.png",
      img_right: "8-post-console-right.png",
      img_all: "8-post-console-left-right.png",
      price: 1200000,
    },
  ],
  consolePosts: [
    {
      id: 1,
      check: false,
      caption: "Консольный пост левый",
      price: 1500,
    },
    {
      id: 2,
      check: false,
      caption: "Консольный пост правый",
      price: 1500,
    },
  ],
  checkedButtons: [],
  steps: {
    step2: {
      pultsCount: 0,
      help: [
        {id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, id. Suscipit, vel repudiandae neque aliquam adipisci", imageSrc: ""},
        {id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, id. Suscipit, vel repudiandae neque aliquam adipisci", imageSrc: ""},
        {id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, id. Suscipit, vel repudiandae neque aliquam adipisci", imageSrc: ""},
      ],
      items: [
        {
          id: 1,
          title: "Стандарт",
          pults_count: {
            count: 0,
            price: 1200,
          },
          rows: [
            [
              {
                id: 1,
                check: false,
                caption: "PayPass",
                price: 0,
                products: [],
              },
              {
                id: 2,
                check: false,
                caption: "Купюро-\nприемник",
                price: 0,
                products: [],
              },
              {
                id: 3,
                check: false,
                caption: "Монето-\nприемник",
                price: 0,
                products: [],
              },
            ],
            [
              {
                id: 4,
                check: false,
                caption: "Поворотные консоли",
                price: 0,
                products: [],
              },
              {
                id: 5,
                check: false,
                caption: "Пистолеты",
                price: 0,
                products: [],
              },
              {
                id: 6,
                check: false,
                caption: "Держатель для ковриков",
                price: 0,
                products: [],
              },
            ],
          ],
          total_price: 0,
        },
        {
          id: 2,
          title: "Премиум",
          pults_count: {
            count: 0,
            price: 1200,
          },
          rows: [
            [
              {
                id: 7,
                check: false,
                caption: "PayPass",
                price: 0,
                products: [],
              },
              {
                id: 8,
                check: false,
                caption: "Купюро-\nприемник",
                price: 0,
                products: [],
              },
              {
                id: 9,
                check: false,
                caption: "Монето-\nприемник",
                price: 0,
                products: [],
              },
            ],
            [
              {
                id: 10,
                check: false,
                caption: "Поворотные консоли",
                price: 0,
                products: [],
              },
              {
                id: 11,
                check: false,
                caption: "Пистолеты",
                price: 0,
                products: [],
              },
              {
                id: 12,
                check: false,
                caption: "Держатель для ковриков",
                price: 0,
                products: [],
              },
            ],
          ],
          total_price: 0,
        },
        {
          id: 3,
          title: "Люкс",
          pults_count: {
            count: 0,
            price: 1200,
          },
          rows: [
            [
              {
                id: 13,
                check: false,
                caption: "PayPass",
                price: 0,
                products: [],
              },
              {
                id: 14,
                check: false,
                caption: "Купюро-\nприемник",
                price: 0,
                products: [],
              },
              {
                id: 15,
                check: false,
                caption: "Монето-\nприемник",
                price: 0,
                products: [],
              },
            ],
            [
              {
                id: 16,
                check: false,
                caption: "Поворотные консоли",
                price: 0,
                products: [],
              },
              {
                id: 17,
                check: false,
                caption: "Пистолеты",
                price: 0,
                products: [],
              },
              {
                id: 18,
                check: false,
                caption: "Держатель для ковриков",
                price: 0,
                products: [],
              },
            ],
          ],
          total_price: 0,
        },
      ],
    },
  },
  totalSum: 0,
  render: {},
};

export function checkButton(state: any, id: number) {
  state.steps.step2.items.forEach((el: any) => {
    for (let value in el["rows"]) {
      for (let v in el["rows"][value]) {
        const item = el["rows"][value][v];
        if (item.id === id) {
          if (item.check) {
            item.check = false;
          } else {
            item.check = true;
          }
        }
      }
    }
  });
}

export const calcReducer = (state = initialState, action: CalcAction): CalcState => {
  switch (action.type) {
    case CalcActionTypes.SET_BOTTOM_MENU_STEP:
      return { ...state, step: action.payload };
    case CalcActionTypes.CHECK_POST_NUMBER:
      const newPosts = [...state.posts];
      newPosts.forEach((el) => {
        if (el.check) el.check = false;
        return el;
      });
      newPosts[action.payload].check = true;
      return { ...state, posts: newPosts };
    case CalcActionTypes.CHECK_CONSOLE_POST:
      const newCheckPosts = [...state.consolePosts];
      newCheckPosts.forEach((el) => {
        if (el.id === 9 && !el.check) el.check = true;
        if (el.id === 10 && !el.check) el.check = true;
        if (el.id === 9 && el.check) el.check = false;
        if (el.id === 10 && el.check) el.check = false;
        return el;
      });
      if (newCheckPosts[action.payload].check) {
        newCheckPosts[action.payload].check = false;
      } else {
        newCheckPosts[action.payload].check = true;
      }
      return { ...state, consolePosts: newCheckPosts };
    case CalcActionTypes.CHECK_CALC_BUTTON:
      checkButton(state, action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};
