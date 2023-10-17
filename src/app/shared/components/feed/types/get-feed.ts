import { ArticleInterface } from "src/app/shared/type/article-interface"

export interface GetFeedResponseInterface {
  articles:ArticleInterface[]
  articlesCount: number
}
