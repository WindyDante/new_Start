import { Github } from "lucide-react"

export const defaultLanguage: string = "zh"

export const common = {
  domain: "https://blog.1wind.cn",
  meta: {
    favicon: "/avatar.png",
    url: "https://blog.1wind.cn",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/WindyDante",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const zh = {
  ...common,
  siteName: "东风",
  meta: {
    ...common.meta,
    title: "东风",
    slogan: "一位探索者",
    description: "科技",
  },
  navigation: {
    ...common.navigation,
    custom: [],
  },
  pageMeta: {
    archive: {
      title: "归档",
      description: "东风的所有文章",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "朋友們",
      description: "东风的朋友們",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "关于我",
      description: "东风的自我介紹",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "EastWind",
  meta: {
    ...common.meta,
    title: "EastWind",
    slogan: "An Explorer",
    description: "Technology",
  },
  navigation: {
    ...common.navigation,
    custom: [],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are EastWind all posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are EastWind friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is EastWind self-introduction",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
