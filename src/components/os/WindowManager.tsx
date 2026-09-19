"use client";

import React from "react";
import { useOS } from "@/context/OSContext";
import { Window } from "./Window";

// Import apps lazily or directly
import { AboutApp } from "../apps/AboutApp";
import { ProjectsApp } from "../apps/ProjectsApp";
import { SkillsApp } from "../apps/SkillsApp";
import { AchievementsApp } from "../apps/AchievementsApp";
import { EducationApp } from "../apps/EducationApp";
import { ContactApp } from "../apps/ContactApp";

export const WindowManager = () => {
  const { windows } = useOS();

  return (
    <>
      <Window id="about" title="About.app" defaultWidth={800} defaultHeight={550}>
        <AboutApp />
      </Window>
      <Window id="projects" title="Projects.app" defaultWidth={900} defaultHeight={650}>
        <ProjectsApp />
      </Window>
      <Window id="skills" title="Skills.app" defaultWidth={800} defaultHeight={600}>
        <SkillsApp />
      </Window>
      <Window id="achievements" title="Achievements.app" defaultWidth={750} defaultHeight={500}>
        <AchievementsApp />
      </Window>
      <Window id="education" title="Education.app" defaultWidth={700} defaultHeight={500}>
        <EducationApp />
      </Window>
      <Window id="contact" title="Contact.app" defaultWidth={600} defaultHeight={500}>
        <ContactApp />
      </Window>
    </>
  );
};
