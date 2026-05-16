import type { DocumentData } from '../types'

const farewell: DocumentData = {
  id: 'farewell',
  slug: 'farewell',
  title: "Washington's Farewell Address",
  subtitle: 'George Washington',
  dateDescription: 'September 19, 1796',
  description: "Washington's warnings to the nation on unity, political parties, religion, and foreign entanglements — delivered as he stepped down from the presidency.",
  sections: [
    {
      label: 'On the unity of government',
      content: [
        { text: 'The unity of Government, which constitutes you one people, is also now dear to you. ' },
        { text: 'It is justly so; for it is a main pillar in the edifice of your real independence, the support of your tranquility at home, your peace abroad; of your safety; of your prosperity; of that very Liberty, which you so highly prize.', id: 'fw-unity-pillar' },
        { text: ' But as it is easy to foresee, that, from different causes and from different quarters, much pains will be taken, many artifices employed, to weaken in your minds the conviction of this truth; as this is the point in your political fortress against which the batteries of internal and external enemies will be most constantly and actively (though often covertly and insidiously) directed, it is of infinite moment, that you should properly estimate the immense value of your national Union to your collective and individual happiness.' },
      ],
    },
    {
      label: 'Warning against regionalism',
      content: [
        { text: 'Citizens, by birth or choice, of a common country, that country has a right to concentrate your affections. ' },
        { text: 'The name of American, which belongs to you, in your national capacity, must always exalt the just pride of Patriotism, more than any appellation derived from local discriminations.', id: 'fw-name-american' },
        { text: ' With slight shades of difference, you have the same religion, manners, habits, and political principles. You have in a common cause fought and triumphed together; the Independence and Liberty you possess are the work of joint counsels, and joint efforts, of common dangers, sufferings, and successes.' },
      ],
    },
    {
      label: 'On the danger of political parties',
      content: [
        { text: 'I have already intimated to you the danger of Parties in the State, with particular reference to the founding of them on Geographical discriminations. ' },
        { text: 'Let me now take a more comprehensive view, and warn you in the most solemn manner against the baneful effects of the Spirit of Party, generally.', id: 'fw-spirit-of-party' },
        { text: ' This spirit, unfortunately, is inseparable from our nature, having its root in the strongest passions of the human Mind. It exists under different shapes in all Governments, more or less stifled, controuled, or repressed; but, in those of the popular form, it is seen in its greatest rankness, and is truly their worst enemy.' },
        { text: ' The alternate domination of one faction over another, sharpened by the spirit of revenge, natural to party dissension, which in different ages and countries has perpetrated the most horrid enormities, is itself a frightful despotism.', id: 'fw-alternate-domination' },
      ],
    },
    {
      label: 'Parties as tools of despotism',
      content: [
        { text: 'The disorders and miseries, which result, gradually incline the minds of men to seek security and repose in the absolute power of an Individual; and sooner or later the chief of some prevailing faction, more able or more fortunate than his competitors, turns this disposition to the purposes of his own elevation, on the ruins of Public Liberty. ', id: 'fw-ruins-of-liberty' },
        { text: 'Without looking forward to an extremity of this kind, (which nevertheless ought not to be entirely out of sight,) the common and continual mischiefs of the spirit of Party are sufficient to make it the interest and duty of a wise People to discourage and restrain it.' },
      ],
    },
    {
      label: 'On religion and morality',
      content: [
        { text: 'Of all the dispositions and habits, which lead to political prosperity, Religion and Morality are indispensable supports. ' },
        { text: 'In vain would that man claim the tribute of Patriotism, who should labour to subvert these great Pillars of human happiness, these firmest props of the duties of Men and citizens.', id: 'fw-religion-morality' },
        { text: ' The mere Politician, equally with the pious man, ought to respect and to cherish them. A volume could not trace all their connections with private and public felicity. Let it simply be asked, where is the security for property, for reputation, for life, if the sense of religious obligation desert the oaths, which are the instruments of investigation in Courts of Justice?' },
        { text: ' And let us with caution indulge the supposition, that morality can be maintained without religion. Whatever may be conceded to the influence of refined education on minds of peculiar structure; reason and experience both forbid us to expect, that national morality can prevail in exclusion of religious principle.', id: 'fw-morality-without-religion' },
      ],
    },
    {
      label: 'On public credit and debt',
      content: [
        { text: 'As a very important source of strength and security, cherish public credit. One method of preserving it is, to use it as sparingly as possible; avoiding occasions of expence by cultivating peace, but remembering also that timely disbursements to prepare for danger frequently prevent much greater disbursements to repel it; ' },
        { text: 'avoiding likewise the accumulation of debt, not only by shunning occasions of expence, but by vigorous exertions in time of Peace to discharge the Debts which unavoidable wars may have occasioned, not ungenerously throwing upon posterity the burthen, which we ourselves ought to bear.', id: 'fw-public-debt' },
      ],
    },
    {
      label: 'On foreign entanglements',
      content: [
        { text: 'Observe good faith and justice towards all Nations; cultivate peace and harmony with all. Religion and Morality enjoin this conduct; and can it be, that good policy does not equally enjoin it? ' },
        { text: 'It will be worthy of a free, enlightened, and, at no distant period, a great Nation, to give to mankind the magnanimous and too novel example of a People always guided by an exalted justice and benevolence.', id: 'fw-exalted-justice' },
      ],
    },
    {
      label: 'Against permanent alliances',
      content: [
        { text: 'Europe has a set of primary interests, which to us have none, or a very remote relation. Hence she must be engaged in frequent controversies, the causes of which are essentially foreign to our concerns. Hence, therefore, it must be unwise in us to implicate ourselves, by artificial ties, in the ordinary vicissitudes of her politics, or the ordinary combinations and collisions of her friendships or enmities.' },
        { text: ' Our detached and distant situation invites and enables us to pursue a different course. ', id: 'fw-detached-situation' },
        { text: 'Why forego the advantages of so peculiar a situation? Why quit our own to stand upon foreign ground? Why, by interweaving our destiny with that of any part of Europe, entangle our peace and prosperity in the toils of European Ambition, Rivalship, Interest, Humour or Caprice?', id: 'fw-why-entangle' },
        { text: ' It is our true policy to steer clear of permanent Alliances, with any portion of the foreign world.', id: 'fw-permanent-alliances' },
      ],
    },
    {
      label: 'His farewell',
      content: [
        { text: 'Though, in reviewing the incidents of my Administration, I am unconscious of intentional error; I am nevertheless too sensible of my defects not to think it probable that I may have committed many errors. ' },
        { text: 'Whatever they may be, I fervently beseech the Almighty to avert or mitigate the evils to which they may tend. I shall also carry with me the hope, that my Country will never cease to view them with indulgence; and that, after forty-five years of my life dedicated to its service with an upright zeal, the faults of incompetent abilities will be consigned to oblivion, as myself must soon be to the Mansions of rest.', id: 'fw-farewell' },
        { text: ' Relying on its kindness in this as in other things, and actuated by that fervent love towards it, which is so natural to a Man, who views in it the native soil of himself and his progenitors for several Generations; I anticipate with pleasing expectation that retreat, in which I promise myself to realize, without alloy, the sweet enjoyment of partaking, in the midst of my fellow Citizens, the benign influence of good Laws under a free Government, the ever favourite object of my heart, and the happy reward, as I trust, of our mutual cares, labours, and dangers.' },
      ],
    },
  ],
}

export default farewell
