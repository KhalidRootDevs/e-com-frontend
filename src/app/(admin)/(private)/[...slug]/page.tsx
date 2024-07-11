import Link from "next/link";

interface Props {
  params: {
    slug: string[];
  };
}

export default function NotFoundPage({ params }: Props) {
  console.log("Slug", params.slug);

  return (
    <div>
      <div>The {params.slug.join("/")} is not found</div>
      <p>Go back to Dashboard</p>
      <Link href="/admin/dashboard">Dashboard</Link>
    </div>
  );
}
