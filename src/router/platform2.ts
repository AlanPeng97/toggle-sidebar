const platform2Router = [
  {
    path: "/platform2/index",
    name: "platform2_index",
    component: () => import("@/views/platform2/index.vue"),
    meta: {
      title: "platform2",
    },
  },
  {
    path: "/platform2_home",
    name: "platform2_home",
    meta: {
      title: "platform2Home",
    },
  },
];

export default platform2Router;
