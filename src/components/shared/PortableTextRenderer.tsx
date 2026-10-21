import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import { urlFor } from "@/sanity/lib/image";

interface Span {
  _key: string;
  text: string;
  marks?: string[];
}
interface TextBlock {
  _key: string;
  _type: "block";
  style?: string;
  listItem?: string;
  children?: Span[];
  markDefs?: { _key: string; _type: string; href?: string }[];
}
interface ImageBlock {
  _key: string;
  _type: "image";
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
}
type ContentBlock = TextBlock | ImageBlock;

function safeLink(href?: string): string | undefined {
  if (!href) return;
  if (href.startsWith("/") && !href.startsWith("//")) return href;
  if (href.startsWith("#")) return href;
  try {
    const parsed = new URL(href);
    if (["https:", "http:", "mailto:", "tel:"].includes(parsed.protocol))
      return href;
  } catch {
    return;
  }
}

function textContent(block: TextBlock) {
  return block.children?.map((child) => {
    let content: ReactNode = child.text;
    for (const mark of child.marks ?? []) {
      if (mark === "strong") content = <strong>{content}</strong>;
      else if (mark === "em") content = <em>{content}</em>;
      else {
        const href = safeLink(
          block.markDefs?.find(
            (def) => def._key === mark && def._type === "link",
          )?.href,
        );
        if (href)
          content = (
            <a href={href} className="underline underline-offset-4">
              {content}
            </a>
          );
      }
    }
    return <Fragment key={child._key}>{content}</Fragment>;
  });
}

export function PortableTextRenderer({ value }: { value?: unknown[] }) {
  if (!Array.isArray(value)) return null;
  const blocks = value.filter((item): item is ContentBlock =>
    Boolean(
      item &&
      typeof item === "object" &&
      "_type" in item &&
      (item._type === "block" || item._type === "image"),
    ),
  );
  const result: ReactNode[] = [];
  let index = 0;
  while (index < blocks.length) {
    const block = blocks.at(index);
    if (!block) break;
    if (block._type === "image") {
      if (block.asset)
        result.push(
          <figure key={block._key} className="my-8">
            <Image
              src={urlFor(block)}
              alt={block.alt ?? ""}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 780px"
              className="w-full h-auto"
            />
            {block.alt && (
              <figcaption className="text-sm mt-3">{block.alt}</figcaption>
            )}
          </figure>,
        );
      index++;
      continue;
    }
    if (block.listItem) {
      const listType = block.listItem;
      const items: ReactNode[] = [];
      while (index < blocks.length) {
        const item = blocks.at(index);
        if (!item) break;
        if (item._type !== "block" || item.listItem !== listType) break;
        items.push(<li key={item._key}>{textContent(item)}</li>);
        index++;
      }
      result.push(
        listType === "number" ? (
          <ol key={block._key} className="list-decimal pl-6 mb-6 space-y-2">
            {items}
          </ol>
        ) : (
          <ul key={block._key} className="list-disc pl-6 mb-6 space-y-2">
            {items}
          </ul>
        ),
      );
      continue;
    }
    const text = textContent(block);
    switch (block.style) {
      // The article title already owns the page's h1.
      case "h1":
      case "h2":
        result.push(<h2 key={block._key}>{text}</h2>);
        break;
      case "h3":
        result.push(
          <h3 key={block._key} className="text-2xl font-medium mt-8 mb-4">
            {text}
          </h3>,
        );
        break;
      case "h4":
        result.push(
          <h4 key={block._key} className="text-xl font-medium mt-6 mb-3">
            {text}
          </h4>,
        );
        break;
      case "blockquote":
        result.push(
          <blockquote
            key={block._key}
            className="border-l-2 border-primary pl-6 my-6"
          >
            {text}
          </blockquote>,
        );
        break;
      default:
        result.push(
          <p key={block._key} className="mb-6">
            {text}
          </p>,
        );
    }
    index++;
  }
  return <>{result}</>;
}
