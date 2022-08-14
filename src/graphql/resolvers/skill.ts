import techStacks from "@data/tech-stacks";

const [
  languages,
  orm,
  uiLibraries,
  dataLib,
  microServices,
  saas,
  dbms,
  auth,
  testing,
  otherNode,
  tools,
  environments,
  webServer,
  otherLibs,
] = techStacks;

type Skills = {
  languages: typeof languages;
  orm: typeof orm;
  uiLibraries: typeof uiLibraries;
  dataLib: typeof dataLib;
  microServices: typeof microServices;
  saas: typeof saas;
  dbms: typeof dbms;
  auth: typeof auth;
  testing: typeof testing;
  otherNode: typeof otherNode;
  tools: typeof tools;
  environments: typeof environments;
  webServer: typeof webServer;
  otherLibs: typeof otherLibs;
};

export function getSkills(parent, args, context, info) {
  const skills: Skills = {
    languages,
    orm,
    uiLibraries,
    dataLib,
    microServices,
    saas,
    dbms,
    auth,
    testing,
    otherNode,
    tools,
    environments,
    webServer,
    otherLibs,
  };

  console.log("args.key", info);

  if (args.key) {
    return skills[args.key];
  }
  return skills;
}
