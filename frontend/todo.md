## MVP criteria for day project

- no backend. data for service will be stored in local storage and maintained with react context. Priority is CRUD of data, data shaping, and presenting data in UI.

### _create your life profile- areas of your life you track and the actions you will track._

---

- Shape of data:
  - Area of Life
    - actions: {action: string, point: number}[]
    - points accumilated: number

Pointing process:

Future endevor: leveling, effecting the amount of points required to level, resetting the points accumilated,

### _monitor your stats in the dashboard_

- list of tasks, labeled with their area of life and with a button that when clicked contributes points to that area of life
- list of areas of life with current points
- list of areas lacking with the areas of life with the least amount of points
- list of areas of life that have the highest points

- future goal: pie chart of the areas of life, the higher the points the higher the ratio that area takes up of the pie

### _contribute to your stats and reflect on them in your character journal. (out of MVP scope)_

- log entries on thoughts about each area of life
