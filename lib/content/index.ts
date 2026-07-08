import declaration from './declaration'
import constitution from './constitution'
import billOfRights from './bill-of-rights'
import federalist from './federalist'
import farewell from './farewell'
import magnaCarta from './magna-carta'
import virginiaDeclaration from './virginia-declaration'
import articlesOfAssociation from './articles-of-association'
import articlesOfConfederation from './articles-of-confederation'
import type { DocumentData } from '../types'

export const DOCUMENTS: DocumentData[] = [
  magnaCarta,
  virginiaDeclaration,
  articlesOfAssociation,
  articlesOfConfederation,
  declaration,
  constitution,
  billOfRights,
  federalist,
  farewell,
]

export function getDocument(slug: string): DocumentData | undefined {
  return DOCUMENTS.find((d) => d.slug === slug)
}

export function getAllPassageIds(doc: DocumentData): string[] {
  return doc.sections.flatMap((s) => s.content.filter((seg) => seg.id).map((seg) => seg.id!))
}
