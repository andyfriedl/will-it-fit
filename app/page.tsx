import Card from "@/components/Card";
import { homePage } from "@/data/homePage";

export default function Home() {
  return (
    <main>
      <Card className="min-h-64">
        <h1>{homePage.hero.headline}</h1>
        <p>{homePage.hero.body}</p>

        {homePage.contentBlocks.map((block, index) => {
          if (block.type === "richText") {
            return (
            <div  key={index}>
              <h2>{block.title}</h2>
              <div className="feature-copy" dangerouslySetInnerHTML={{ __html: block.html }} />
            </div>
            );
          }

          return null;
        })}
      </Card>

      <Card
        variant="success"
        className="min-h-48 card-action"
        href={homePage.primaryAction.href}
      >
        <div className="card-action__content">
          <p>{homePage.primaryAction.eyebrow}</p>
          <h2>{homePage.primaryAction.headline}</h2>
        </div>

        <span className="card-action__action" aria-hidden="true">
          ➞
        </span>
      </Card>
    </main>
  );
}