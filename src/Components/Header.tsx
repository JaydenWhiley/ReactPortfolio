interface HeaderAction {
  Title: string;
}

const actions: HeaderAction[] = [{ Title: "home" }, { Title: "resume" }, { Title: "github" }, { Title: "linkedin" }];

export default () => {
  return (
    <div
      style={{
        fontFamily: "Aspria",
        fontSize: 30,
        opacity: 0.6,
        marginBottom: 30,
        padding: 10,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}>
      {actions.map((x) => (
        <span className="text-xl sm:text-2xl lg:text-3xl" id={"headerAction_" + x.Title}>
          {x.Title}
        </span>
      ))}
    </div>
  );
};
