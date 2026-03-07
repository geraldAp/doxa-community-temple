import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Block = {
  _key: string;
  _type: "block";
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  children?: Array<{
    _key: string;
    _type: "span";
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: "link";
    href: string;
  }>;
};

type ImageBlock = {
  _key: string;
  _type: "image";
  asset?: any;
  alt?: string;
};

export function PortableTextRenderer({ value }: { value?: unknown[] }) {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return <div className="text-gray-500">No content available.</div>;
  }

  const renderMarks = (text: string, marks: string[] = []) => {
    let output = <>{text}</>;
    marks.forEach((mark) => {
      if (mark === "strong") {
        output = <strong>{output}</strong>;
      }
      if (mark === "em") {
        output = <em>{output}</em>;
      }
    });
    return output;
  };

  const renderChildren = (block: Block) => {
    const linkMap = new Map<string, string>();
    block.markDefs?.forEach((def) => {
      if (def._type === "link") {
        linkMap.set(def._key, def.href);
      }
    });
    return (block.children ?? []).map((child) => {
      const hasLink = (child.marks ?? []).find((m) => linkMap.has(m));
      const content = renderMarks(child.text, child.marks);
      if (hasLink) {
        const href = linkMap.get(hasLink)!;
        return (
          <a key={child._key} href={href} className="text-primary underline">
            {content}
          </a>
        );
      }
      return <span key={child._key}>{content}</span>;
    });
  };

  const renderBlock = (block: Block) => {
    const content = renderChildren(block);
    switch (block.style) {
      case "h1":
        return <h1 className="text-3xl font-bold mb-4">{content}</h1>;
      case "h2":
        return <h2 className="text-2xl font-semibold mb-3">{content}</h2>;
      case "h3":
        return <h3 className="text-xl font-semibold mb-2">{content}</h3>;
      case "h4":
        return <h4 className="text-lg font-semibold mb-2">{content}</h4>;
      case "blockquote":
        return (
          <blockquote className="border-l-4 pl-4 italic text-gray-700 mb-4">
            {content}
          </blockquote>
        );
      default:
        if (block.listItem === "bullet") {
          return <li className="ml-6 list-disc">{content}</li>;
        }
        return <p className="mb-4 leading-relaxed">{content}</p>;
    }
  };

  return (
    <div>
      {value.map((item) => {
        const block = item as any;
        if (block?._type === "image") {
          const img = block as ImageBlock;
          const src = urlFor(img) || "";
          return (
            <figure key={img._key} className="my-6">
              <Image
                src={src}
                alt={img.alt ?? ""}
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full h-auto"
                loading="lazy"
              />
              {img.alt && (
                <figcaption className="text-sm text-gray-500 mt-2">
                  {img.alt}
                </figcaption>
              )}
            </figure>
          );
        }
        if (block?._type === "block") {
          return <div key={block._key}>{renderBlock(block as Block)}</div>;
        }
        return null;
      })}
    </div>
  );
}
