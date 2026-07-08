import type { DocumentData } from '../types'

const virginiaDeclaration: DocumentData = {
  id: 'virginia-declaration',
  slug: 'virginia-declaration',
  title: 'Virginia Declaration of Rights',
  subtitle: 'Drafted by George Mason, 1776',
  dateDescription: 'Adopted June 12, 1776',
  description: 'Written by George Mason and adopted by the Virginia Convention three weeks before the Declaration of Independence, this document was the first American bill of rights — and the direct template for Jefferson\'s opening paragraphs and Madison\'s Bill of Rights.',
  sections: [
    {
      label: 'Section 1 — Inherent Rights',
      content: [
        { text: 'That all men are by nature equally free and independent ', id: 'vdr-s1-equal' },
        { text: 'and have certain inherent rights, of which, when they enter into a state of society, they cannot, by any compact, deprive or divest their posterity;', id: 'vdr-s1-inherent' },
        { text: ' namely, the enjoyment of life and liberty, with the means of acquiring and possessing property, and pursuing and obtaining happiness and safety.', id: 'vdr-s1-happiness' },
      ],
    },
    {
      label: 'Section 2 — Power Derived from the People',
      content: [
        { text: 'That all power is vested in, and consequently derived from, the people;', id: 'vdr-s2-power' },
        { text: ' that magistrates are their trustees and servants, and at all times amenable to them.', id: 'vdr-s2-trustees' },
      ],
    },
    {
      label: 'Section 3 — The Right to Reform or Abolish Government',
      content: [
        { text: 'That government is, or ought to be, instituted for the common benefit, protection, and security of the people, nation, or community;', id: 'vdr-s3-purpose' },
        { text: ' of all the various modes and forms of government, that is best which is capable of producing the greatest degree of happiness and safety and is most effectually secured against the danger of maladministration;', id: 'vdr-s3-best-govt' },
        { text: ' and that, when any government shall be found inadequate or contrary to these purposes, a majority of the community hath an indubitable, inalienable, and indefeasible right to reform, alter, or abolish it, in such manner as shall be judged most conducive to the public weal.', id: 'vdr-s3-abolish' },
      ],
    },
    {
      label: 'Section 4 — Against Hereditary Office',
      content: [
        { text: 'That no man, or set of men, are entitled to exclusive or separate emoluments or privileges from the community, but in consideration of public services;', id: 'vdr-s4-emoluments' },
        { text: ' which, not being descendible, neither ought the offices of magistrate, legislator, or judge to be hereditary.', id: 'vdr-s4-hereditary' },
      ],
    },
    {
      label: 'Section 5 — Separation of Powers',
      content: [
        { text: 'That the legislative and executive powers of the state should be separate and distinct from the judiciary;', id: 'vdr-s5-separation' },
        { text: ' and that the members of the two first may be restrained from oppression, by feeling and participating the burthens of the people, they should, at fixed periods, be reduced to a private station, return into that body from which they were originally taken, and the vacancies be supplied by frequent, certain, and regular elections,', id: 'vdr-s5-elections' },
        { text: ' in which all, or any part of the former members, to be again eligible, or ineligible, as the laws shall direct.', id: 'vdr-s5-eligibility' },
      ],
    },
    {
      label: 'Section 6 — Elections and Suffrage',
      content: [
        { text: 'That elections of members to serve as representatives of the people, in assembly, ought to be free;', id: 'vdr-s6-free-elections' },
        { text: ' and that all men, having sufficient evidence of permanent common interest with, and attachment to, the community, have the right of suffrage,', id: 'vdr-s6-suffrage' },
        { text: ' and cannot be taxed or deprived of their property for public uses, without their own consent, or that of their representatives so elected, nor bound by any law to which they have not, in like manner, assented, for the public good.', id: 'vdr-s6-taxation' },
      ],
    },
    {
      label: 'Section 7 — Suspension of Laws',
      content: [
        { text: 'That all power of suspending laws, or the execution of laws, by any authority, without consent of the representatives of the people, is injurious to their rights, and ought not to be exercised.', id: 'vdr-s7-suspension' },
      ],
    },
    {
      label: 'Section 8 — Criminal Proceedings and Due Process',
      content: [
        { text: 'That in all capital or criminal prosecutions a man hath a right to demand the cause and nature of his accusation,', id: 'vdr-s8-accusation' },
        { text: ' to be confronted with the accusers and witnesses, to call for evidence in his favor, and to a speedy trial by an impartial jury of twelve men of his vicinage,', id: 'vdr-s8-jury' },
        { text: ' without whose unanimous consent he cannot be found guilty;', id: 'vdr-s8-unanimous' },
        { text: ' nor can he be compelled to give evidence against himself;', id: 'vdr-s8-self-incrimination' },
        { text: ' that no man be deprived of his liberty, except by the law of the land or the judgment of his peers.', id: 'vdr-s8-liberty' },
      ],
    },
    {
      label: 'Section 9 — Against Excessive Bail and Cruel Punishment',
      content: [
        { text: 'That excessive bail ought not to be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.', id: 'vdr-s9-cruel' },
      ],
    },
    {
      label: 'Section 10 — Against General Warrants',
      content: [
        { text: 'That general warrants, whereby an officer or messenger may be commanded to search suspected places without evidence of a fact committed,', id: 'vdr-s10-warrants' },
        { text: ' or to seize any person or persons not named, or whose offense is not particularly described and supported by evidence, are grievous and oppressive, and ought not to be granted.', id: 'vdr-s10-seizure' },
      ],
    },
    {
      label: 'Section 11 — Right to Jury in Civil Cases',
      content: [
        { text: 'That in controversies respecting property, and in suits between man and man, the ancient trial by jury is preferable to any other, and ought to be held sacred.', id: 'vdr-s11-civil-jury' },
      ],
    },
    {
      label: 'Section 12 — Freedom of the Press',
      content: [
        { text: 'That the freedom of the press is one of the great bulwarks of liberty, and can never be restrained but by despotic governments.', id: 'vdr-s12-press' },
      ],
    },
    {
      label: 'Section 13 — Militia and Standing Armies',
      content: [
        { text: 'That a well-regulated militia, composed of the body of the people, trained to arms, is the proper, natural, and safe defense of a free state;', id: 'vdr-s13-militia' },
        { text: ' that standing armies, in time of peace, should be avoided as dangerous to liberty;', id: 'vdr-s13-standing-armies' },
        { text: ' and that in all cases the military should be under strict subordination to, and governed by, the civil power.', id: 'vdr-s13-civil-power' },
      ],
    },
    {
      label: 'Section 14 — Uniform Government',
      content: [
        { text: 'That the people have a right to uniform government; and, therefore, that no government separate from, or independent of the government of Virginia, ought to be erected or established within the limits thereof.', id: 'vdr-s14-uniform' },
      ],
    },
    {
      label: 'Section 15 — Free Government and Virtue',
      content: [
        { text: 'That no free government, or the blessings of liberty, can be preserved to any people, but by a firm adherence to justice, moderation, temperance, frugality, and virtue,', id: 'vdr-s15-virtue' },
        { text: ' and by frequent recurrence to fundamental principles.', id: 'vdr-s15-principles' },
      ],
    },
    {
      label: 'Section 16 — Religion and Conscience',
      content: [
        { text: 'That religion, or the duty which we owe to our Creator, and the manner of discharging it, can be directed only by reason and conviction, not by force or violence;', id: 'vdr-s16-religion' },
        { text: ' and therefore all men are equally entitled to the free exercise of religion, according to the dictates of conscience;', id: 'vdr-s16-free-exercise' },
        { text: ' and that it is the mutual duty of all to practice Christian forbearance, love, and charity toward each other.', id: 'vdr-s16-charity' },
      ],
    },
  ],
}

export default virginiaDeclaration
