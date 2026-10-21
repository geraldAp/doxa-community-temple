/** Permanent identity. Populate only with church-approved wording. */
export const church = {
  name: "Doxa Community Temple",
  welcome: "A place to worship. A community to belong to.",
  introduction:
    "Welcome to Doxa Community Temple in Adamrobe, Oyibi. Get to know our church, spend time in the Word, and join us for worship.",
  mission:
    "Doxa is an evangelical church that exists to proclaim the gospel and develop individuals and families into Christ-centred and wealthy leaders for expanding God’s Kingdom through Bible-based principles, Holy Spirit-empowered ministrations, and deployment of state-of-the-art equipment." as
      | string
      | null,
  vision:
    "A wealthy, Christ Gospel and God’s Kingdom-expanding community." as
      | string
      | null,
  story: null as string | null,
  beliefs: [] as string[],
  objectives: [
    "Bring people to the saving knowledge of Jesus Christ.",
    "Reconcile people to God by : Restoring families, Rebuilding gifted leaders.",
    "Establish wealthy, performance-driven, and service-oriented believers.",
    "Recover stolen positions and possessions.",
    "Build a community that is: \t•\tHeavenly oriented , Earthly relevant and prepared to meet the Lord, whether in death or at the rapture.",
  ] as string[],
  pastors: [] as { name: string; role: string; bio?: string }[],
};
