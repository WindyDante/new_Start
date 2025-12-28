import { OGImageRoute } from "astro-og-canvas"
import { defaultLanguage } from "~/config"
import { getPostsByLocale } from "~/utils"

const posts = await getPostsByLocale(defaultLanguage)

// @ts-ignore
const pages = Object.fromEntries(posts.map(({ id, data }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getImageOptions: async (_, { data }: (typeof pages)[string]) => {
    return {
      title: data.title,
      description: data.description,
      bgGradient: [
        [6, 38, 45],
        [8, 3, 2],
      ],
      logo: {
        path: new URL("../../../public/avatar.jpg", import.meta.url),
        size: [100],
      },
      fonts: [
        new URL("../../../public/fonts/hwmc.otf", import.meta.url),
      ],
    }
  },
})
