import SeoMeta from "@/partials/SeoMeta";

export const metadata = {
  title: "My Portfolio Page",
  description: "Custom description",
};

export default function Portfolio() {
  return (
    <>
      <SeoMeta title="My Custom Page" />
      <section className="section">
        <div className="container">
          <h1 className="text-h2">My Portfolio Page</h1>
          <p>Custom React code goes here.</p>
        </div>
      </section>
    </>
  );
}
