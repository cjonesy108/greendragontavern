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
  magnaCarta,              // 1215
  articlesOfAssociation,  // Oct 1774
  virginiaDeclaration,    // Jun 1776
  declaration,            // Jul 1776
  articlesOfConfederation, // 1781
  constitution,           // 1787
  federalist,             // 1787–88
  billOfRights,           // 1791
  farewell,               // 1796
]

export function getDocument(slug: string): DocumentData | undefined {
  return DOCUMENTS.find((d) => d.slug === slug)
}

export function getAllPassageIds(doc: DocumentData): string[] {
  return doc.sections.flatMap((s) => s.content.filter((seg) => seg.id).map((seg) => seg.id!))
}
