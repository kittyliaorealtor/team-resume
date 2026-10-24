/*
  The MARS Team agent list.
  Every agent here shows up in the CMA Builder's agent dropdown, in this order.
  The first agent is selected automatically on a new CMA.

  id     a short unique name with no spaces (used behind the scenes)
  name   as it should print on the CMA
  title  printed under the name
  phone, email   leave '' to hide
  photo  the headshot's file name inside the agents/ folder, e.g. 'kitty-liao.jpg'. Leave '' for no headshot.
*/
window.MARS_AGENTS = [
  { id: 'kitty-liao',         name: 'Kitty Liao',           title: 'Licensed Real Estate Salesperson', phone: '917-858-5789', email: 'kitty@kittyliaonyc.com',            photo: 'kitty-liao.jpg' },
  { id: 'maya-bahena',        name: 'Maya Bahena',          title: 'Licensed Real Estate Salesperson', phone: '516-661-7164', email: 'maya@themarsteam.com',              photo: 'maya-bahena.jpg' },
  { id: 'megan-morillo-torres', name: 'Megan Morillo Torres', title: 'Licensed Real Estate Salesperson', phone: '516-712-0312', email: 'megan@themarsteam.com',          photo: 'megan-morillo-torres.jpg' },
  { id: 'mohammed-ali-rizvi', name: 'Mohammed-Ali Rizvi',   title: 'Licensed Real Estate Salesperson', phone: '516-302-3202', email: 'mohammedali@themarsteam.com',       photo: 'mohammed-ali-rizvi.jpg' },
  { id: 'randy-lin',          name: 'Randy Lin',            title: 'Licensed Real Estate Salesperson', phone: '607-423-8965', email: 'randy@themarsteam.com',             photo: 'randy-lin.jpg' },
  { id: 'sean-devilla',       name: 'Sean DeVilla',         title: 'Licensed Real Estate Salesperson', phone: '718-501-0249', email: 'sean@themarsteam.com',              photo: 'sean-devilla.jpg' },
  { id: 'matthew-kim',        name: 'Matthew Kim',          title: 'Licensed Real Estate Salesperson', phone: '917-545-6123', email: 'matthewkimre@gmail.com',            photo: 'matthew-kim.jpg' },
  { id: 'raquel-vinasco',     name: 'Raquel Vinasco',       title: 'Licensed Real Estate Salesperson', phone: '516-244-1000', email: 'rachelvinas@gmail.com',             photo: 'raquel-vinasco.jpg' },
  { id: 'michael-jaghab',     name: 'Michael Jaghab',       title: 'Licensed Real Estate Salesperson', phone: '516-513-2294', email: 'michaeljaghabrealestate@gmail.com', photo: 'michael-jaghab.jpg' },
  { id: 'kunal-verma',        name: 'Kunal Verma',          title: 'Licensed Real Estate Salesperson', phone: '646-249-0810', email: 'kunalhomes99@gmail.com',            photo: 'kunal-verma.jpg' }
];
