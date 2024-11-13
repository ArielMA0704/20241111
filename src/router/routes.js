const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/login.vue") },
      {
        path: "scene",
        component: () => import("pages/scene.vue"),
      },

      {
        path: "project/ADHealthEducation",
        component: () => import("pages/ADHealthEducationPage.vue"),
      },
      {
        path: "project/:sceneType",
        component: () => import("pages/project.vue"),
      },
      // {
      //   path: "task/Surgeon/:projectId",
      //   component: () => import("pages/surgeon.vue"),
      // },
      // {
      //   path: "task/Custom/:projectId",
      //   component: () => import("pages/CustomPage.vue"),
      // },
      {
        path: "task/:sceneType/:projectId",
        component: () => import("pages/IndexPage.vue"),
      },
      { path: "login/:id_token", component: () => import("pages/login.vue") },
      // {
      //   path: "intraApp",
      //   component: () => import("pages/intra_app.vue"),
      // },
      {
        path: "promptManagement",
        component: () => import("pages/promptManagement.vue"),
      },
      {
        path: "knowledgeManagement",
        component: () => import("pages/KnowledgeManagement.vue"),
      },
      {
        path: "ManagementSystem",
        component: () => import("pages/ManagementSystem.vue"),
      },
      {
        path: "/components/login",
        name: "login",
        component: () => import("components/Login.vue"),
      },
      { path: "service", component: () => import("../components/Service.vue") },
      {
        path: "about",
        name: "about",
        component: () => import("../components/AboutView.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../components/ContactView.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
