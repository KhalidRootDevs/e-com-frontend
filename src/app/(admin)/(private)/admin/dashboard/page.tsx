import BreadCrumb from "@/components/breadcrumb";
import Dashboard from "./_components/Dashboard";

export default function Page() {
  const items = [{ link: "/admin/dashboard", title: "Dashboard" }];

  return (
    <>
      <BreadCrumb items={items} />

      <Dashboard />
    </>
  );
}
