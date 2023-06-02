export async function getAllEvents() {
  const response = await fetch(
    `https://udemy-next-bbd80-default-rtdb.firebaseio.com/events.json`
  );
  const data = await response.json();
  // console.log(data, 'data');

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  // console.log(events, 'events');

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
export async function getEventById(id: string) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
