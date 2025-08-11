import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import CodeBlock from './mdx/CodeBlock'
import { Tabs, TabPanel } from './mdx/Tabs'
import Lucidchart from './mdx/Lucidchart'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  CodeBlock,
  Tabs,
  TabPanel,
  Lucidchart,
}
