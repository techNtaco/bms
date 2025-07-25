import { client } from "@repo/db/client";


export default async function HomePage() {
  const user = await client.user.findFirst()

  if (!user) {
    return <div>
      <h1>CI/CD Deployment</h1>
      <h2>Trigger the CI/CD</h2>
      <h3>Stranger Things</h3>
      <p>No user found.</p>
    </div>
  }

  return (
    <main>
      <h1>CI/CD Deployment</h1>
      <h2>Trigger the CI/CD</h2>
      <h1>Hello World !!!</h1>
      <h1>First User</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </main>
  )
}
