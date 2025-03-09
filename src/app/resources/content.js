import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sonnya",
  lastName: "Ghandi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>,
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ghandi-dev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sonnya-ghandi-a78142265/",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/6281572536826",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:sonnyaghandi@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      Saya Sonnya Ghandi, seorang Full-Stack Developer,
      <br /> yang bersemangat dalam membangun aplikasi yang scalable dan efisien.
    </>
  ),
};

const about = {
  label: "About",
  title: "Tentang Saya",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Tentang Saya",
    description: (
      <>
        Saya adalah seorang Full-Stack Developer yang berdomisili di Purwakarta-Indonesia, dengan passion dalam membangun solusi teknologi yang scalable dan
        efisien. Fokus utamanya adalah mengembangkan aplikasi berbasis web yang interaktif serta mengintegrasikan teknologi terbaru untuk meningkatkan
        pengalaman pengguna.
      </>
    ),
  },

  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
          <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
          <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Pendidikan",
    institutions: [
      {
        name: "Sekolah Tinggi Teknologi Wastukancana Purwakarta",
        description: <>Teknik Informatika - IPK 3.94</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skill",
    skills: [
      {
        title: "Next.js",
        images: [
          {
            src: "/images/skill/nextjs-icon-svgrepo-com-light.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "MongoDB",
        images: [
          {
            src: "/images/skill/mongo-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "React",
        images: [
          {
            src: "/images/skill/reactjs-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Express",
        images: [
          {
            src: "/images/skill/express-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Node.js",
        images: [
          {
            src: "/images/skill/node-js-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Tailwind",
        images: [
          {
            src: "/images/skill/tailwind-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};
const contact = {
  label: "About",
  title: "Tentang Saya",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Tentang Saya",
    description: (
      <>
        Saya adalah seorang Full-Stack Developer yang berdomisili di Purwakarta-Indonesia, dengan passion dalam membangun solusi teknologi yang scalable dan
        efisien. Fokus utamanya adalah mengembangkan aplikasi berbasis web yang interaktif serta mengintegrasikan teknologi terbaru untuk meningkatkan
        pengalaman pengguna.
      </>
    ),
  },

  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
          <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
          <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Pendidikan",
    institutions: [
      {
        name: "Sekolah Tinggi Teknologi Wastukancana Purwakarta",
        description: <>Teknik Informatika - IPK 3.94</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skill",
    skills: [
      {
        title: "Next.js",
        images: [
          {
            src: "/images/skill/nextjs-icon-svgrepo-com-light.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "MongoDB",
        images: [
          {
            src: "/images/skill/mongo-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "React",
        images: [
          {
            src: "/images/skill/reactjs-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Express",
        images: [
          {
            src: "/images/skill/express-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Node.js",
        images: [
          {
            src: "/images/skill/node-js-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Tailwind",
        images: [
          {
            src: "/images/skill/tailwind-svgrepo-com.svg",
            alt: "Project image",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Dikerjakan dan didesign oleh ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
