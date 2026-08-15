Notifications Configuration.
{
The header notifications are currently stored directly inside the **`Navbar`** component file.

---

### 📍 File Location

- File Path: [`src/components/Navbar.jsx`](file:///c:/Users/KIIT0001/hackwithus/src/components/Navbar.jsx#L85-L110) (around lines 85–100)

Inside `Navbar.jsx`, the notification dropdown list is currently written inside the JSX block like this:

```jsx
{
  /* Notifications Dropdown Popup */
}
{
  notificationsOpen && (
    <div className="absolute right-0 mt-3 w-80 bg-white border-2 border-black shadow-neo-lg rounded-xl p-4 z-50">
      <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
        <span className="font-mono text-xs text-black uppercase font-extrabold tracking-wider flex items-center gap-1">
          <Flame className="w-3.5 h-3.5 fill-black" /> Live Updates
        </span>
        <span className="text-[10px] bg-brand-yellow text-black font-bold px-2 py-0.5 border border-black rounded">
          3 New
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3 bg-zinc-50 rounded-lg border-2 border-black hover:bg-brand-yellow/20 transition-colors">
          <p className="font-bold text-black mb-0.5">
            Quantum Hack Matrix 2026
          </p>
          <p className="text-zinc-700 text-[11px]">
            Final submission deadline in 18 hours!
          </p>
        </div>
        <div className="p-3 bg-zinc-50 rounded-lg border-2 border-black hover:bg-brand-yellow/20 transition-colors">
          <p className="font-bold text-black mb-0.5">AlgoSprint #42 Live</p>
          <p className="text-zinc-700 text-[11px]">
            3,400 competitors actively solving DP problem set.
          </p>
        </div>
      </div>
    </div>
  );
}
```

---

### 💡 Best Practice: How to make them clean & dynamic

If you want to easily manage notifications or fetch them from a database in the future, you can define a notification array at the top of [`Navbar.jsx`](file:///c:/Users/KIIT0001/hackwithus/src/components/Navbar.jsx):

```javascript
const NOTIFICATIONS = [
  {
    id: 1,
    title: "NO LIMITS. constraints//Zero",
    message: "Registration is now live! 30 days remaining.",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    title: "Quantum Hack Matrix 2026",
    message: "Final submission deadline in 18 hours!",
    time: "5h ago",
    unread: true,
  },
  {
    id: 3,
    title: "AlgoSprint #42 Live",
    message: "3,400 competitors actively solving DP problem set.",
    time: "1d ago",
    unread: false,
  },
];
```

And then loop (`.map()`) over `NOTIFICATIONS` in your JSX:

```jsx
<div className="space-y-3 text-xs">
  {NOTIFICATIONS.map((item) => (
    <div
      key={item.id}
      className="p-3 bg-zinc-50 rounded-lg border-2 border-black hover:bg-brand-yellow/20 transition-colors"
    >
      <div className="flex items-center justify-between mb-0.5">
        <p className="font-bold text-black">{item.title}</p>
        <span className="text-[10px] font-mono text-zinc-500">{item.time}</span>
      </div>
      <p className="text-zinc-700 text-[11px]">{item.message}</p>
    </div>
  ))}
</div>
```

Viewed Navbar.jsx:96-117
Edited Navbar.jsx
}

Events Configuration.
{
Yes! All the event listings for **Ongoing**, **Upcoming**, and **Concluded** hackathons, competitions, workshops, and quizzes are defined in a centralized data file.

Here is the complete breakdown of where the code lives, how it works, and how you can add your own custom events.

---

### 1. Where is the code located?

All event data lives inside a single data file:

- File Path: [`src/data/eventsData.js`](file:///c:/Users/KIIT0001/hackwithus/src/data/eventsData.js)

This file exports two main objects:

1. **`SECTION_METADATA`**: Stores the title, subtitle, and icons for each category (`hackathons`, `competitions`, `workshops`, `quizzes`).
2. **`EVENTS_DATA`**: Stores the arrays of events organized by category and tab status (`ongoing`, `upcoming`, `concluded`).

---

### 2. How the Data Structure Works

Inside [`src/data/eventsData.js`](file:///c:/Users/KIIT0001/hackwithus/src/data/eventsData.js), the `EVENTS_DATA` object is structured like this:

```js
export const EVENTS_DATA = {
  hackathons: {
    ongoing: [ /* List of live hackathons */ ],
    upcoming: [ /* List of upcoming hackathons */ ],
    concluded: [ /* List of completed hackathons with winners */ ]
  },
  competitions: {
    ongoing: [ ... ],
    upcoming: [ ... ],
    concluded: [ ... ]
  },
  workshops: {
    ongoing: [ ... ],
    upcoming: [ ... ],
    concluded: [ ... ]
  },
  quizzes: {
    ongoing: [ ... ],
    upcoming: [ ... ],
    concluded: [ ... ]
  }
};
```

---

### 3. How to Add Your Own Custom Events

To add a new event, simply open [`src/data/eventsData.js`](file:///c:/Users/KIIT0001/hackwithus/src/data/eventsData.js) and add a new object to the desired category and tab list.

#### Example A: Adding an **Ongoing** Event

To add a live event to the **Ongoing** tab of Hackathons, append a new object inside `EVENTS_DATA.hackathons.ongoing`:

```js
{
  id: 'custom-hack-1', // Unique ID
  title: 'AI Product Innovation Challenge 2026',
  category: 'Generative AI & LLMs',
  difficulty: 'Intermediate', // 'Advanced' | 'Intermediate' | 'Hard' | 'All Levels'
  prizePool: '$25,000',
  participantsCount: 850,
  endsIn: '24:00:00', // Countdown string displayed on card
  description: 'Build innovative consumer AI applications using multi-modal LLM APIs.',
  tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  organizer: 'HackWithUs Labs'
}
```

#### Example B: Adding an **Upcoming** Event

To add an event to the **Upcoming** tab of Workshops:

```js
{
  id: 'custom-work-1',
  title: 'Full-Stack Next.js 15 & Server Actions Workshop',
  category: 'Web Development',
  difficulty: 'Intermediate',
  prizePool: 'Free Swag + Certificate',
  startsIn: '4 Days',
  startDate: 'Aug 22, 2026',
  regDeadline: 'Aug 21, 2026',
  description: 'Master modern server-rendered architectures, streaming SSR, and database mutations.',
  tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  organizer: 'Frontend Guild'
}
```

#### Example C: Adding a **Concluded** Event (With Winner Leaderboard)

To add a completed event to the **Concluded** tab with winners:

```js
{
  id: 'custom-comp-1',
  title: 'Global Cyber CTF Championship 2025',
  category: 'Cybersecurity',
  prizePool: '$30,000',
  totalTeams: 620,
  summary: '620 global security teams competed in binary exploitation, reverse engineering, and web hacking.',
  winners: [
    { rank: '1st Place', team: 'Team ZeroDay', prize: '$15,000', project: 'Binary Patch Exploit Kit' },
    { rank: '2nd Place', team: 'NullByte', prize: '$10,000', project: 'Kernel Firewall Bypass' },
    { rank: '3rd Place', team: 'CyberDefenders', prize: '$5,000', project: 'Automated Log Analyzer' }
  ],
  tags: ['CTF', 'Pwn', 'Reverse Engineering', 'Crypto'],
  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
}
```

---

### 4. How the Data Flows to the Screen

1. **[`App.jsx`](file:///c:/Users/KIIT0001/hackwithus/src/App.jsx#L5-L10)**: Imports `EVENTS_DATA` and `SECTION_METADATA` from `src/data/eventsData.js`.
2. When a user clicks a section (e.g. **Hackathons**), `App.jsx` renders `<EventSection sectionMeta={SECTION_METADATA.hackathons} events={EVENTS_DATA.hackathons} />`.
3. **[`EventSection.jsx`](file:///c:/Users/KIIT0001/hackwithus/src/components/EventSection.jsx#L15-L35)**: Reads the active tab (`ongoing`, `upcoming`, or `concluded`) from state, filters by search query and difficulty, and maps over the array:
   ```jsx
   {
     filteredEvents.map((event) => (
       <EventCard
         key={event.id}
         event={event}
         activeTab={activeTab}
         onOpenModal={onOpenModal}
       />
     ));
   }
   ```
4. **[`EventCard.jsx`](file:///c:/Users/KIIT0001/hackwithus/src/components/EventCard.jsx)**: Formats and displays the event image, title, tags, prize pool, dates, and corresponding action button (**"Join Now"**, **"Register Now"**, or **"View Results"**).

---

### 5. Connecting to a Backend Database in the Future (Optional)

If you want to pull live events from a real database (like PostgreSQL, Firebase, or MongoDB) later, you can keep the exact same UI structure and simply replace `EVENTS_DATA` in `App.jsx` with an API `fetch()` call:

```js
// Example future API integration:
const [eventsData, setEventsData] = useState(null);

useEffect(() => {
  fetch("https://api.yourdomain.com/events")
    .then((res) => res.json())
    .then((data) => setEventsData(data));
}, []);
```

}
