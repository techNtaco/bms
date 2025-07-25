import { client } from "@repo/db/client";

export default async function HomePage() {
  const user = await client.user.findFirst();

  if (!user) {
    return <div>No user found.</div>;
  }

  return (
    <main>
      <h1>CI/CD Deployment</h1>
      <h1>Hello World !!!</h1>
      <h1>First User</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </main>
  );
}
