export default function HomePage() {
  return (
    <section className="flex w-full flex-col gap-6 py-6 sm:gap-8 sm:py-10">
      <p className="text-sm font-medium uppercase tracking-wide text-foreground/70">
        CampusConnect
      </p>
      <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        A unified platform for student clubs, events, and campus communities.
      </h1>
      <p className="max-w-2xl text-base text-foreground/80 sm:text-lg">
        This foundation is ready for upcoming modules including authentication, club directories,
        attendance, dashboards, and notifications.
      </p>
    </section>
  );
}
