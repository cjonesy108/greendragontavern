import type { DocumentData } from '../types'

const federalist: DocumentData = {
  id: 'federalist',
  slug: 'federalist',
  title: 'The Federalist Papers',
  subtitle: 'Selected Essays — Publius (Hamilton, Madison & Jay)',
  dateDescription: '1787–1788',
  description: 'The essential arguments for ratifying the Constitution, written under the pseudonym Publius. Five key essays on faction, separation of powers, judicial review, and liberty.',
  sections: [
    // ── FEDERALIST NO. 1 ──────────────────────────────────────────
    {
      label: 'No. 1 · Hamilton · Introduction',
      content: [
        { text: 'After an unequivocal experience of the inefficiency of the subsisting Federal Government, you are called upon to deliberate on a new Constitution for the United States of America. ' },
        { text: 'It has been frequently remarked that it seems to have been reserved to the people of this country, by their conduct and example, to decide the important question, whether societies of men are really capable or not of establishing good government from reflection and choice, or whether they are forever destined to depend for their political constitutions on accident and force.', id: 'fed1-reflection-choice' },
        { text: ' If there be any truth in the remark, the crisis at which we are arrived may with propriety be regarded as the era in which that decision is to be made; and a wrong election of the part we shall act may, in this view, deserve to be considered as the general misfortune of mankind.' },
      ],
    },
    {
      label: 'No. 1 · On ambition masking itself',
      content: [
        { text: 'Among the most formidable of the obstacles which the new Constitution will have to encounter may readily be distinguished the obvious interest of a certain class of men in every State to resist all changes which may hazard a diminution of the power, emolument, and consequence of the offices they hold under the State establishments. ' },
        { text: 'A dangerous ambition more often lurks behind the specious mask of zeal for the rights of the people than under the forbidding appearance of zeal for the firmness and efficiency of government.', id: 'fed1-dangerous-ambition' },
        { text: ' History will teach us that the former has been found a much more certain road to the introduction of despotism than the latter, and that of those men who have overturned the liberties of republics, the greatest number have begun their career by paying an obsequious court to the people; commencing demagogues, and ending tyrants.' },
      ],
    },

    // ── FEDERALIST NO. 10 ─────────────────────────────────────────
    {
      label: 'No. 10 · Madison · On Faction',
      content: [
        { text: 'Among the numerous advantages promised by a well constructed Union, none deserves to be more accurately developed than its tendency to break and control the violence of faction. ' },
        { text: 'By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adversed to the rights of other citizens, or to the permanent and aggregate interests of the community.', id: 'fed10-faction-definition' },
      ],
    },
    {
      label: 'No. 10 · The causes of faction',
      content: [
        { text: 'The latent causes of faction are thus sown in the nature of man; and we see them every where brought into different degrees of activity, according to the different circumstances of civil society. ', id: 'fed10-latent-causes' },
        { text: 'A zeal for different opinions concerning religion, concerning Government and many other points, as well of speculation as of practice; an attachment to different leaders ambitiously contending for pre-eminence and power; or to persons of other descriptions whose fortunes have been interesting to the human passions, have in turn divided mankind into parties, inflamed them with mutual animosity, and rendered them much more disposed to vex and oppress each other than to cooperate for their common good.' },
        { text: ' So strong is this propensity of mankind to fall into mutual animosities, that where no substantial occasion presents itself, the most frivolous and fanciful distinctions have been sufficient to kindle their unfriendly passions, and excite their most violent conflicts.', id: 'fed10-frivolous-distinctions' },
      ],
    },
    {
      label: 'No. 10 · Republic vs. Democracy',
      content: [
        { text: 'The two great points of difference between a Democracy and a Republic are, first, the delegation of the Government, in the latter, to a small number of citizens elected by the rest: secondly, the greater number of citizens, and greater sphere of country, over which the latter may be extended.', id: 'fed10-republic-vs-democracy' },
        { text: ' The effect of the first difference is, on the one hand to refine and enlarge the public views, by passing them through the medium of a chosen body of citizens, whose wisdom may best discern the true interest of their country, and whose patriotism and love of justice, will be least likely to sacrifice it to temporary or partial considerations.' },
      ],
    },
    {
      label: 'No. 10 · Extended republic as cure',
      content: [
        { text: 'The influence of factious leaders may kindle a flame within their particular States, but will be unable to spread a general conflagration through the other States. ', id: 'fed10-conflagration' },
        { text: 'A religious sect, may degenerate into a political faction in a part of the Confederacy; but the variety of sects dispersed over the entire face of it, must secure the national Councils against any danger from that source. ' },
        { text: 'In the extent and proper structure of the Union, therefore, we behold a Republican remedy for the diseases most incident to Republican Government.', id: 'fed10-republican-remedy' },
      ],
    },

    // ── FEDERALIST NO. 51 ─────────────────────────────────────────
    {
      label: 'No. 51 · Madison · Checks & Balances',
      content: [
        { text: 'To what expedient then shall we finally resort for maintaining in practice the necessary partition of power among the several departments, as laid down in the constitution? ' },
        { text: 'The only answer that can be given is, that as all these exterior provisions are found to be inadequate, the defect must be supplied, by so contriving the interior structure of the government, as that its several constituent parts may, by their mutual relations, be the means of keeping each other in their proper places.', id: 'fed51-interior-structure' },
      ],
    },
    {
      label: 'No. 51 · Ambition counteracting ambition',
      content: [
        { text: 'It may be a reflection on human nature, that such devices should be necessary to controul the abuses of government. But what is government itself but the greatest of all reflections on human nature? ' },
        { text: 'If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controuls on government would be necessary.', id: 'fed51-angels' },
        { text: ' In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to govern the governed; and in the next place, oblige it to controul itself.', id: 'fed51-great-difficulty' },
        { text: ' Ambition must be made to counteract ambition. The interest of the man must be connected with the constitutional rights of the place.', id: 'fed51-ambition' },
      ],
    },
    {
      label: 'No. 51 · Justice is the end of government',
      content: [
        { text: 'Justice is the end of government. It is the end of civil society. ', id: 'fed51-justice' },
        { text: 'It ever has been, and ever will be pursued, until it be obtained, or until liberty be lost in the pursuit. In a society under the forms of which the stronger faction can readily unite and oppress the weaker, anarchy may as truly be said to reign, as in a state of nature where the weaker individual is not secured against the violence of the stronger.' },
      ],
    },

    // ── FEDERALIST NO. 78 ─────────────────────────────────────────
    {
      label: 'No. 78 · Hamilton · The Judiciary',
      content: [
        { text: 'Whoever attentively considers the different departments of power must perceive, that in a government in which they are separated from each other, ' },
        { text: 'the judiciary, from the nature of its functions, will always be the least dangerous to the political rights of the constitution; because it will be least in a capacity to annoy or injure them.', id: 'fed78-least-dangerous' },
        { text: ' The executive not only dispenses the honors, but holds the sword of the community. The legislature not only commands the purse, but prescribes the rules by which the duties and rights of every citizen are to be regulated. The judiciary on the contrary has no influence over either the sword or the purse, no direction either of the strength or of the wealth of the society, and can take no active resolution whatever. It may truly be said to have neither Force nor Will, but merely judgment.' },
      ],
    },
    {
      label: 'No. 78 · Judicial review',
      content: [
        { text: 'The interpretation of the laws is the proper and peculiar province of the courts. ', id: 'fed78-interpretation' },
        { text: 'A constitution is in fact, and must be, regarded by the judges as a fundamental law. It therefore belongs to them to ascertain its meaning as well as the meaning of any particular act proceeding from the legislative body. If there should happen to be an irreconcilable variance between the two, that which has the superior obligation and validity ought of course to be preferred; or in other words, the constitution ought to be preferred to the statute, the intention of the people to the intention of their agents.', id: 'fed78-judicial-review' },
      ],
    },
    {
      label: 'No. 78 · Good behaviour & judicial independence',
      content: [
        { text: 'The standard of good behaviour for the continuance in office of the judicial magistracy is certainly one of the most valuable of the modern improvements in the practice of government. ', id: 'fed78-good-behaviour' },
        { text: 'In a monarchy it is an excellent barrier to the despotism of the prince: In a republic it is a no less excellent barrier to the encroachments and oppressions of the representative body. And it is the best expedient which can be devised in any government, to secure a steady, upright and impartial administration of the laws.' },
        { text: ' That inflexible and uniform adherence to the rights of the constitution and of individuals, which we perceive to be indispensable in the courts of justice, can certainly not be expected from judges who hold their offices by a temporary commission.', id: 'fed78-inflexible-adherence' },
      ],
    },

    // ── FEDERALIST NO. 84 ─────────────────────────────────────────
    {
      label: 'No. 84 · Hamilton · Against a Bill of Rights',
      content: [
        { text: 'It has been several times truly remarked, that bills of rights are in their origin, stipulations between kings and their subjects, abridgments of prerogative in favor of privilege, reservations of rights not surrendered to the prince. ', id: 'fed84-bills-of-rights-origin' },
        { text: 'Such was Magna Charta, obtained by the Barons, sword in hand, from King John. Such were the subsequent confirmations of that charter by subsequent princes. Such was the petition of right assented to by Charles the First in the beginning of his reign. Such also was the declaration of right presented by the Lords and Commons to the Prince of Orange in 1688, and afterwards thrown into the form of an act of parliament, called the bill of rights.' },
        { text: ' It is evident, therefore, that according to their primitive signification, they have no application to constitutions professedly founded upon the power of the people, and executed by their immediate representatives and servants. Here, in strictness, the people surrender nothing, and as they retain every thing, they have no need of particular reservations.', id: 'fed84-people-surrender-nothing' },
      ],
    },
    {
      label: 'No. 84 · Why declarations of rights are dangerous',
      content: [
        { text: 'I go further, and affirm that bills of rights, in the sense and in the extent in which they are contended for, are not only unnecessary in the proposed constitution, but would even be dangerous. ' },
        { text: 'They would contain various exceptions to powers which are not granted; and on this very account, would afford a colourable pretext to claim more than were granted. For why declare that things shall not be done which there is no power to do?', id: 'fed84-dangerous-declaration' },
        { text: ' Why for instance, should it be said, that the liberty of the press shall not be restrained, when no power is given by which restrictions may be imposed? I will not contend that such a provision would confer a regulating power; but it is evident that it would furnish, to men disposed to usurp, a plausible pretence for claiming that power.', id: 'fed84-liberty-of-press' },
      ],
    },
  ],
}

export default federalist
