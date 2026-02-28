import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@aac/ui";

export default function DashboardPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Your application dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Get started by customizing this page.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
