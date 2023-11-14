interface HeaderAction {
  Title: string;
  Action?: string;
  Url?: string;
}

const actions: HeaderAction[] = [
  { Title: "home" },
  { Title: "resume", Url: "/Jayden_Whiley_CV.pdf" },
  { Title: "github", Url: "https://github.com/JaydenWhiley/" },
  { Title: "linkedin", Url: "https://www.linkedin.com/in/jwhiley/" },
];

export default () => {
  return (
    <div
      style={{
        fontFamily: "Aspria",
        fontSize: 30,
        marginBottom: 30,
        padding: 10,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}>
      {actions.map((x) => (
        <a
          href={x.Url ? x.Url : undefined}
          className="text-xl sm:text-2xl lg:text-3xl opacity-60 hover:opacity-100 transition-opacity duration-300 no-underline"
          id={"headerAction_" + x.Title}>
          {x.Title}
        </a>
      ))}
    </div>
  );
};
