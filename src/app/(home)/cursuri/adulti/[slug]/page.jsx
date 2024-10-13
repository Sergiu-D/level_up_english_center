import navMessages from "@/components/Navigation/messages.json";
// Utils
import getFilteredPaths from "@/utils/getFilteredPaths"

export async function generateStaticParams() {
  // Map trough the used paths to find the dynamic routs and return an array of paths to be used as params
  // This way the page wil be static generated
  const navSlugs = getFilteredPaths(navMessages, "adulti");
  const slugs = navSlugs;

  // Return all possible slugs to generate static pages
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `Page for ${slug}`,
    description: `This is a description for ${slug}`,
  };
}

export default function Page({ params }) {  
  return <div>Curs adulti: {params.slug}</div>;
}
