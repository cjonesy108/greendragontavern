import type { DocumentData } from '../types'

const declaration: DocumentData = {
  id: 'declaration',
  slug: 'declaration',
  title: 'The Declaration of Independence',
  subtitle: 'In Congress',
  dateDescription: 'July 4, 1776',
  description: 'The unanimous declaration of the thirteen united States of America, adopted by the Second Continental Congress.',
  sections: [
    {
      label: 'Preamble',
      content: [
        { text: 'When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, ' },
        { text: 'the separate and equal station to which the Laws of Nature and of Nature\'s God entitle them', id: 'doi-separate-equal' },
        { text: ', a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.' },
      ],
    },
    {
      label: 'Self-evident truths',
      content: [
        { text: 'We hold these truths to be self-evident, ' },
        { text: 'that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness', id: 'doi-all-men-equal' },
        { text: '. — That to secure these rights, Governments are instituted among Men, ' },
        { text: 'deriving their just powers from the consent of the governed', id: 'doi-consent' },
        { text: ', — That whenever any Form of Government becomes destructive of these ends, ' },
        { text: 'it is the Right of the People to alter or to abolish it, and to institute new Government', id: 'doi-alter-abolish' },
        { text: ', laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness.' },
      ],
    },
    {
      label: 'On prudence',
      content: [
        { text: 'Prudence, indeed, will dictate that ' },
        { text: 'Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed', id: 'doi-long-established' },
        { text: '. But ' },
        { text: 'when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government', id: 'doi-long-train' },
        { text: ', and to provide new Guards for their future security. — Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.' },
      ],
    },
    {
      label: 'Grievance I — Assent to Laws',
      content: [
        { text: 'He has refused his Assent to Laws, ', id: 'doi-g-assent' },
        { text: 'the most wholesome and necessary for the public good.' },
      ],
    },
    {
      label: 'Grievance II — Governors',
      content: [
        { text: 'He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.', id: 'doi-g-governors' },
      ],
    },
    {
      label: 'Grievance III — Representative Houses',
      content: [
        { text: 'He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.' },
        { text: ' He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their Public Records, for the sole purpose of fatiguing them into compliance with his measures.', id: 'doi-g-legislature' },
        { text: ' He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.' },
      ],
    },
    {
      label: 'Grievance IV — Obstruction of Justice',
      content: [
        { text: 'He has obstructed the Administration of Justice by refusing his Assent to Laws for establishing Judiciary Powers.' },
        { text: ' He has made Judges dependent on his Will alone for the tenure of their offices, and the amount and payment of their salaries.', id: 'doi-g-judges' },
      ],
    },
    {
      label: 'Grievance V — Swarms of Officers',
      content: [
        { text: 'He has erected a multitude of New Offices, and ', id: 'doi-g-swarms' },
        { text: 'sent hither swarms of Officers to harass our people and eat out their substance.' },
      ],
    },
    {
      label: 'Grievance VI — Standing Armies',
      content: [
        { text: 'He has kept among us, in times of peace, ', id: 'doi-g-armies' },
        { text: 'Standing Armies without the Consent of our legislatures.' },
        { text: ' He has affected to render the Military independent of and superior to the Civil power.' },
      ],
    },
    {
      label: 'Grievance VII — Foreign jurisdiction',
      content: [
        { text: 'He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation: For quartering large bodies of armed troops among us; ' },
        { text: 'For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States;', id: 'doi-g-mock-trial' },
        { text: ' For cutting off our Trade with all parts of the world; ' },
        { text: 'For imposing Taxes on us without our Consent;', id: 'doi-g-taxation' },
        { text: ' ' },
        { text: 'For depriving us in many cases, of the benefit of Trial by Jury;', id: 'doi-g-trial-jury' },
        { text: ' For transporting us beyond Seas to be tried for pretended offences;' },
        { text: ' For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies.' },
      ],
    },
    {
      label: 'Grievance VIII — Waging War',
      content: [
        { text: 'He has abdicated Government here, by declaring us out of his Protection and waging War against us.' },
        { text: ' He has plundered our seas, ravaged our coasts, burnt our towns, and destroyed the lives of our people.', id: 'doi-g-plundered' },
        { text: ' He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation, and tyranny, already begun with circumstances of Cruelty & Perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.' },
      ],
    },
    {
      label: 'Grievance IX — Domestic insurrections',
      content: [
        { text: 'He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, ', id: 'doi-g-insurrections' },
        { text: 'the merciless Indian Savages whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions.' },
      ],
    },
    {
      label: 'Petition exhausted',
      content: [
        { text: 'In every stage of these Oppressions We have Petitioned for Redress in the most humble terms: ' },
        { text: 'Our repeated Petitions have been answered only by repeated injury. A Prince, whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people.', id: 'doi-petition' },
        { text: ' Nor have We been wanting in attentions to our British brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations, which would inevitably interrupt our connections and correspondence.' },
        { text: ' They too have been deaf to the voice of justice and of consanguinity. We must, therefore, acquiesce in the necessity, which denounces our Separation, and hold them, as we hold the rest of mankind, Enemies in War, in Peace Friends.', id: 'doi-deaf' },
      ],
    },
    {
      label: 'The Declaration',
      content: [
        { text: 'We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, ' },
        { text: 'solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved', id: 'doi-free-independent' },
        { text: '; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do.' },
        { text: ' And for the support of this Declaration, with a firm reliance on the protection of Divine Providence, ' },
        { text: 'we mutually pledge to each other our Lives, our Fortunes and our sacred Honor.', id: 'doi-pledge' },
      ],
    },
  ],
}

export default declaration
