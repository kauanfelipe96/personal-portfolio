import { LuBriefcase, LuLayers, LuGraduationCap, LuMail, LuGithub, LuLinkedin } from 'react-icons/lu'

export const WorkIcon = LuBriefcase
export const SkillsIcon = LuLayers
export const EducationIcon = LuGraduationCap
export const ContactIcon = LuMail
export const EmailIcon = LuMail
export const GradCapIcon = LuGraduationCap
export const GithubIcon = LuGithub
export const LinkedinIcon = LuLinkedin

// react-icons não inclui bandeiras de países; mantidas como SVG próprio
export const FlagBR = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="#009b3a" />
    <path d="M12 3 21 12 12 21 3 12Z" fill="#fedf00" />
    <circle cx="12" cy="12" r="4.4" fill="#002776" />
  </svg>
)

export const FlagUS = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <clipPath id="usflag">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
    </defs>
    <g clipPath="url(#usflag)">
      <rect width="24" height="24" fill="#fff" />
      <g fill="#b22234">
        <rect width="24" height="2.4" y="0" />
        <rect width="24" height="2.4" y="4.8" />
        <rect width="24" height="2.4" y="9.6" />
        <rect width="24" height="2.4" y="14.4" />
        <rect width="24" height="2.4" y="19.2" />
      </g>
      <rect width="11" height="12" fill="#3c3b6e" />
    </g>
  </svg>
)
