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
          <h1 className="text-h2">Coming soon!</h1>
          <p>Still in work and will be updated soon...</p>
        </div>
      </section>
    </>
  );
}
