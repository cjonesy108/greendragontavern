import type { DocumentData } from '../types'

const billOfRights: DocumentData = {
  id: 'bill-of-rights',
  slug: 'bill-of-rights',
  title: 'The Bill of Rights',
  subtitle: 'Amendments I–X to the Constitution',
  dateDescription: 'Ratified December 15, 1791',
  description: 'The first ten amendments to the Constitution, guaranteeing fundamental rights and liberties.',
  sections: [
    {
      label: 'Amendment I — Religion, Speech, Press, Assembly',
      content: [
        { text: 'Congress shall make no law ' },
        { text: 'respecting an establishment of religion, or prohibiting the free exercise thereof;', id: 'bor-a1-religion' },
        { text: ' or ' },
        { text: 'abridging the freedom of speech, or of the press;', id: 'bor-a1-speech' },
        { text: ' or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.', id: 'bor-a1-assembly' },
      ],
    },
    {
      label: 'Amendment II — Right to Bear Arms',
      content: [
        { text: 'A well regulated Militia, being necessary to the security of a free State, ', id: 'bor-a2-militia' },
        { text: 'the right of the people to keep and bear Arms, shall not be infringed.', id: 'bor-a2-arms' },
      ],
    },
    {
      label: 'Amendment III — Quartering of Soldiers',
      content: [
        { text: 'No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.', id: 'bor-a3' },
      ],
    },
    {
      label: 'Amendment IV — Search and Seizure',
      content: [
        { text: 'The right of the people to be secure in their persons, houses, papers, and effects, ', id: 'bor-a4-secure' },
        { text: 'against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.', id: 'bor-a4-warrants' },
      ],
    },
    {
      label: 'Amendment V — Grand Jury, Double Jeopardy, Self-Incrimination',
      content: [
        { text: 'No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger;', id: 'bor-a5-grand-jury' },
        { text: ' nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb;', id: 'bor-a5-double-jeopardy' },
        { text: ' nor shall be compelled in any criminal case to be a witness against himself,', id: 'bor-a5-self-incrimination' },
        { text: ' nor be deprived of life, liberty, or property, without due process of law;', id: 'bor-a5-due-process' },
        { text: ' nor shall private property be taken for public use, without just compensation.', id: 'bor-a5-takings' },
      ],
    },
    {
      label: 'Amendment VI — Right to Speedy Trial',
      content: [
        { text: 'In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed,', id: 'bor-a6-speedy' },
        { text: ' which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him;', id: 'bor-a6-confrontation' },
        { text: ' to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.', id: 'bor-a6-counsel' },
      ],
    },
    {
      label: 'Amendment VII — Civil Jury Trial',
      content: [
        { text: 'In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.', id: 'bor-a7' },
      ],
    },
    {
      label: 'Amendment VIII — Cruel and Unusual Punishment',
      content: [
        { text: 'Excessive bail shall not be required, nor excessive fines imposed, ', id: 'bor-a8-bail' },
        { text: 'nor cruel and unusual punishments inflicted.', id: 'bor-a8-cruel' },
      ],
    },
    {
      label: 'Amendment IX — Unenumerated Rights',
      content: [
        { text: 'The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.', id: 'bor-a9' },
      ],
    },
    {
      label: 'Amendment X — Reserved Powers',
      content: [
        { text: 'The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.', id: 'bor-a10' },
      ],
    },
  ],
}

export default billOfRights
