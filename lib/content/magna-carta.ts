import type { DocumentData } from '../types'

const magnaCarta: DocumentData = {
  id: 'magna-carta',
  slug: 'magna-carta',
  title: 'Magna Carta',
  subtitle: 'The Great Charter of Liberties',
  dateDescription: 'Sealed June 15, 1215',
  description: 'The charter forced upon King John by the English barons at Runnymede, establishing for the first time that the king was subject to the rule of law. Its principles of due process and limits on arbitrary power traveled directly into American constitutional thought.',
  sections: [
    {
      label: 'Preamble',
      content: [
        { text: 'John, by the grace of God, king of England, lord of Ireland, duke of Normandy and Aquitaine, and count of Anjou, to the archbishops, bishops, abbots, earls, barons, justiciars, foresters, sheriffs, stewards, servants, and to all his bailiffs and liege subjects, greeting.' },
        { text: ' Know that, having regard to God and for the salvation of our soul, and those of all our ancestors and heirs, and unto the honor of God and the advancement of Holy Church and for the rectifying of our realm, we have granted as underwritten by advice of our venerable fathers…', id: 'mc-preamble' },
      ],
    },
    {
      label: 'Clause 1 — The Church and the Liberties of England',
      content: [
        { text: 'In the first place we have granted to God, and by this our present charter confirmed for us and our heirs for ever ', id: 'mc-1-church' },
        { text: 'that the English church shall be free, and shall have her rights entire, and her liberties inviolate;', id: 'mc-1-church-free' },
        { text: ' and we will that it be thus observed; which is apparent from this that the freedom of elections, which is reckoned most important and very essential to the English church, we, of our pure and unconstrained will, did grant, and did by our charter confirm and did obtain the ratification of the same from our lord, Pope Innocent III, before the quarrel arose between us and our barons.' },
        { text: ' We have also granted to all freemen of our kingdom, for us and our heirs for ever, all the underwritten liberties, to be had and held by them and their heirs, of us and our heirs for ever.', id: 'mc-1-freemen' },
      ],
    },
    {
      label: 'Clause 12 — No Taxation Without Consent',
      content: [
        { text: 'No scutage nor aid shall be imposed on our kingdom, unless by common counsel of our kingdom,', id: 'mc-12-taxation' },
        { text: ' except for ransoming our person, for making our eldest son a knight, and for once marrying our eldest daughter; and for these there shall not be levied more than a reasonable aid.' },
      ],
    },
    {
      label: 'Clause 14 — The Great Council',
      content: [
        { text: 'And for obtaining the common counsel of the kingdom anent the assessing of an aid (except in the three cases aforesaid) or of a scutage, we will cause to be summoned the archbishops, bishops, abbots, earls, and greater barons, severally by our letters;', id: 'mc-14-council' },
        { text: ' and we will moreover cause to be summoned generally, through our sheriffs and bailiffs, and all others who hold of us in chief, for a fixed date, namely, after the expiry of at least forty days, and at a fixed place; and in all letters of such summons we will specify the reason of the summons.' },
        { text: ' And when the summons has thus been made, the business shall proceed on the day appointed, according to the counsel of such as are present, although not all who were summoned have come.', id: 'mc-14-quorum' },
      ],
    },
    {
      label: 'Clause 20 — Proportionality of Punishment',
      content: [
        { text: 'A freeman shall not be amerced for a slight offense, except in accordance with the degree of the offense;', id: 'mc-20-proportion' },
        { text: ' and for a grave offense he shall be amerced in accordance with the gravity of the offense, yet saving always his "contentment"; and a merchant in the same way, saving his "merchandise"; and a villein shall be amerced in the same way, saving his "wainage" — if they have fallen into our mercy: and none of the aforesaid amercements shall be imposed except by the oath of honest men of the neighborhood.' },
      ],
    },
    {
      label: 'Clause 29 — The Barons\' Committee of Enforcement',
      content: [
        { text: 'No constable or other bailiff of ours shall take corn or other provisions from any one without immediately tendering money therefor, unless he can have postponement thereof by permission of the seller.', id: 'mc-29-taking' },
      ],
    },
    {
      label: 'Clause 38 — No Prosecution Without Witnesses',
      content: [
        { text: 'No bailiff for the future shall, upon his own unsupported complaint, put anyone to his "law", without credible witnesses brought for this purpose.', id: 'mc-38-witnesses' },
      ],
    },
    {
      label: 'Clause 39 — Due Process',
      content: [
        { text: 'No freemen shall be taken or imprisoned or disseised or exiled or in any way destroyed, nor will we go upon him nor send upon him,', id: 'mc-39-no-taking' },
        { text: ' except by the lawful judgment of his peers or by the law of the land.', id: 'mc-39-law-of-land' },
      ],
    },
    {
      label: 'Clause 40 — Justice Shall Not Be Sold',
      content: [
        { text: 'To no one will we sell, to no one will we refuse or delay, right or justice.', id: 'mc-40-justice' },
      ],
    },
    {
      label: 'Clause 41 — Rights of Merchants',
      content: [
        { text: 'All merchants shall have safe and secure exit from England, and entry to England, with the right to tarry there and to move about as well by land as by water, for buying and selling by the ancient and right customs, quit from all evil tolls,', id: 'mc-41-merchants' },
        { text: ' except (in time of war) such merchants as are of the land at war with us. And if such are found in our land at the beginning of the war, they shall be detained, without injury to their bodies or goods, until information be received by us, or by our chief justiciar, how the merchants of our land found in the land at war with us are treated.' },
      ],
    },
    {
      label: 'Clause 45 — Appointment of Qualified Officers',
      content: [
        { text: 'We will appoint as justices, constables, sheriffs, or bailiffs only such as know the law of the realm and mean to observe it well.', id: 'mc-45-qualified' },
      ],
    },
    {
      label: 'Clause 61 — The Security Clause',
      content: [
        { text: 'Since, moreover, for God and the amendment of our kingdom and for the better allaying of the quarrel that has arisen between us and our barons, we have granted all these concessions,', id: 'mc-61-security-intro' },
        { text: ' desirous that they should enjoy them in complete and firm endurance for ever, we give and grant to them the underwritten security, namely, that the barons choose five and twenty barons of the kingdom, whomsoever they will, who shall be bound with all their might, to observe and hold, and cause to be observed, the peace and liberties we have granted and confirmed to them by this our present Charter,', id: 'mc-61-barons' },
        { text: ' so that if we, or our justiciar, or our bailiffs or any one of our officers, shall in anything be at fault towards anyone, or shall have broken any one of the articles of the peace or of this security, and the offense be notified to four barons of the foresaid five and twenty, the said four barons shall repair to us (or our justiciar, if we are out of the realm) and, laying the transgression before us, petition to have that transgression redressed without delay.', id: 'mc-61-enforcement' },
      ],
    },
    {
      label: 'Closing',
      content: [
        { text: 'Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June, in the seventeenth year of our reign.', id: 'mc-closing' },
      ],
    },
  ],
}

export default magnaCarta
