"use client";

import { useCategoryGetAllApiQuery } from "@/features/admin/category/categoryApi";

export default function Dashboard() {
  const { isLoading, data: categoryData } = useCategoryGetAllApiQuery({});

  if (isLoading) return <div>Loading...</div>;

  console.log("Category", categoryData);

  return <div>Dashboard</div>;
}
