import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Doxa Content")
    .items([
      S.documentTypeListItem("home").title("Daily Message & Home Photo"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("post").title("Articles"),
      S.documentTypeListItem("galleryAlbum").title("Gallery Albums"),
      S.divider(),
      S.documentTypeListItem("category").title("Article Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("giveSettings").title("Giving Instructions"),
      S.divider(),
      S.listItem()
        .title("Legacy Content — Migration")
        .child(
          S.list()
            .title("Preserved Content")
            .items([
              S.documentTypeListItem("dailyScripture").title(
                "Unused Scripture Entries",
              ),
              S.documentTypeListItem("about").title("Previous About Content"),
              S.documentTypeListItem("galleryPage").title("Previous Gallery"),
              S.documentTypeListItem("faq").title("Previous FAQs"),
            ]),
        ),
    ]);
