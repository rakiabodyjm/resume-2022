import techStacks, { techStacksCategorized } from "@data/tech-stacks";

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
  processes,
] = techStacks;

export type Skills = {
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

export type RefinedSkills = {
  Technologies: string[];
  UI_Libraries: string[];
  Frontend_Libraries: string[];
  Backend_Libraries: string[];
  Databases: string[];
  Other_Software: string[];
  Services: string[];
  Process: string[];
  Tools: string[];
  Environments: string[];
};

export function getSkills() {
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

  return skills;
}

export function getRefinedSkills() {
  return {
    Technologies: languages,
    UI_Libraries: uiLibraries,
    Frontend_Libraries: [...dataLib],
    Backend_Libraries: [...orm, ...microServices, ...saas],
    Databases: [...dbms],
    Other_Software: [...otherLibs, ...otherNode],
    Services: [...saas],
    Tools: [...testing, ...tools],
    Process: [...processes],
    Environments: [...webServer, ...environments],

    // Other_
  };
}

/**
 * Technologies
 * UI Libraries
 * Frontend Libraries
 * Backend Libraries
 * Databases
 * Other Libraries
 * Other Software
 * Services
 * Process
 * Tools,
 * Environments
 */
