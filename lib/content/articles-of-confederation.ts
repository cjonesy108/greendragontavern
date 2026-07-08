import type { DocumentData } from '../types'

const articlesOfConfederation: DocumentData = {
  id: 'articles-of-confederation',
  slug: 'articles-of-confederation',
  title: 'Articles of Confederation',
  subtitle: 'America\'s First Constitution',
  dateDescription: 'Ratified March 1, 1781',
  description: 'America\'s first constitution, drafted by the Continental Congress in 1777 and ratified in 1781. It created a loose union of sovereign states with a weak central government — an experiment that lasted only eight years before being replaced by the Constitution of 1787. Its failures were as instructive as its achievements.',
  sections: [
    {
      label: 'Preamble',
      content: [
        { text: 'To all to whom these Presents shall come, we the undersigned Delegates of the States affixed to our Names send greeting.', id: 'aoc-preamble-greeting' },
        { text: ' Articles of Confederation and perpetual Union between the states of New Hampshire, Massachusetts-bay, Rhode Island and Providence Plantations, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina and Georgia.', id: 'aoc-preamble-union' },
      ],
    },
    {
      label: 'Article I — The Name',
      content: [
        { text: 'The Stile of this Confederacy shall be "The United States of America."', id: 'aoc-1-name' },
      ],
    },
    {
      label: 'Article II — State Sovereignty',
      content: [
        { text: 'Each state retains its sovereignty, freedom, and independence,', id: 'aoc-2-sovereignty' },
        { text: ' and every power, jurisdiction, and right, which is not by this Confederation expressly delegated to the United States, in Congress assembled.', id: 'aoc-2-reserved' },
      ],
    },
    {
      label: 'Article III — The League of Friendship',
      content: [
        { text: 'The said States hereby severally enter into a firm league of friendship with each other, for their common defense, the security of their liberties, and their mutual and general welfare,', id: 'aoc-3-league' },
        { text: ' binding themselves to assist each other, against all force offered to, or attacks made upon them, or any of them, on account of religion, sovereignty, trade, or any other pretense whatever.', id: 'aoc-3-mutual-defense' },
      ],
    },
    {
      label: 'Article IV — Privileges of Citizens',
      content: [
        { text: 'The better to secure and perpetuate mutual friendship and intercourse among the people of the different States in this Union, the free inhabitants of each of these States, paupers, vagabonds, and fugitives from justice excepted, shall be entitled to all privileges and immunities of free citizens in the several States;', id: 'aoc-4-privileges' },
        { text: ' and the people of each State shall free ingress and regress to and from any other State, and shall enjoy therein all the privileges of trade and commerce, subject to the same duties, impositions, and restrictions as the inhabitants thereof respectively,', id: 'aoc-4-ingress' },
        { text: ' provided that such restrictions shall not extend so far as to prevent the removal of property imported into any State, to any other State, of which the owner is an inhabitant;', id: 'aoc-4-property' },
        { text: ' provided also that no imposition, duties or restriction shall be laid by any State, on the property of the United States, or either of them.', id: 'aoc-4-no-imposition' },
        { text: ' If any person guilty of, or charged with treason, felony, or other high misdemeanor in any State, shall flee from justice, and be found in any of the United States, he shall, upon demand of the Governor or Executive power, of the State from which he fled, be delivered up and removed to the State having jurisdiction of his offense.', id: 'aoc-4-extradition' },
      ],
    },
    {
      label: 'Article V — Congress',
      content: [
        { text: 'For the most convenient management of the general interests of the United States, delegates shall be annually appointed in such manner as the legislatures of each State shall direct,', id: 'aoc-5-delegates' },
        { text: ' to meet in Congress on the first Monday in November, in every year, with a power reserved to each State to recall its delegates, or any of them, at any time within the year, and to send others in their stead for the remainder of the year.', id: 'aoc-5-recall' },
        { text: ' No State shall be represented in Congress by less than two, nor more than seven members;', id: 'aoc-5-size' },
        { text: ' and no person shall be capable of being a delegate for more than three years in any term of six years;', id: 'aoc-5-term-limits' },
        { text: ' nor shall any person, being a delegate, be capable of holding any office under the United States, for which he, or another for his benefit, receives any salary, fees or emolument of any kind.', id: 'aoc-5-emoluments' },
        { text: ' In determining questions in the United States in Congress assembled, each State shall have one vote.', id: 'aoc-5-one-vote' },
      ],
    },
    {
      label: 'Article VI — Restrictions on States',
      content: [
        { text: 'No State, without the consent of the United States in Congress assembled, shall send any embassy to, or receive any embassy from, or enter into any conference, agreement, alliance or treaty with any King, Prince or State;', id: 'aoc-6-no-treaties' },
        { text: ' nor shall any person holding any office of profit or trust under the United States, or any of them, accept any present, emolument, office or title of any kind whatever from any King, Prince or foreign State;', id: 'aoc-6-no-emoluments' },
        { text: ' nor shall the United States in Congress assembled, or any of them, grant any title of nobility.', id: 'aoc-6-no-nobility' },
        { text: ' No two or more States shall enter into any treaty, confederation or alliance whatever between them, without the consent of the United States in Congress assembled,', id: 'aoc-6-no-alliances' },
        { text: ' specifying accurately the purposes for which the same is to be entered into, and how long it shall continue.', id: 'aoc-6-duration' },
        { text: ' No State shall lay any imposts or duties, which may interfere with any stipulations in treaties, entered into by the United States in Congress assembled, with any King, Prince or State, in pursuance of any treaties already proposed by Congress, to the courts of France and Spain.', id: 'aoc-6-no-imposts' },
        { text: ' No vessel of war shall be kept up in time of peace by any State, except such number only, as shall be deemed necessary by the United States in Congress assembled, for the defense of such State, or its trade;', id: 'aoc-6-no-navy' },
        { text: ' nor shall any body of forces be kept up by any State in time of peace, except such number only, as in the judgment of the United States in Congress assembled, shall be deemed requisite to garrison the forts necessary for the defense of such State;', id: 'aoc-6-no-army' },
        { text: ' but every State shall always keep up a well-regulated and disciplined militia, sufficiently armed and accoutered, and shall provide and constantly have ready for use, in public stores, a due number of field pieces and tents, and a proper quantity of arms, ammunition and camp equipage.', id: 'aoc-6-militia' },
      ],
    },
    {
      label: 'Article VII — Military Officers',
      content: [
        { text: 'When land forces are raised by any State for the common defense, all officers of or under the rank of colonel, shall be appointed by the legislature of each State respectively, by whom such forces shall be raised, or in such manner as such State shall direct,', id: 'aoc-7-officers' },
        { text: ' and all vacancies shall be filled up by the State which first made the appointment.', id: 'aoc-7-vacancies' },
      ],
    },
    {
      label: 'Article VIII — Common Treasury',
      content: [
        { text: 'All charges of war, and all other expenses that shall be incurred for the common defense or general welfare, and allowed by the United States in Congress assembled, shall be defrayed out of a common treasury,', id: 'aoc-8-treasury' },
        { text: ' which shall be supplied by the several States in proportion to the value of all land within each State, granted or surveyed for any person,', id: 'aoc-8-proportion' },
        { text: ' as such land and the buildings and improvements thereon shall be estimated according to such mode as the United States in Congress assembled, shall from time to time direct and appoint.', id: 'aoc-8-estimate' },
        { text: ' The taxes for paying that proportion shall be laid and levied by the authority and direction of the legislatures of the several States within the time agreed upon by the United States in Congress assembled.', id: 'aoc-8-taxes' },
      ],
    },
    {
      label: 'Article IX — Powers of Congress',
      content: [
        { text: 'The United States in Congress assembled, shall have the sole and exclusive right and power of determining on peace and war,', id: 'aoc-9-war-peace' },
        { text: ' except in the cases mentioned in the sixth article — of sending and receiving ambassadors — entering into treaties and alliances,', id: 'aoc-9-diplomacy' },
        { text: ' provided that no treaty of commerce shall be made whereby the legislative power of the respective States shall be restrained from imposing such imposts and duties on foreigners, as their own people are subjected to, or from prohibiting the exportation or importation of any species of goods or commodities whatsoever —', id: 'aoc-9-commerce-limit' },
        { text: ' of establishing rules for deciding in all cases, what captures on land or water shall be legal, and in what manner prizes taken by land or naval forces in the service of the United States shall be divided or appropriated —', id: 'aoc-9-prizes' },
        { text: ' of granting letters of marque and reprisal in times of peace — appointing courts for the trial of piracies and felonies committed on the high seas and establishing courts for receiving and determining finally appeals in all cases of captures,', id: 'aoc-9-courts' },
        { text: ' provided that no member of Congress shall be appointed a judge of any of the said courts.', id: 'aoc-9-no-member-judge' },
        { text: ' The United States in Congress assembled shall also be the last resort on appeal in all disputes and differences now subsisting or that hereafter may arise between two or more States concerning boundary, jurisdiction or any other causes whatever;', id: 'aoc-9-disputes' },
        { text: ' The United States in Congress assembled shall also have the sole and exclusive right and power of regulating the alloy and value of coin struck by their own authority, or by that of the respective States — fixing the standards of weights and measures throughout the United States —', id: 'aoc-9-coin' },
        { text: ' regulating the trade and managing all affairs with the Indians, not members of any of the States, provided that the legislative right of any State within its own limits be not infringed or violated —', id: 'aoc-9-indians' },
        { text: ' establishing or regulating post offices from one State to another, throughout all the United States, and exacting such postage on the papers passing through the same as may be requisite to defray the expenses of the said office —', id: 'aoc-9-post' },
        { text: ' appointing all officers of the land forces, in the service of the United States, excepting regimental officers — appointing all the officers of the naval forces, and commissioning all officers whatever in the service of the United States —', id: 'aoc-9-officers' },
        { text: ' making rules for the government and regulation of the said land and naval forces, and directing their operations.', id: 'aoc-9-military-rules' },
        { text: ' The United States in Congress assembled shall have authority to appoint a committee, to sit in the recess of Congress, to be denominated "A Committee of the States", and to consist of one delegate from each State; and to appoint such other committees and civil officers as may be necessary for managing the general affairs of the United States under their direction —', id: 'aoc-9-committee' },
        { text: ' to appoint one of their members to preside, provided that no person be allowed to serve in the office of president more than one year in any term of three years;', id: 'aoc-9-president' },
        { text: ' to ascertain the necessary sums of money to be raised for the service of the United States, and to appropriate and apply the same for defraying the public expenses —', id: 'aoc-9-appropriations' },
        { text: ' to borrow money, or emit bills on the credit of the United States, transmitting every half-year to the respective States an account of the sums of money so borrowed or emitted —', id: 'aoc-9-borrow' },
        { text: ' to build and equip a navy — to agree upon the number of land forces, and to make requisitions from each State for its quota, in proportion to the number of white inhabitants in such State;', id: 'aoc-9-requisitions' },
        { text: ' which requisition shall be binding, and thereupon the legislature of each State shall appoint the regimental officers, raise the men and cloath, arm and equip them in a solid-like manner, at the expense of the United States;', id: 'aoc-9-binding' },
        { text: ' and the officers and men so cloathed, armed and equipped shall march to the place appointed, and within the time agreed on by the United States in Congress assembled.', id: 'aoc-9-march' },
        { text: ' The United States in Congress assembled shall never engage in a war, nor grant letters of marque or reprisal in time of peace, nor enter into any treaties or alliances, nor coin money, nor regulate the value thereof, nor ascertain the sums and expenses necessary for the defense and welfare of the United States, or any of them,', id: 'aoc-9-supermajority-req' },
        { text: ' nor emit bills, nor borrow money on the credit of the United States, nor appropriate money, nor agree upon the number of vessels of war, to be built or purchased, or the number of land or sea forces to be raised, nor appoint a commander in chief of the army or navy, unless nine States assent to the same:', id: 'aoc-9-nine-states' },
        { text: ' nor shall a question on any other point, except for adjourning from day to day be determined, unless by the votes of the majority of the United States in Congress assembled.', id: 'aoc-9-majority' },
      ],
    },
    {
      label: 'Article X — Committee of the States',
      content: [
        { text: 'The Committee of the States, or any nine of them, shall be authorized to execute, in the recess of Congress, such of the powers of Congress as the United States in Congress assembled, by the consent of the nine States, shall from time to time think expedient to vest them with;', id: 'aoc-10-committee' },
        { text: ' provided that no power be delegated to the said Committee, for the exercise of which, by the Articles of Confederation, the voice of nine States in the Congress of the United States assembled be requisite.', id: 'aoc-10-limits' },
      ],
    },
    {
      label: 'Article XI — Admission of Canada',
      content: [
        { text: 'Canada acceding to this confederation, and adjoining in the measures of the United States, shall be admitted into, and entitled to all the advantages of this Union;', id: 'aoc-11-canada' },
        { text: ' but no other colony shall be admitted into the same, unless such admission be agreed to by nine States.', id: 'aoc-11-nine-states' },
      ],
    },
    {
      label: 'Article XII — War Debts',
      content: [
        { text: 'All bills of credit emitted, monies borrowed, and debts contracted by, or under the authority of Congress, before the assembling of the United States, in pursuance of the present confederation, shall be deemed and considered as a charge against the United States, for payment and satisfaction whereof the said United States, and the public faith are hereby solemnly pledged.', id: 'aoc-12-debts' },
      ],
    },
    {
      label: 'Article XIII — Perpetual Union and Amendment',
      content: [
        { text: 'Every State shall abide by the determination of the United States in Congress assembled, on all questions which by this confederation are submitted to them.', id: 'aoc-13-abide' },
        { text: ' And the Articles of this Confederation shall be inviolably observed by every State,', id: 'aoc-13-inviolable' },
        { text: ' and the Union shall be perpetual;', id: 'aoc-13-perpetual' },
        { text: ' nor shall any alteration at any time hereafter be made in any of them; unless such alteration be agreed to in a Congress of the United States, and be afterwards confirmed by the legislatures of every State.', id: 'aoc-13-amendment' },
      ],
    },
    {
      label: 'Attestation',
      content: [
        { text: 'And Whereas it hath pleased the Great Governor of the World to incline the hearts of the legislatures we respectively represent in Congress, to approve of, and to authorize us to ratify the said Articles of Confederation and perpetual Union.', id: 'aoc-attest-governor' },
        { text: ' Know Ye that we the undersigned delegates, by virtue of the power and authority to us given for that purpose, do by these presents, in the name and in behalf of our respective constituents, fully and entirely ratify and confirm each and every of the said Articles of Confederation and perpetual Union,', id: 'aoc-attest-ratify' },
        { text: ' and all and singular the matters and things therein contained: And we do further solemnly plight and engage the faith of our respective constituents, that they shall abide by the determinations of the United States in Congress assembled, on all questions, which by the said Confederation are submitted to them.', id: 'aoc-attest-plight' },
        { text: ' And that the Articles thereof shall be inviolably observed by the States we respectively represent, and that the Union shall be perpetual.', id: 'aoc-attest-perpetual' },
      ],
    },
  ],
}

export default articlesOfConfederation
