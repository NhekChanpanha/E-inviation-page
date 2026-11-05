// The names, parents, date and venue are from the printed card. The rest is sample text: replace it with the real details.
export const WEDDING = {
  groom: 'សុភ័ក្ត្រា',
  bride: 'សុគន្ធវារី',
  family: { groom: 'ថន', bride: 'ញឹក' },
  guest: 'ភ្ញៀវកិត្តិយស',
  parents: {
    groom: ['លោកស្រី ហេង រីណា'],
    bride: ['ឯកឧត្តម ញឹក សាគុណា', 'លោកជំទាវ ព្រាន វ៉ាញ'],
  },
  // Put photo files in public/photos and use paths like '/photos/groom.jpg'.
  // A null shows a Khmer ornament in the frame instead.
  photos: {
    cover: '/DSC_0064.webp',
    groom: '/DSC_0194.webp',
    bride: '/DSC_0185.webp',
    gallery: ['/_DSC0438.webp', '/_DSC1139.webp', '/_DSC1359.webp', '/_DSC1649.webp', '/DSC_0693.webp'],
  },
  date: {
    iso: '2027-01-11T17:00:00+07:00',
    endIso: '2027-01-11T21:00:00+07:00',
    km: 'ថ្ងៃចន្ទ ទី១១ ខែមករា ឆ្នាំ២០២៧',
    lunar: 'ថ្ងៃចន្ទ ៤កើត ខែបុស្ស ឆ្នាំមមី អដ្ឋស័ក ព.ស.២៥៧០',
    short: '១១ · ០១ · ២០២៧',
    time: '៥:០០ ល្ងាច',
    weekday: 'ថ្ងៃចន្ទ',
    day: '១១',
    month: 'មករា',
    year: '២០២៧',
    en: { weekday: 'Monday', day: '11th', month: 'January', year: '2027' },
  },
  ceremony: { title: 'ពិធីមង្គលការ', time: '០៧:០០' },
  reception: { title: 'ពិធីជប់លៀង', time: '១៨:០០', welcome: '១៧:០០' },
  venue: {
    name: 'ភោជនីយដ្ឋាន សមភាពថ្មី',
    address: 'អគារ(A) ភូមិថ្មី សង្កាត់ស្វាយដង្គំ ក្រុងសៀមរាប ខេត្តសៀមរាប',
    // From the QR code on the printed card
    mapUrl: 'https://maps.app.goo.gl/RAfd8ybR8dk8NWCL7',
  },
  // Replace with the Telegram link of whoever collects replies
  rsvpUrl: 'https://t.me/your_username',
  dressCode: {
    label: 'សម្លៀកបំពាក់ប្រពៃណីខ្មែរ ឬសម្លៀកបំពាក់ពិធីការ',
    colors: [
      { name: 'បៃតងអូលីវ', value: '#5b6136' },
      { name: 'ស', value: '#f7f4e4' },
      { name: 'មាស', value: '#c9a24d' },
    ],
  },
  wishes: [
    { name: 'សុខា', message: 'សូមជូនពរឱ្យគូស្វាមីភរិយាថ្មីមានសុភមង្គល និងស្រឡាញ់គ្នាជារៀងរហូត។' },
    { name: 'ចន្ទ្រា', message: 'សូមអបអរសាទរ! សូមឱ្យក្តីស្រឡាញ់របស់អ្នកទាំងពីរកាន់តែរីកចម្រើនជារៀងរាល់ថ្ងៃ។' },
    { name: 'វិសាល', message: 'សូមជូនពរឱ្យមានសុខភាពល្អ និងជោគជ័យក្នុងជីវិតអាពាហ៍ពិពាហ៍។' },
  ],
  giftMessage: 'វត្តមានរបស់លោកអ្នក គឺជាអំណោយដ៏ធំបំផុតសម្រាប់យើងខ្ញុំ',
  programme: [
    {
      title: 'កម្មវិធីពេលព្រឹក',
      items: [
        { time: '០៧:០០', label: 'ទទួលភ្ញៀវកិត្តិយស និងពិធីហែជំនួន' },
        { time: '០៨:៣០', label: 'ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត' },
        { time: '០៩:៣០', label: 'ពិធីកាត់សក់បង្កក់សិរី' },
        { time: '១០:៣០', label: 'ពិធីបង្វិលពពិល' },
        { time: '១១:០០', label: 'ពិធីសំពះផ្ទឹម និងចងដៃ' },
      ],
    },
    {
      title: 'កម្មវិធីពេលល្ងាច',
      items: [
        { time: '១៧:០០', label: 'ទទួលភ្ញៀវកិត្តិយស' },
        { time: '១៨:០០', label: 'អញ្ជើញពិសាភោជនាហារ' },
        { time: '១៩:០០', label: 'ពិធីកាត់នំ និងលើកកែវជូនពរ' },
        { time: '១៩:៣០', label: 'កម្សាន្តជាមួយតន្ត្រី' },
      ],
    },
  ],
} as const;
