import declaration from './declaration'
import constitution from './constitution'
import billOfRights from './bill-of-rights'
import type { DocumentData } from '../types'

export const DOCUMENTS: DocumentData[] = [declaration, constitution, billOfRights]

export function getDocument(slug: string): DocumentData | undefined {
  return DOCUMENTS.find((d) => d.slug === slug)
}

export function getAllPassageIds(doc: DocumentData): string[] {
  return doc.sections.flatMap((s) => s.content.filter((seg) => seg.id).map((seg) => seg.id!))
}
