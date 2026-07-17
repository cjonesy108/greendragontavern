import type { DocumentData } from '../types'

const gettysburg: DocumentData = {
  id: 'gettysburg',
  slug: 'gettysburg',
  title: 'The Gettysburg Address',
  subtitle: 'Dedication of the Soldiers\' National Cemetery',
  dateDescription: 'November 19, 1863',
  description: 'Abraham Lincoln\'s address at the dedication of the Soldiers\' National Cemetery in Gettysburg, Pennsylvania, four months after the Union victory at the Battle of Gettysburg.',
  sections: [
    {
      label: 'Opening',
      content: [
        {
          text: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
          id: 'gett-four-score',
        },
      ],
    },
    {
      label: 'The test of war',
      content: [
        {
          text: 'Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.',
          id: 'gett-great-civil-war',
        },
        { text: ' We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.' },
      ],
    },
    {
      label: 'What we cannot consecrate',
      content: [
        { text: 'But, in a larger sense, we can not dedicate — we can not consecrate — we can not hallow — this ground. ' },
        {
          text: 'The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract.',
          id: 'gett-brave-men',
        },
        { text: ' ' },
        {
          text: 'The world will little note, nor long remember what we say here, but it can never forget what they did here.',
          id: 'gett-world-little-note',
        },
        { text: ' It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.' },
      ],
    },
    {
      label: 'The great task remaining',
      content: [
        { text: 'It is rather for us to be here dedicated to the great task remaining before us — that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion — ' },
        {
          text: 'that we here highly resolve that these dead shall not have died in vain',
          id: 'gett-not-died-vain',
        },
        { text: ' — ' },
        {
          text: 'that this nation, under God, shall have a new birth of freedom',
          id: 'gett-new-birth-freedom',
        },
        { text: ' — and that ' },
        {
          text: 'government of the people, by the people, for the people, shall not perish from the earth.',
          id: 'gett-government-people',
        },
      ],
    },
  ],
}

export default gettysburg
