import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen min-w-full flex-col items-center container">
        <Header />
        <div>main page</div>
      </main>
    </div>
  );
}
