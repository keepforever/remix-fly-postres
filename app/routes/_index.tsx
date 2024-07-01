import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-2xl font-bold text-center">
        Hello second deployment!
      </h1>
      <p className="text-center">this commit should be signed</p>
    </div>
  );
}
