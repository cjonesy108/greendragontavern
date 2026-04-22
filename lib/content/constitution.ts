import type { DocumentData } from '../types'

const constitution: DocumentData = {
  id: 'constitution',
  slug: 'constitution',
  title: 'The Constitution of the United States',
  subtitle: 'Framed by the Constitutional Convention',
  dateDescription: 'September 17, 1787',
  description: 'The supreme law of the United States, establishing the framework of the federal government.',
  sections: [
    {
      label: 'Preamble',
      content: [
        { text: 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and ', id: 'con-preamble-we-the-people' },
        { text: 'secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.', id: 'con-preamble-liberty' },
      ],
    },
    {
      label: 'Article I, §1 — Legislative Power',
      content: [
        { text: 'All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.', id: 'con-art1-legpow' },
      ],
    },
    {
      label: 'Article I, §2 — House of Representatives',
      content: [
        { text: 'The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.' },
        { text: ' Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, ', id: 'con-three-fifths' },
        { text: 'three fifths of all other Persons.' },
      ],
    },
    {
      label: 'Article I, §6 — Compensation & Speech or Debate',
      content: [
        { text: 'The Senators and Representatives shall receive a Compensation for their Services, to be ascertained by Law, and paid out of the Treasury of the United States. They shall in all Cases, except Treason, Felony and Breach of the Peace, be privileged from Arrest during their Attendance at the Session of their respective Houses, and in going to and returning from the same; and ', id: 'con-speech-debate' },
        { text: 'for any Speech or Debate in either House, they shall not be questioned in any other Place.' },
      ],
    },
    {
      label: 'Article I, §7 — Bills & Presentment',
      content: [
        { text: 'All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills.' },
        { text: ' Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States; If he approve he shall sign it, but if not he shall return it, with his Objections to that House in which it shall have originated, who shall enter the Objections at large on their Journal, and proceed to reconsider it.', id: 'con-presentment' },
        { text: ' If after such Reconsideration two thirds of that House shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it shall likewise be reconsidered, and if approved by two thirds of that House, it shall become a Law.' },
      ],
    },
    {
      label: 'Article I, §8 — Enumerated Powers',
      content: [
        { text: 'The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises shall be uniform throughout the United States;', id: 'con-taxing-power' },
        { text: ' To borrow Money on the credit of the United States; To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes;', id: 'con-commerce' },
        { text: ' To establish an uniform Rule of Naturalization; To coin Money, regulate the Value thereof, and fix the Standard of Weights and Measures; To establish Post Offices and post Roads; To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries;', id: 'con-patents' },
        { text: ' To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations; To declare War; To raise and support Armies; To provide and maintain a Navy; To make Rules for the Government and Regulation of the land and naval Forces; To provide for calling forth the Militia; To exercise exclusive Legislation in all Cases whatsoever, over such District as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States; and ' },
        { text: 'To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.', id: 'con-necessary-proper' },
      ],
    },
    {
      label: 'Article I, §9 — Limits on Congress',
      content: [
        { text: 'The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it.', id: 'con-habeas' },
        { text: ' No Bill of Attainder or ex post facto Law shall be passed.', id: 'con-attainder' },
        { text: ' No capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or Enumeration herein before directed to be taken. No Tax or Duty shall be laid on Articles exported from any State. No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another: nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another. No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time.' },
        { text: ' No Title of Nobility shall be granted by the United States: And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.', id: 'con-emoluments' },
      ],
    },
    {
      label: 'Article II, §1 — Executive Power',
      content: [
        { text: 'The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected as follows:', id: 'con-executive-power' },
        { text: ' No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States.', id: 'con-natural-born' },
      ],
    },
    {
      label: 'Article II, §2 — Commander in Chief & Treaty Power',
      content: [
        { text: 'The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States;', id: 'con-commander-chief' },
        { text: ' he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any Subject relating to the Duties of their respective Offices, and he shall have Power to Grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment.' },
        { text: ' He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur;', id: 'con-treaty' },
        { text: ' and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law.', id: 'con-appointments' },
      ],
    },
    {
      label: 'Article II, §4 — Impeachment',
      content: [
        { text: 'The President, Vice President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, ', id: 'con-impeachment' },
        { text: 'or other high Crimes and Misdemeanors.' },
      ],
    },
    {
      label: 'Article III, §1 — Judicial Power',
      content: [
        { text: 'The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. ', id: 'con-judicial-power' },
        { text: 'The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall, at stated Times, receive for their Services a Compensation, which shall not be diminished during their Continuance in Office.', id: 'con-good-behaviour' },
      ],
    },
    {
      label: 'Article III, §2 — Jurisdiction',
      content: [
        { text: 'The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority;—to all Cases affecting Ambassadors, other public Ministers and Consuls;—to all Cases of admiralty and maritime Jurisdiction;—to Controversies to which the United States shall be a Party;—to Controversies between two or more States;—between a State and Citizens of another State;—between Citizens of different States.', id: 'con-jurisdiction' },
        { text: ' In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction. In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make.' },
        { text: ' The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury; and such Trial shall be held in the State where the said Crimes shall have been committed.', id: 'con-jury-trial' },
      ],
    },
    {
      label: 'Article III, §3 — Treason',
      content: [
        { text: 'Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort.', id: 'con-treason' },
        { text: ' No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court.' },
      ],
    },
    {
      label: 'Article IV, §1 — Full Faith and Credit',
      content: [
        { text: 'Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State.', id: 'con-full-faith' },
        { text: ' And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof.' },
      ],
    },
    {
      label: 'Article IV, §4 — Republican Government',
      content: [
        { text: 'The United States shall guarantee to every State in this Union a Republican Form of Government, and shall protect each of them against Invasion; and on Application of the Legislature, or of the Executive (when the Legislature cannot be convened) against domestic Violence.', id: 'con-republican-guarantee' },
      ],
    },
    {
      label: 'Article V — The Amendment Process',
      content: [
        { text: 'The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by Conventions in three fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress;', id: 'con-amendment' },
        { text: ' Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article; and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate.', id: 'con-equal-suffrage' },
      ],
    },
    {
      label: 'Article VI — Supremacy Clause',
      content: [
        { text: 'This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding.', id: 'con-supremacy' },
        { text: ' The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and all executive and judicial Officers, both of the United States and of the several States, shall be bound by Oath or Affirmation, to support this Constitution; but ' },
        { text: 'no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States.', id: 'con-no-religious-test' },
      ],
    },
    {
      label: 'Article VII — Ratification',
      content: [
        { text: 'The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.', id: 'con-ratification' },
        { text: ' Done in Convention by the Unanimous Consent of the States present the Seventeenth Day of September in the Year of our Lord one thousand seven hundred and Eighty seven and of the Independance of the United States of America the Twelfth. In witness whereof We have hereunto subscribed our Names, G. Washington — Presid\'t and deputy from Virginia.' },
      ],
    },
  ],
}

export default constitution
