export const routes = {
  home: "/admin",
  adminLogin: "/login",
  admin: {
    dashboard: "/admin",
    notification: {
      home: "/admin/notification",
      create: "/admin/notification/create",
      edit: (id: number | string) => `/admin/notification/update/${id}`
    },
    category: {
      home: "/admin/category",
      create: "/admin/category/create",
      edit: (id: number | string) => `/admin/category/update/${id}`
    },
    ex: {
      home: "/admin/examplefolder/page-crud",
      create: "/admin/examplefolder/page-crud/create",
      edit: (id: number | string) => `/admin/examplefolder/page-crud/update/${id}`
    }
  }
};
